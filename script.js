// script.js

document.addEventListener('DOMContentLoaded', () => {

  // Lightbox
  const galleryImages = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  if (galleryImages.length && lightbox && lightboxImg) {
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Project image';
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox || e.target === lightboxImg) {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // Optional: subtle mouse tilt on profile picture
  const profileImg = document.querySelector('.hero-image img');
  if (profileImg) {
    document.addEventListener('mousemove', e => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const rotateY = (clientX - centerX) / 45;
      const rotateX = (centerY - clientY) / 45;

      profileImg.style.transform = `
        perspective(1400px)
        rotateY(${rotateY}deg)
        rotateX(${rotateX}deg)
        scale(1.04)
      `;
    });

    document.addEventListener('mouseleave', () => {
      profileImg.style.transform = 'perspective(1400px) rotateY(8deg) rotateX(6deg) scale(1.03)';
    });
  }

});