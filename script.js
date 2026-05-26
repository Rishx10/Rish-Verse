// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", () => {

    const loader =
    document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.style.display = "none";

        }, 2800);

    }

});


// =========================
// HERO IMAGE ROTATION
// =========================

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

    if(slides.length === 0) return;

    slides[currentSlide]
    .classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide]
    .classList.add("active");

}

if(slides.length > 0){

    setInterval(changeSlide, 6000);

}


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const nav =
document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(!nav) return;

    if(window.scrollY > 50){

        nav.style.background =
        "rgba(5,5,5,0.75)";

        nav.style.backdropFilter =
        "blur(18px)";

        nav.style.border =
        "1px solid rgba(255,255,255,0.12)";

    }

    else{

        nav.style.background =
        "rgba(10,10,10,0.35)";

        nav.style.backdropFilter =
        "blur(14px)";

        nav.style.border =
        "1px solid rgba(255,255,255,0.08)";

    }

});


// =========================
// FADE IN ON SCROLL
// =========================

const revealElements =
document.querySelectorAll(
    ".glass-card, .social-card, .about-left"
);

function revealOnScroll(){

    const triggerBottom =
    window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const elementTop =
        element.getBoundingClientRect().top;

        if(elementTop < triggerBottom){

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0px)";

        }

    });

}

// Only initialize reveal positioning states if the target elements actually exist on the current page
if(revealElements.length > 0) {

    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
        "translateY(40px)";

        element.style.transition =
        "all 1s ease";

    });

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();

}


// =========================
// PARALLAX EFFECT (CORRECTED)
// =========================

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    slides.forEach(slide => {
        
        /* FIXED: We use translateY for vertical shifting but omit the explicit inline scale() declaration.
           This allows your continuous CSS `@keyframes slowZoom` scale parameters to run completely uninterrupted.
        */
        slide.style.transform = `translateY(${scrollY * 0.08}px)`;

    });

});


// =========================
// GALLERY LIGHTBOX (INTEGRATED TARGET ROUTER)
// =========================

const galleryImages = document.querySelectorAll(".masonry-gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeLightbox = document.querySelector(".close-lightbox");

// Global dynamic target container used by the review listener engine
window.currentImageTargetId = null;

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        if(!lightbox || !lightboxImage) return;

        // 1. Set image asset frame view
        lightboxImage.src = image.src;

        // 2. Extract specific image filename (e.g., "capture3.jpg")
        const filename = image.src.split("/").pop();
        window.currentImageTargetId = "image-" + filename;

        // 3. Show the interactive modal window
        lightbox.classList.add("active");

        // 4. Trigger the review script to hot-reload comments for this file
        window.dispatchEvent(new CustomEvent("lightboxOpened"));
    });
});

if(closeLightbox){
    closeLightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
        window.currentImageTargetId = null;
    });
}

if(lightbox){
    lightbox.addEventListener("click", (e) => {
        // Prevent click events inside the main content window from shutting down the session prematurely
        if(e.target === lightbox){
            lightbox.classList.remove("active");
            window.currentImageTargetId = null;
        }
    });
}

// =========================
// SCROLL PROGRESS BAR
// =========================

const progressBar =
document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    if(!progressBar) return;

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrollPercent =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    scrollPercent + "%";

});


// =========================
// PAGE TRANSITIONS
// =========================

const transition =
document.querySelector(
    ".page-transition"
);

const internalLinks =
document.querySelectorAll(
    'a[href$=".html"]'
);

internalLinks.forEach(link => {

    link.addEventListener(
        "click",
        function(e){

            const target =
            this.getAttribute("href");

            if(target &&
               transition){

                e.preventDefault();

                transition.classList.add(
                    "active"
                );

                setTimeout(() => {

                    window.location.href =
                    target;

                }, 500);

            }

        }
    );

});


// =========================
// PAGE LOAD TRANSITION
// =========================

window.addEventListener("load", () => {

    if(transition){

        transition.classList.remove(
            "active"
        );

    }

});