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

function animateZoomInOnScroll() {
    const zoomEls = document.querySelectorAll('.zoom-on-scroll, .optica-top-image');
    zoomEls.forEach(el => {
        if (isInViewport(el)) {
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
            el.style.transition = 'all 0.8s ease-out';
        }
    });
}
window.addEventListener('scroll', animateZoomInOnScroll);
window.addEventListener('load', () => {
    const targets = document.querySelectorAll('.main-text p, .featured-optics h2, .optical-info h1, .optical-info h2, .optical-info p');
    targets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    });

    const zoomEls = document.querySelectorAll('.zoom-on-scroll, .optica-top-image');
    zoomEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.8)';
    });

    animateZoomInOnScroll();
});

const slider = document.querySelector('.slider-container');
let slideIndex = 0;
function autoSlide() {
    if (!slider) return;
    const totalSlides = slider.children.length;
    slideIndex = (slideIndex + 1) % totalSlides;
    slider.style.transition = 'transform 1s ease';
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    setTimeout(autoSlide, 3000);
}
window.addEventListener('load', autoSlide);

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("collectionDropdown");
    const dropbtn = dropdown.querySelector(".optica-dropbtn");
    dropbtn.addEventListener("click", function (e) {
        e.preventDefault();
        dropdown.classList.toggle("open");
    });
    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
        }
    });
});
