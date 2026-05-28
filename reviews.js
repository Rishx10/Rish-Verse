// ==========================================================================
// RISH VERSE UNIFIED INTERACTIVE DATABASE ROUTER (FROM SCRATCH)
// ==========================================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onValue, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// YOUR SYSTEM DATABASE INSTANCE CONFIGURATION
const firebaseConfig = {
    databaseURL: "https://rish-verse-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ──────────────────────────────────────────────────────────────────────────
// POEM & HOME SCREEN FIVE-STAR RATINGS (YOUR WORKING ORIGINAL LOGIC)
// ──────────────────────────────────────────────────────────────────────────
function initPoemSystem() {
    const reviewForm = document.getElementById("reviewForm");
    const poemTitleElement = document.querySelector(".poem-title");
    const stars = document.querySelectorAll(".star-rating span");
    let selectedRating = 0;

    if (!reviewForm) return;

    const poemId = poemTitleElement ? poemTitleElement.innerText.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase() : "global-home";

    if (stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener("click", () => {
                selectedRating = parseInt(star.getAttribute("data-rating"), 10);
                updateStarDisplay(stars, selectedRating);
            });
            star.addEventListener("mouseover", () => {
                updateStarDisplay(stars, parseInt(star.getAttribute("data-rating"), 10));
            });
            star.addEventListener("mouseleave", () => {
                updateStarDisplay(stars, selectedRating);
            });
        });
    }

    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("reviewName")?.value.trim() || "Anonymous Voyager";
        const textInput = document.getElementById("reviewText")?.value.trim() || "";

        if (selectedRating === 0) {
            alert("⚠️ Please select a star rating before dropping your echo.");
            return;
        }

        const reviewPayload = {
            name: nameInput,
            text: textInput,
            rating: selectedRating,
            timestamp: Date.now()
        };

        push(ref(db, `reviews/${poemId}`), reviewPayload).then(() => {
            if (document.getElementById("reviewText")) document.getElementById("reviewText").value = "";
            if (document.getElementById("reviewName")) document.getElementById("reviewName").value = "";
            selectedRating = 0;
            updateStarDisplay(stars, 0);
            alert("✨ Your echo has been etched into the database.");
        });
    });

    const reviewsContainer = document.getElementById("reviewsContainer");
    if (reviewsContainer) {
        onValue(ref(db, `reviews/${poemId}`), (snapshot) => {
            reviewsContainer.innerHTML = "";
            const data = snapshot.val();
            if (!data) {
                reviewsContainer.innerHTML = `<p style="font-size:0.9rem; color:rgba(255,255,255,0.3); font-style:italic;">No responses here yet.</p>`;
                return;
            }
            Object.values(data).sort((a,b) => b.timestamp - a.timestamp).forEach(review => {
                const node = document.createElement("div");
                node.className = "review-card";
                node.style.background = "rgba(255,255,255,0.02)";
                node.style.border = "1px solid rgba(255,255,255,0.05)";
                node.style.padding = "16px";
                node.style.borderRadius = "8px";
                node.style.marginBottom = "12px";
                let starString = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
                node.innerHTML = `
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.85rem;">
                        <strong style="color:#7d8f7a;">${escapeHtml(review.name)}</strong>
                        <span style="color:#ad9363;">${starString}</span>
                    </div>
                    <p style="margin:0; font-size:0.9rem; color:rgba(255,255,255,0.8); line-height:1.4;">${escapeHtml(review.text)}</p>
                `;
                reviewsContainer.appendChild(node);
            });
        });
    }
}

function updateStarDisplay(elements, ranking) {
    elements.forEach(el => {
        el.style.color = parseInt(el.getAttribute("data-rating"), 10) <= ranking ? "#ad9363" : "rgba(255, 255, 255, 0.2)";
    });
}

