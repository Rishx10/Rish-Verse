// ==========================================================================
// GLOBAL NAVIGATION LIFECYCLE ROUTER (FIXES BACK-BUTTON BLACKOUT LOOPS)
// ==========================================================================
window.addEventListener("pageshow", (event) => {
    // If arriving via back/forward memory cache, force state resetting
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        const transitionLayer = document.querySelector(".page-transition");
        const loaderLayer = document.querySelector(".loader");
        
        if (transitionLayer) {
            transitionLayer.classList.remove("active");
        }
        if (loaderLayer) {
            loaderLayer.style.display = "none";
        }
        
        // Re-trigger scroll positioning states to fix any stuck opacity layers
        if (typeof revealOnScroll === "function") {
            revealOnScroll();
        }
    }
});


// =========================
// LOADING SCREEN
// =========================
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 2800);
    }
});


// =========================
// HERO IMAGE ROTATION
// =========================
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove("active");
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

if (slides.length > 0) {
    setInterval(changeSlide, 6000);
}


// =========================
// NAVBAR SCROLL EFFECT
// =========================
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (!nav) return;

    if (window.scrollY > 50) {
        nav.style.background = "rgba(5,5,5,0.75)";
        nav.style.backdropFilter = "blur(18px)";
        nav.style.border = "1px solid rgba(255,255,255,0.12)";
    } else {
        nav.style.background = "rgba(10,10,10,0.35)";
        nav.style.backdropFilter = "blur(14px)";
        nav.style.border = "1px solid rgba(255,255,255,0.08)";
    }
});


// =========================
// FADE IN ON SCROLL
// =========================
const revealElements = document.querySelectorAll(".glass-card, .social-card, .about-left");

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";
        }
    });
}

if (revealElements.length > 0) {
    revealElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";
        element.style.transition = "all 1s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
}


// =========================
// PARALLAX EFFECT (CORRECTED)
// =========================
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    slides.forEach(slide => {
        /* FIXED: We use translateY for vertical shifting but omit the explicit inline scale() declaration.
           This allows your continuous CSS @keyframes slowZoom scale parameters to run completely uninterrupted.
        */
        slide.style.transform = `translateY(${scrollY * 0.08}px)`;
    });
});


// ==========================================================================
// GALLERY LIGHTBOX INTERACTIVE PANEL DISPLAY ENGINE WITH SLIDE CONTROLS
// ==========================================================================
const galleryCards = document.querySelectorAll(".masonry-gallery .gallery-card img");
const lightboxElement = document.querySelector(".lightbox");
const lightboxImageContainer = document.querySelector(".lightbox-image");
const closeLightboxWidget = document.querySelector(".close-lightbox");
const prevBtn = document.getElementById("galleryPrevBtn");
const nextBtn = document.getElementById("galleryNextBtn");

window.currentImageTargetId = null;
let activeImageIndex = -1;

// Core renderer function to update the viewport image frame and reload comments
function updateLightboxView(index) {
    if (index < 0 || index >= galleryCards.length) return;
    
    activeImageIndex = index;
    const activeImgSrc = galleryCards[activeImageIndex].src;
    
    // 1. Swap image source element
    if (lightboxImageContainer) {
        lightboxImageContainer.src = activeImgSrc;
    }
    
    // 2. Extract precise file context target ID and STRIP OUT Forbidden Characters like Dots!
    const filename = activeImgSrc.split("/").pop(); // Gets "i1.jpg"
    
    // CRITICAL HOTFIX: Replaces the dot (".") with nothing so Firebase accepts the key safely
    const cleanFilename = filename.replace(/\./g, ""); // Converts "i1.jpg" into "i1jpg"
    window.currentImageTargetId = "image-" + cleanFilename.replace(/[^a-zA-Z0-9.\-_]/g, "");
    
    // 3. Fire custom event routine so reviews.js syncs data instantly
    window.dispatchEvent(new CustomEvent("lightboxOpened"));
}

// Attach listener index slots to initial grid items
galleryCards.forEach((image, index) => {
    image.addEventListener("click", () => {
        if (!lightboxElement || !lightboxImageContainer) return;
        
        // Render view target framework
        updateLightboxView(index);
        lightboxElement.classList.add("active");
    });
});

// Structural navigation trigger callbacks
function navigateLightboxNext() {
    if (!lightboxElement || !lightboxElement.classList.contains("active")) return;
    let nextIndex = activeImageIndex + 1;
    if (nextIndex >= galleryCards.length) nextIndex = 0; 
    updateLightboxView(nextIndex);
}

function navigateLightboxPrev() {
    if (!lightboxElement || !lightboxElement.classList.contains("active")) return;
    let prevIndex = activeImageIndex - 1;
    if (prevIndex < 0) prevIndex = galleryCards.length - 1; 
    updateLightboxView(prevIndex);
}

// On-screen arrows click triggers
if (nextBtn) nextBtn.addEventListener("click", navigateLightboxNext);
if (prevBtn) prevBtn.addEventListener("click", navigateLightboxPrev);

// KEYBOARD KEY ACTIONS LISTENER OVERRIDES (Left, Right, and Escape Keys)
document.addEventListener("keydown", (e) => {
    if (!lightboxElement || !lightboxElement.classList.contains("active")) return;
    
    // Ignore key presses if the user is typing a comment inside the form fields
    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;

    if (e.key === "ArrowRight") {
        navigateLightboxNext();
    } else if (e.key === "ArrowLeft") {
        navigateLightboxPrev();
    } else if (e.key === "Escape") {
        lightboxElement.classList.remove("active");
        window.currentImageTargetId = null;
    }
});

// Close UI mechanisms
if (closeLightboxWidget) {
    closeLightboxWidget.addEventListener("click", () => {
        if (lightboxElement) lightboxElement.classList.remove("active");
        window.currentImageTargetId = null;
    });
}

if (lightboxElement) {
    lightboxElement.addEventListener("click", (e) => {
        if (e.target === lightboxElement || e.target.classList.contains("lightbox-art-pane")) {
            lightboxElement.classList.remove("active");
            window.currentImageTargetId = null;
        }
    });
}

// =========================
// SCROLL PROGRESS BAR
// =========================
const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
    if (!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = scrollPercent + "%";
});


// =========================
// PAGE TRANSITIONS
// =========================
const transition = document.querySelector(".page-transition");
const internalLinks = document.querySelectorAll('a[href$=".html"]');

internalLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        const target = this.getAttribute("href");

        // Ensure we don't block layout actions if the user targets the current active tab path
        if (target && transition && target !== window.location.pathname.split("/").pop()) {
            e.preventDefault();
            transition.classList.add("active");

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        }
    });
});


// =========================
// PAGE LOAD TRANSITION
// =========================
window.addEventListener("load", () => {
    const transition = document.querySelector(".page-transition");
    if (transition) {
        transition.classList.remove("active");
    }
});