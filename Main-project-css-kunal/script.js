// === 1. Scroll-triggered slide/fade-in (textFadeIn & slideIn) ===
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.main-text p, .featured-optics h2, .optical-info h1, .optical-info h2, .optical-info p');
    elements.forEach(el => {
        if (isInViewport(el)) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 0.8s ease-out';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.main-text p, .featured-optics h2, .optical-info h1, .optical-info h2, .optical-info p');
    targets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    });
});

// === 2. Continuous sliding promo text (slideRight) ===
const promoText = document.querySelector('.optica-promo-text');
if (promoText) {
    let position = -100;
    function movePromoText() {
        position += 0.2; // Adjust speed here
        promoText.style.transform = `translateX(${position}%)`;
        if (position >= 100) position = -100;
        requestAnimationFrame(movePromoText);
    }
    movePromoText();
}

// === 3. Image/Slider Carousel Movement (slide-animation) ===
const slider = document.querySelector('.slider-container'); // Replace with your class
let slideIndex = 0;
function autoSlide() {
    if (!slider) return;

    const totalSlides = slider.children.length;
    slideIndex = (slideIndex + 1) % totalSlides;
    slider.style.transition = 'transform 1s ease';
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    setTimeout(autoSlide, 4000); // 4 seconds per slide
}
window.addEventListener('load', autoSlide);

// === 4. ZoomIn animation (on scroll) ===
function animateZoomInOnScroll() {
    const zoomEls = document.querySelectorAll('.zoom-on-scroll');
    zoomEls.forEach(el => {
        if (isInViewport(el)) {
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
            el.style.transition = 'all 0.8s ease-out';
        }
    });
}
window.addEventListener('scroll', animateZoomInOnScroll);
window.addEventListener('load', animateZoomInOnScroll);

document.addEventListener('DOMContentLoaded', () => {
    const zoomEls = document.querySelectorAll('.zoom-on-scroll');
    zoomEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.8)';
    });
});

// Dropdown click functionality
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("collectionDropdown");
    const dropbtn = dropdown.querySelector(".optica-dropbtn");

    dropbtn.addEventListener("click", function (e) {
        e.preventDefault();
        dropdown.classList.toggle("open");
    });

    // Optional: close dropdown if clicked outside
    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
        }
    });
});

