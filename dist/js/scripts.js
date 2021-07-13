$(document).ready(function () {

  // Swiper welcomescreen
  if ($('.welcomescreen__swiper-container')) {
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
  }

  // Swiper portfolio
  if ($('.portfolio__swiper-container')) {
    const portfolioSwiper = new Swiper('.portfolio__swiper-container', {
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        prevEl: '.portfolio__button-prev',
        nextEl: '.portfolio__button-next',
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
  };

  // Swiper steps
  function swiperSteps() {
    if ($('.steps__swiper')) {
      var block = $('.steps__swiper');
      block.each(function () {
        var $this = $(this),
          slider = $this.find('.swiper-container')[0],
          btnPrev = $this.find('.swiper-button-prev')[0],
          btnNext = $this.find('.swiper-button-next')[0];
        const stepsSwiper = new Swiper(slider, {
          slidesPerView: 1,
          navigation: {
            prevEl: btnPrev,
            nextEl: btnNext,
          },
        });
      });
    }
  }
  swiperSteps();

  // Swiper projectscreen
  if ($('.projectscreen__swiper-container')) {
    const projectscreenSwiper = new Swiper('.projectscreen__swiper-container', {
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        prevEl: '.projectscreen__button-prev',
        nextEl: '.projectscreen__button-next',
      },
      breakpoints: {
        769: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 2,
        }
      }
    });
  };

  // Tooltipster
  $('.tooltip').tooltipster({
    theme: 'custom-theme',
    delay: 100,
    contentCloning: true
  });

  // Fancybox portfolio
  Fancybox.bind(".portfolio__slide a");

  // Fancybox projectscreen
  Fancybox.bind(".projectscreen__slide a");

  // JQueryMatchHeight
  $('.stepscreen__item').matchHeight({
    byRow: false,
  });

});