// ──────────────────────────────────────────────────────────────────────────
// EXHIBITION VISUAL LIKES & PANEL COMMENTS (BUILT CLEANLY FROM SCRATCH)
// ──────────────────────────────────────────────────────────────────────────
function initGallerySystem() {
    const galleryForm = document.getElementById("galleryReviewForm");
    const likeBtn = document.getElementById("galleryLikeBtn");

    if (!galleryForm && !likeBtn) return;

    // Fired by the script.js controller whenever a slide changes or thumbnail is tapped
    window.addEventListener("lightboxOpened", () => {
        if (!window.currentImageTargetId) return;
        syncGallerySocialData(window.currentImageTargetId);
    });

    if (galleryForm) {
        galleryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!window.currentImageTargetId) return;

            const nameInput = document.getElementById("galleryNameField").value.trim();
            const textInput = document.getElementById("galleryTextField").value.trim();
            if (!textInput) return;

            const commentPayload = {
                author: nameInput || "Anonymous Voyager",
                text: textInput,
                timestamp: Date.now()
            };

            push(ref(db, `gallery/${window.currentImageTargetId}/comments`), commentPayload).then(() => {
                document.getElementById("galleryTextField").value = "";
                triggerToastNotification("✨ Comment recorded.");
            });
        });
    }

    if (likeBtn) {
        likeBtn.addEventListener("click", () => {
            if (!window.currentImageTargetId) return;

            const localLikeKey = `liked_${window.currentImageTargetId}`;
            const staticLikeRef = ref(db, `gallery/${window.currentImageTargetId}/likes`);
            let currentLikesCount = parseInt(likeBtn.getAttribute("data-count") || "0", 10);

            if (localStorage.getItem(localLikeKey)) {
                currentLikesCount = Math.max(0, currentLikesCount - 1);
                set(staticLikeRef, currentLikesCount).then(() => {
                    localStorage.removeItem(localLikeKey);
                    likeBtn.classList.remove("liked");
                });
            } else {
                currentLikesCount += 1;
                set(staticLikeRef, currentLikesCount).then(() => {
                    localStorage.setItem(localLikeKey, "true");
                    likeBtn.classList.add("liked");
                });
            }
        });
    }
}

function syncGallerySocialData(targetId) {
    const commentsContainer = document.getElementById("galleryCommentsBox");
    const countLabel = document.getElementById("likeCountLabel");
    const likeBtn = document.getElementById("galleryLikeBtn");

    if (!commentsContainer || !countLabel || !likeBtn) return;

    likeBtn.classList.toggle("liked", !!localStorage.getItem(`liked_${targetId}`));

    // Synchronize Like Counter Stream
    onValue(ref(db, `gallery/${targetId}/likes`), (snapshot) => {
        const val = snapshot.val() || 0;
        countLabel.innerText = val;
        likeBtn.setAttribute("data-count", val);
    });

    // Synchronize Scrollable Comments Feed Stream
    onValue(ref(db, `gallery/${targetId}/comments`), (snapshot) => {
        commentsContainer.innerHTML = "";
        const data = snapshot.val();

        if (!data) {
            commentsContainer.innerHTML = `<p style="font-size:0.85rem; color:rgba(255,255,255,0.2); text-align:center; margin-top:40px; font-style:italic;">Leave your mark below.</p>`;
            return;
        }

        Object.values(data).sort((a,b) => b.timestamp - a.timestamp).forEach(node => {
            const block = document.createElement("div");
            block.className = "comment-node-card";
            block.style.background = "rgba(255,255,255,0.02)";
            block.style.border = "1px solid rgba(255,255,255,0.04)";
            block.style.borderRadius = "8px";
            block.style.padding = "14px";
            block.style.marginBottom = "12px";
            block.innerHTML = `
                <div style="display:flex; justify-content:space-between; margin-bottom:4px; font-size:0.85rem;">
                    <span style="font-weight:500; color:#7d8f7a;">${escapeHtml(node.author)}</span>
                </div>
                <p style="margin:0; font-size:0.9rem; line-height:1.4; color:rgba(255,255,255,0.75); word-break:break-word;">${escapeHtml(node.text)}</p>
            `;
            commentsContainer.appendChild(block);
        });
    });
}

initGallerySystem();
initPoemSystem();

function triggerToastNotification(msg) {
    const box = document.getElementById("toast-container");
    if (!box) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = msg;
    box.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}