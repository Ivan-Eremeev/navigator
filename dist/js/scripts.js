$(document).ready(function () {
  // Swiper
  const welcomescreenSwiper = new Swiper('.welcomescreen__swiper-container', {
    spaceBetween: 30,
    fadeEffect: { crossFade: !0 },
    effect: "fade",
    slidesPerView: 1,
    autoplay: !0,
    speed: 2500,
    preloadImages: true,
    loop: true,
    centeredSlides: true,
    pagination: { el: ".welcomescreen__pagination", clickable: !0 }
  });

  const portfolioSwiper = new Swiper('.portfolio__swiper-container', {
    spaceBetween: 10,
    slidesPerView: 1,
    preloadImages: true,
    loop: true,
    navigation: {
      nextEl: '.portfolio__button-prev',
      prevEl: '.portfolio__button-next',
    },
    breakpoints: {
      769: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 2,
      }
    }
  });

  // Tooltipster
  $('.tooltip').tooltipster({
    theme: 'custom-theme',
    delay: 100,
    contentCloning: true
  });
});