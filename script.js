const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

if(galleryImages){

    galleryImages.forEach(img => {

        img.addEventListener('click', () => {

            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;

        });

    });

}

if(closeBtn){

    closeBtn.addEventListener('click', () => {

        lightbox.style.display = 'none';

    });

}