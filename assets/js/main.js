var mainNav = document.querySelector('.navbar');
var mobileNavIcon = document.querySelector('.menu-icon');

mobileNavIcon.addEventListener('click', function () {
    mainNav.classList.toggle('show');
});

/* Header Scroll */
var header = document.querySelector('.header');
if (header) {
    const isScrolled = () => {
        if (window.scrollY > 20) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
    document.addEventListener('scroll', isScrolled);
    document.addEventListener('DOMContentLoaded', isScrolled);
}

/* Initial GLightbox */
const videoPlayerGlightbox = GLightbox({
    selector: '.video-glightbox'
});

const venueGlightbox = GLightbox({
    selector: '.venue-glightbox'
});

const galleryGlightbox = GLightbox({
    selector: '.gallery-glightbox'
});

/* Shedule Link Tab */
var sheduleNavLink = document.querySelectorAll('.shedule-nav-link');
var sheduleContent = document.querySelectorAll('.shedule-content');

if (sheduleNavLink) {
    sheduleNavLink.forEach(function (navLink, index) {
        navLink.addEventListener('click', function () {
            sheduleNavLink.forEach(function (link) {
                link.classList.remove('active');
            });

            this.classList.add('active');

            sheduleContent.forEach(function (content) {
                content.classList.remove('active');
            });
            
            sheduleContent[index].classList.add('active');
        });
    });
}

/* Swiper for Sponsors */

new Swiper('.sponsors-swiper', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

/* Initial AOS */
window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});

/* Scroll to  Top Button */

const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
    const togglescrollTop = function () {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }));
}

/* Page Loader */

let pageLoader = document.getElementById("page-loader");
if (pageLoader) {
    window.addEventListener('load', () => {
        setTimeout(function() {
            pageLoader.style.opacity = '0';
            setTimeout(function() {
                pageLoader.remove();
            }, 1000);
        }, 500);
    });
}