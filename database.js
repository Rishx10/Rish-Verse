// ==========================================================================
// UNIFIED CLOUD FIRESTORE ECOSYSTEM & REAL-TIME RESPONSE SYNC ENGINE
// ==========================================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getFirestore, 
    doc, 
    collection, 
    addDoc, 
    setDoc,
    updateDoc,
    increment,
    query, 
    orderBy, 
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Verified application configuration parameters setup
const firebaseConfig = {
    apiKey: "AIzaSyDLYkLPJnJb2DX7_NxPqzqvQKsSeLLuihA",
    authDomain: "rish-verse.firebaseapp.com",
    projectId: "rish-verse",
    storageBucket: "rish-verse.firebasestorage.app",
    messagingSenderId: "88076530084",
    appId: "1:88076530084:web:4ea80f10fb3dbe3c419131"
};

// Initialize Active Services Connection Connections
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Clean and secure strings to prevent HTML injection breaches
 */
function escapeHtmlStrings(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

/**
 * Creates and renders a premium on-screen minimalist toast alert 
 */
function displayMinimalistToast(message) {
    let container = document.getElementById("toast-container");
    
    // Inject fallback container frame if missing from template DOM structures
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    container.appendChild(toast);

    // Gracefully fade and wipe item node after display timeline expires
    setTimeout(() => {
        toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ==========================================================================
// A. NATIVE LOOKBOOK 5-STAR REGISTRY MODULE (HOME & POEMS COMPATIBLE)
// ==========================================================================
function mountUnifiedLedgerSystem() {
    const targetFormNode = document.getElementById("reviewForm");
    const starInteractiveSpans = document.querySelectorAll(".star-rating span");
    const recordsOutputBox = document.getElementById("reviewsContainer");
    const dynamicPoemTitleIndicator = document.querySelector(".poem-title");

    if (!targetFormNode) return;

    // Evaluate route environment context ID pathway automatically 
    const contextualRawId = dynamicPoemTitleIndicator ? dynamicPoemTitleIndicator.innerText : "global-home";
    
    // Declaring token with let so it maps across functional loops cleanly
    let secureStorageCollectionToken = contextualRawId.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();

    // ==========================================================================
    // HARD-ALIGNMENT BRIDGING: RE-LINKING HISTORICAL FIRESTORE COLLECTIONS
    // ==========================================================================
    if (secureStorageCollectionToken === "global-home") {
        secureStorageCollectionToken = "home"; // Restores historical homepage collection link
    } else if (secureStorageCollectionToken === "unsaid") {
        secureStorageCollectionToken = "p1";    // Links old p1 reviews
    } else if (secureStorageCollectionToken === "where-the-dreamlight-burns") {
        secureStorageCollectionToken = "p2";    // Links old p2 reviews
    } else if (secureStorageCollectionToken === "the-rouge-in-my-throat") {
        secureStorageCollectionToken = "p4";    // Maps back to your original p4 routing path
    } else if (secureStorageCollectionToken === "liberation") {
        secureStorageCollectionToken = "p5";    // Links old p5 reviews
    }
   
    let internallyTrackedRatingScaleIndex = 0;

    /**
     * Maps glowing sage-green illumination classes cleanly across index spans
     */
    function colorizeStarSequenceGlow(ratingIndexValue) {
        starInteractiveSpans.forEach(star => {
            const currentItemWeight = parseInt(star.getAttribute("data-rating"), 10);
            if (currentItemWeight <= ratingIndexValue) {
                star.classList.add("active");
                star.style.color = "#7d8f7a"; // Strict style injection override
            } else {
                star.classList.remove("active");
                star.style.color = "rgba(255, 255, 255, 0.1)";
            }
        });
    }

    // Bind kinetic movement listener events onto star arrays
    if (starInteractiveSpans.length > 0) {
        starInteractiveSpans.forEach(star => {
            star.addEventListener("click", (e) => {
                e.preventDefault();
                internallyTrackedRatingScaleIndex = parseInt(star.getAttribute("data-rating"), 10);
                colorizeStarSequenceGlow(internallyTrackedRatingScaleIndex);
            });
            star.addEventListener("mouseover", () => {
                colorizeStarSequenceGlow(parseInt(star.getAttribute("data-rating"), 10));
            });
            star.addEventListener("mouseleave", () => {
                colorizeStarSequenceGlow(internallyTrackedRatingScaleIndex);
            });
        });
    }

    // Strict non-refresh form execution listener block
    targetFormNode.addEventListener("submit", async (e) => {
        e.preventDefault(); // Lock browser from running full page refresh cycles completely
        
        const usernamePayloadField = document.getElementById("reviewName")?.value.trim() || "Anonymous Voyager";
        const narrativePayloadField = document.getElementById("reviewText")?.value.trim() || "";

        if (internallyTrackedRatingScaleIndex === 0) {
            displayMinimalistToast("⚠️ Please select a star metric before etching your response.");
            return;
        }

        const dataUploadPackage = {
            name: usernamePayloadField,
            text: narrativePayloadField,
            rating: internallyTrackedRatingScaleIndex,
            timestamp: Date.now()
        };

        try {
            // Push structured transactional package straight to Cloud Firestore logs
            await addDoc(collection(db, "reviews", secureStorageCollectionToken, "entries"), dataUploadPackage);
            
            // Clean input state targets instantly on transaction resolution
            targetFormNode.reset();
            internallyTrackedRatingScaleIndex = 0;
            colorizeStarSequenceGlow(0);
            
            displayMinimalistToast("✨ Your impression has been etched into the ledger.");
        } catch (err) {
            console.error("Database Transmission Fault: ", err);
            displayMinimalistToast("⚠️ Transmission failure. Check cloud routing restrictions.");
        }
    });

    // Handle real-time render stream feeding layout containers
    if (recordsOutputBox) {
        const queryStructureRef = query(
            collection(db, "reviews", secureStorageCollectionToken, "entries"), 
            orderBy("timestamp", "desc")
        );
        
        onSnapshot(queryStructureRef, (snapshotSnapshot) => {
            recordsOutputBox.innerHTML = "";
            
            if (snapshotSnapshot.empty) {
                recordsOutputBox.innerHTML = `<p style="font-size:0.85rem; color:rgba(255,255,255,0.15); font-style:italic; text-align:center; padding: 20px 0;">No logs recorded inside this sequence index yet.</p>`;
                return;
            }

            snapshotSnapshot.forEach((documentWrapper) => {
                const docData = documentWrapper.data();
                const cardOuterMarkupBlock = document.createElement("div");
                cardOuterMarkupBlock.className = "review-card";
                
                // Construct clean typographical character strings to match requested layout balances
                let compiledStarIconsString = "★".repeat(docData.rating) + "☆".repeat(5 - docData.rating);
                
                cardOuterMarkupBlock.innerHTML = `
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.85rem;">
                        <strong style="color:#7d8f7a; font-weight:400; letter-spacing:0.5px;">${escapeHtmlStrings(docData.name)}</strong>
                        <span style="color:#7d8f7a; letter-spacing:1px; font-size:0.9rem;">${compiledStarIconsString}</span>
                    </div>
                    <p style="margin:0; font-size:0.95rem; color:rgba(255,255,255,0.65); line-height:1.6; font-weight:200;">${escapeHtmlStrings(docData.text)}</p>
                `;
                recordsOutputBox.appendChild(cardOuterMarkupBlock);
            });
        });
    }
}

// ==========================================================================
// B. REAL-TIME PORTFOLIO GALLERY ENGAGEMENT NETWORKS PIPELINE MODULE
// ==========================================================================
function mountGalleryEngagementSystem() {
    const visualCommentFormNode = document.getElementById("galleryReviewForm");
    const heartLikeActionBtn = document.getElementById("galleryLikeBtn");

    if (!visualCommentFormNode && !heartLikeActionBtn) return;

    let cancelActiveContinuousFeedListenerStream = null;

    window.addEventListener("lightboxOpened", () => {
        if (!window.currentImageTargetId) return;

        if (cancelActiveContinuousFeedListenerStream) {
            cancelActiveContinuousFeedListenerStream();
        }

        cancelActiveContinuousFeedListenerStream = bindLiveGalleryDataStreams(window.currentImageTargetId);
    });

    if (visualCommentFormNode) {
        visualCommentFormNode.addEventListener("submit", async (e) => {
            e.preventDefault(); // Prevent modal display environment exits
            const dynamicImageKeyRef = window.currentImageTargetId;
            if (!dynamicImageKeyRef) return;

            const typedAuthorField = document.getElementById("galleryNameField").value.trim();
            const typedContentField = document.getElementById("galleryTextField").value.trim();
            if (!typedContentField) return;

            const inputCommentDataPackage = {
                author: typedAuthorField || "Anonymous Voyager",
                text: typedContentField,
                timestamp: Date.now()
            };

            try {
                await addDoc(collection(db, "gallery", dynamicImageKeyRef, "comments"), inputCommentDataPackage);
                document.getElementById("galleryTextField").value = "";
                displayMinimalistToast("✨ Impression transmitted safely.");
            } catch (err) {
                console.error("Comment Sync Drop Failure: ", err);
            }
        });
    }

    if (heartLikeActionBtn) {
        heartLikeActionBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            const activeFocusedMediaToken = window.currentImageTargetId;
            if (!activeFocusedMediaToken) return;

            const distinctLocalStorageKeyFlag = `liked_${activeFocusedMediaToken}`;
            const targetMetadataDocumentRef = doc(db, "gallery", activeFocusedMediaToken);

            if (localStorage.getItem(distinctLocalStorageKeyFlag)) {
                try {
                    await updateDoc(targetMetadataDocumentRef, { likesCount: increment(-1) });
                    localStorage.removeItem(distinctLocalStorageKeyFlag);
                    heartLikeActionBtn.classList.remove("liked");
                } catch (err) {
                    await setDoc(targetMetadataDocumentRef, { likesCount: 0 }, { merge: true });
                    localStorage.removeItem(distinctLocalStorageKeyFlag);
                    heartLikeActionBtn.classList.remove("liked");
                }
            } else {
                try {
                    await updateDoc(targetMetadataDocumentRef, { likesCount: increment(1) });
                    localStorage.setItem(distinctLocalStorageKeyFlag, "true");
                    heartLikeActionBtn.classList.add("liked");
                } catch (err) {
                    await setDoc(targetMetadataDocumentRef, { likesCount: 1 }, { merge: true });
                    localStorage.setItem(distinctLocalStorageKeyFlag, "true");
                    heartLikeActionBtn.classList.add("liked");
                }
            }
        });
    }
}

function bindLiveGalleryDataStreams(targetImageFileToken) {
    const commentsListScrollBox = document.getElementById("galleryCommentsBox");
    const globalCountTextLabel = document.getElementById("likeCountLabel");
    const localInteractiveLikeWidget = document.getElementById("galleryLikeBtn");

    if (!commentsListScrollBox || !globalCountTextLabel || !localInteractiveLikeWidget) return null;

    const userHasLikedPriorRecordFlag = !!localStorage.getItem(`liked_${targetImageFileToken}`);
    localInteractiveLikeWidget.classList.toggle("liked", userHasLikedPriorRecordFlag);

    const coreMetaDocRef = doc(db, "gallery", targetImageFileToken);
    const unbindMetadataListenerChannel = onSnapshot(coreMetaDocRef, (documentSnapshot) => {
        let accurateLikesSumTally = 0;
        if (documentSnapshot.exists()) {
            const data = documentSnapshot.data();
            accurateLikesSumTally = data.likesCount || 0;
        }
        if (accurateLikesSumTally < 0) accurateLikesSumTally = 0;
        
        globalCountTextLabel.innerText = accurateLikesSumTally;
        localInteractiveLikeWidget.setAttribute("data-count", accurateLikesSumTally);
    });

    const activeCommentsCollectionSubquery = query(
        collection(db, "gallery", targetImageFileToken, "comments"), 
        orderBy("timestamp", "desc")
    );
    const unbindCommentsListenerChannel = onSnapshot(activeCommentsCollectionSubquery, (snapshotObject) => {
        commentsListScrollBox.innerHTML = "";

        if (snapshotObject.empty) {
            commentsListScrollBox.innerHTML = `<p style="font-size:0.85rem; color:rgba(255,255,255,0.15); text-align:center; margin-top:30px; font-style:italic; font-weight:200;">Leave your mark on this frame below.</p>`;
            return;
        }

        snapshotObject.forEach((commentDocNode) => {
            const nodeData = commentDocNode.data();
            const outerCardWrapperElement = document.createElement("div");
            outerCardWrapperElement.className = "comment-node-card";
            
            outerCardWrapperElement.innerHTML = `
                <div style="display:flex; justify-content:space-between; margin-bottom:5px; font-size:0.85rem;">
                    <span style="font-weight:400; color:#7d8f7a;">${escapeHtmlStrings(nodeData.author)}</span>
                </div>
                <p style="margin:0; font-size:0.9rem; line-height:1.5; color:rgba(255,255,255,0.6); word-break:break-word; font-weight:200;">${escapeHtmlStrings(nodeData.text)}</p>
            `;
            commentsListScrollBox.appendChild(outerCardWrapperElement);
        });
    });

    return () => {
        unbindMetadataListenerChannel();
        unbindCommentsListenerChannel();
    };
}

// Fire structural initialization loops on DOM settlement
document.addEventListener("DOMContentLoaded", () => {
    mountUnifiedLedgerSystem();
    mountGalleryEngagementSystem();
});