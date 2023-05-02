
const iconMenu = document.querySelector('.header__menu-icon');
const menuBody = document.querySelector('.header__menu-body');
const closeMenu = document.querySelector('.header__menu-close');
const menuIcon = document.querySelector('.header__menu-link-icon');
const header = document.querySelector('.header');


//Menu Burger
iconMenu.addEventListener('click', menuBurder);
closeMenu.addEventListener('click', menuBurder);

function menuBurder() {
   if (iconMenu) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      closeMenu.classList.toggle('_active');
      iconMenu.classList.toggle('hide');
   }

}
// додаємо background до header при скродлі
window.addEventListener('scroll', () => {

if (window.scrollY > 50) {
header.classList.add('header__scroll');
} else {

header.classList.remove('header__scroll');
}
});

// slider

const bannerSwiper = new Swiper('.banner__swiper', {
   slidesPerView: 1,
   loop: true,
   effect: 'cards',

   navigation: {
       nextEl: '.banner__next',
       prevEl: '.banner__prev'
   }
});

const bannerSwiperFalse = new Swiper('.banner__swiper-false', {
   slidesPerView: 1,
   loop: true,
   effect: 'cards',

   navigation: {
       nextEl: '.banner__next',
       prevEl: '.banner__prev'
   }
});

const swiperProduction = new Swiper('.productions__swiper', {
   breakpoints: {
       1920: {
           slidesPerView: 4,
       },

       992: {
           slidesPerView: 1.5,
       },
       900: {
           slidesPerView: 1.7,
       },
       576: {
           slidesPerView: 1.15,
       },
       465: {
           slidesPerView: 1,
       }
   }
});