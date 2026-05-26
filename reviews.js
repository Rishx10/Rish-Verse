import { db } from "./firebase.js";
import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    where,
    orderBy,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Page level path string calculator helper
function getCurrentPageId() {
    const path = window.location.pathname;
    const pageName = path.split("/").pop() || "index.html";
    if (pageName === "" || pageName === "index.html") return "page-index";
    return "page-" + pageName.replace(".html", "");
}

window.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CORE FLOW SETUP (MAIN PAGE CONTEXT) ---
    const pageTargetId = getCurrentPageId();
    setupReviewContainer(document.getElementById("reviewForm"), document.getElementById("reviewsContainer"), pageTargetId, false);

    // --- 2. MODAL FLOW SETUP (LIGHTBOX CONTEXT) ---
    const modalForm = document.querySelector(".modal-form");
    const modalFeed = document.querySelector(".modal-feed");
    let unsubsribeModalFeed = null;

    // Listen for custom trigger dispatched by script.js when a photo gets clicked open
    window.addEventListener("lightboxOpened", () => {
        const targetImageId = window.currentImageTargetId;
        if (!targetImageId) return;

        // Tear down previous live query loops if clicking between separate image thumbnails
        if (unsubsribeModalFeed) {
            unsubsribeModalFeed();
        }

        // Spin up a brand new real-time pipe focused entirely on this specific photo thumbnail frame
        unsubsribeModalFeed = setupReviewContainer(modalForm, modalFeed, targetImageId, true);
    });

    // --- 3. MASTER INJECTION CONTROLLER ENGINE ---
    function setupReviewContainer(formElement, feedElement, trackingId, isLightboxModal = false) {
        if (!feedElement) return null;

        let localSelectedRating = 0;
        let starSelectorStr = isLightboxModal ? ".modal-stars span" : ".star-rating span";
        const targetStars = document.querySelectorAll(starSelectorStr);

        // Track star clicks on current active form elements context
        if (isLightboxModal && targetStars.length > 0) {
            targetStars.forEach(star => {
                // Remove previous clone states to cleanly capture click nodes
                const freshStar = star.cloneNode(true);
                star.parentNode.replaceChild(freshStar, star);

                freshStar.addEventListener("click", () => {
                    localSelectedRating = Number(freshStar.dataset.rating);
                    const allModalStars = document.querySelectorAll(".modal-stars span");
                    allModalStars.forEach(s => s.classList.remove("active"));
                    for (let i = 0; i < localSelectedRating; i++) {
                        allModalStars[i].classList.add("active");
                    }
                });
            });
        } else if (!isLightboxModal && targetStars.length > 0) {
            // Main page style clicks
            targetStars.forEach(star => {
                star.addEventListener("click", () => {
                    localSelectedRating = Number(star.dataset.rating);
                    targetStars.forEach(s => s.classList.remove("active"));
                    for (let i = 0; i < localSelectedRating; i++) {
                        targetStars[i].classList.add("active");
                    }
                });
            });
        }

        // Process submissions accurately mapping destination properties
        if (formElement) {
            // Clean previous submit references if updating modal components
            const newForm = formElement.cloneNode(true);
            formElement.parentNode.replaceChild(newForm, formElement);

            newForm.addEventListener("submit", async (e) => {
                e.preventDefault();

                // Dynamically fetch accurate target text values across split fields
                const nameInput = newForm.querySelector("input[type='text']");
                const textInput = newForm.querySelector("textarea");

                const finalName = nameInput.value || "Anonymous";
                const finalContextText = textInput.value;
                const activeLiveId = isLightboxModal ? window.currentImageTargetId : trackingId;

                if (localSelectedRating === 0) {
                    alert("Please select stars.");
                    return;
                }

                try {
                    await addDoc(collection(db, "reviews"), {
                        name: finalName,
                        text: finalContextText,
                        rating: localSelectedRating,
                        targetId: activeLiveId,
                        createdAt: serverTimestamp()
                    });

                    alert("Review submitted 🌒");
                    newForm.reset();
                    
                    const starsToClean = isLightboxModal ? document.querySelectorAll(".modal-stars span") : targetStars;
                    starsToClean.forEach(s => s.classList.remove("active"));
                    localSelectedRating = 0;
                } catch (err) {
                    console.error("Firestore Error: ", err);
                    alert("Submission failed");
                }
            });
        }

        // Active Cloud Query Setup
        const activeLookupId = isLightboxModal ? window.currentImageTargetId : trackingId;
        const q = query(
            collection(db, "reviews"),
            where("targetId", "==", activeLookupId),
            orderBy("createdAt", "desc")
        );

        const closeConnection = onSnapshot(q, (snapshot) => {
            feedElement.innerHTML = "";

            if (snapshot.empty) {
                feedElement.innerHTML = `<p style="color: #666; font-style: italic; margin-top: 15px;">No thoughts left here yet.</p>`;
                return;
            }

            snapshot.forEach((doc) => {
                const data = doc.data();
                let starsString = "";
                for (let i = 1; i <= 5; i++) {
                    starsString += i <= data.rating ? "★" : "☆";
                }

                const card = document.createElement("div");
                card.classList.add("review-card");
                card.style.animation = "fadeIn 0.4s ease forwards";

                card.innerHTML = `
                    <h3>${data.name || "Anonymous"}</h3>
                    <div class="review-stars" style="color: #7d8f7a; letter-spacing: 2px; margin-bottom: 8px;">${starsString}</div>
                    <p style="font-size: 14px; line-height: 1.5; color: #ccc;">${data.text}</p>
                `;
                feedElement.appendChild(card);
            });
        }, (error) => {
            console.warn("Firestore pipeline connection notice:", error);
        });

        return closeConnection;
    }
});