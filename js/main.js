// Start Header Section
window.onload = function () {
    window.scrollTo(0, 0);
}
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
// menuBar 
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
// End Header Section

// Start Login Form
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});
formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});
// End Login Form

// Start Home section
let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
// End Home section

// Start review section
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
// End review section

// Start Brand section
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});
// End Brand section

// Start Go To Top Icon
let goToTop = document.querySelector('.go-to-top .go-to-top-icon ');
window.addEventListener('scroll',goTop );
function goTop() {
    if (window.pageYOffset >= 500) {
        goToTop.style.display = "flex";
    } else {
        goToTop.style.display = "none";
    }
};
goToTop.addEventListener('click', topGo);
function topGo() {
    window.scrollTo(0,0)
};
// End Go To Top Icon
