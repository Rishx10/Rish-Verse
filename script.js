// ==========================================================================
// 1. GLOBAL LIFESTYLE ROUTER (PREVENTS BACK-BUTTON OVERLAY FREEZES)
// ==========================================================================
window.addEventListener("pageshow", (event) => {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        const transitionLayer = document.querySelector(".page-transition");
        const loaderLayer = document.querySelector(".loader");
        
        if (transitionLayer) transitionLayer.classList.remove("active");
        if (loaderLayer) {
            loaderLayer.style.opacity = "0";
            loaderLayer.style.visibility = "hidden";
        }
        
        revealOnScroll();
    }
});

// ==========================================================================
// 2. TIMED PACKET LOADING INITIALIZER
// ==========================================================================
window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 1200); // Snappy, premium load transition
    }
});

// ==========================================================================
// 3. CINEMATIC HERO BACKGROUND SLIDESHOW PARALLAX MOTOR
// ==========================================================================
const slides = document.querySelectorAll(".slide");
let activeSlideIndex = 0;

function rotateHeroSlides() {
    if (slides.length === 0) return;
    slides[activeSlideIndex].classList.remove("active");
    activeSlideIndex = (activeSlideIndex + 1) % slides.length;
    slides[activeSlideIndex].classList.add("active");
}

if (slides.length > 0) {
    setInterval(rotateHeroSlides, 6000);
}

// ==========================================================================
// 4. STAGGERED SCROLL-REVEAL MANAGER UTILITY
// ==========================================================================
const revealElements = document.querySelectorAll(".scroll-fade, .portal-card, .poem-index-row");

function revealOnScroll() {
    const triggerThreshold = window.innerHeight * 0.9;
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerThreshold) {
            element.classList.add("revealed");
        }
    });
}

if (revealElements.length > 0) {
    window.addEventListener("scroll", revealOnScroll);
    setTimeout(revealOnScroll, 100);
}

// ==========================================================================
// 5. HIGH-PERFORMANCE GALLERY "LOAD MORE" ENGINE
// ==========================================================================
const initialVisibleCount = 9;
const galleryCards = document.querySelectorAll("#galleryGridMatrix .gallery-card");
const loadMoreTrigger = document.getElementById("galleryLoadMoreTrigger");
const loadMoreWrapper = document.getElementById("galleryLoadBtnWrapper");

let currentDisplayedCount = initialVisibleCount;

if (galleryCards.length > 0 && loadMoreTrigger) {
    loadMoreTrigger.addEventListener("click", () => {
        let itemsToReveal = 8;
        let targetMax = Math.min(currentDisplayedCount + itemsToReveal, galleryCards.length);
        
        for (let i = currentDisplayedCount; i < targetMax; i++) {
            const card = galleryCards[i];
            card.style.display = "block";
            setTimeout(() => {
                card.style.opacity = "1";
                card.classList.remove("initial-hidden");
            }, (i - currentDisplayedCount) * 60);
        }
        
        currentDisplayedCount = targetMax;
        
        if (currentDisplayedCount >= galleryCards.length && loadMoreWrapper) {
            loadMoreWrapper.style.display = "none";
        }
    });
}

// ==========================================================================
// 6. PREMIUM DUAL-PANEL LIGHTBOX CANVAS EXPOSITION MOTOR
// ==========================================================================
const lightboxElement = document.getElementById("masterSocialLightbox");
const lightboxImageNode = document.getElementById("lightboxTargetViewImage");
const closeLightboxBtn = document.getElementById("closeLightboxWidget");
const prevBtn = document.getElementById("galleryPrevBtn");
const nextBtn = document.getElementById("galleryNextBtn");
const galleryImages = document.querySelectorAll("#galleryGridMatrix .gallery-card img");

window.currentImageTargetId = null;
let activeLightboxImageIndex = -1;

function updateLightboxViewport(index) {
    if (index < 0 || index >= galleryImages.length || !lightboxImageNode) return;
    
    activeLightboxImageIndex = index;
    const targetSrc = galleryImages[activeLightboxImageIndex].src;
    lightboxImageNode.src = targetSrc;
    
    const rawFilename = targetSrc.split("/").pop(); 
    const parsedFilename = rawFilename.replace(/\./g, ""); 
    
    const databaseTargetToken = "image-" + parsedFilename.replace(/[^a-zA-Z0-9.\-_]/g, "");
    window.currentImageTargetId = databaseTargetToken;
    
    window.dispatchEvent(new CustomEvent("lightboxOpened"));
}

galleryImages.forEach((image, index) => {
    image.parentElement.addEventListener("click", () => {
        if (!lightboxElement) return;
        updateLightboxViewport(index);
        lightboxElement.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

function navigateLightboxForward() {
    if (!lightboxElement || !lightboxElement.classList.contains("active")) return;
    let targetIndex = (activeLightboxImageIndex + 1) % galleryImages.length;
    updateLightboxViewport(targetIndex);
}

function navigateLightboxBackward() {
    if (!lightboxElement || !lightboxElement.classList.contains("active")) return;
    let targetIndex = (activeLightboxImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxViewport(targetIndex);
}

if (nextBtn) nextBtn.addEventListener("click", navigateLightboxForward);
if (prevBtn) prevBtn.addEventListener("click", navigateLightboxBackward);

function closeFullscreenLightbox() {
    if (!lightboxElement) return;
    lightboxElement.classList.remove("active");
    document.body.style.overflow = "";
    window.currentImageTargetId = null;
}

if (closeLightboxBtn) closeLightboxBtn.addEventListener("click", closeFullscreenLightbox);

if (lightboxElement) {
    lightboxElement.addEventListener("click", (e) => {
        if (e.target === lightboxElement || e.target.id === "lightboxArtPane") {
            closeFullscreenLightbox();
        }
    });
}

document.addEventListener("keydown", (e) => {
    if (!lightboxElement || !lightboxElement.classList.contains("active")) return;
    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;

    if (e.key === "ArrowRight") navigateLightboxForward();
    else if (e.key === "ArrowLeft") navigateLightboxBackward();
    else if (e.key === "Escape") closeFullscreenLightbox();
});

// ==========================================================================
// 7. SCROLL INTERACTION PROGRESS METRIC
// ==========================================================================
const scrollTrackerBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
    if (!scrollTrackerBar) return;
    const currentTop = document.documentElement.scrollTop;
    const computeHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (currentTop / computeHeight) * 100;
    scrollTrackerBar.style.width = `${scrollPercentage}%`;
});

// ==========================================================================
// 8. ANIMATED SITE ROUTER TRANSITION TIMELINES
// ==========================================================================
const visualTransitionCanvas = document.querySelector(".page-transition");
const hyperLinks = document.querySelectorAll('a[href$=".html"]');

hyperLinks.forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const targetPath = this.getAttribute("href");
        const matchingCurrentTab = targetPath === window.location.pathname.split("/").pop();
        
        if (targetPath && visualTransitionCanvas && !matchingCurrentTab) {
            e.preventDefault();
            visualTransitionCanvas.classList.add("active");
            setTimeout(() => {
                window.location.href = targetPath;
            }, 400);
        }
    });
});