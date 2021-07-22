$(document).ready(function () {

  // Swiper welcomescreen
  if ($('.welcomescreen__swiper-container').length) {
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
  if ($('.portfolio__swiper-container').length) {
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
    if ($('.steps__swiper').length) {
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
  if ($('.projectscreen__swiper-container').length) {
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

  // Swiper productscreen
  if ($('.productscreen__swiper-container').length) {
    const productscreenSwiperThumbs = new Swiper('.productscreen__thumbs-swiper-container', {
      spaceBetween: 5,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    const productscreenSwiper = new Swiper('.productscreen__swiper-container', {
      slidesPerView: 1,
      thumbs: {
        swiper: productscreenSwiperThumbs
      },
    });
  };

  // Swiper viewed-products
  if ($('.viewed-products__swiper-container').length) {
    const viewedProductsSwiper = new Swiper('.viewed-products__swiper-container', {
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        prevEl: '.viewed-products__button-prev',
        nextEl: '.viewed-products__button-next',
      },
      breakpoints: {
        770: {
          slidesPerView: 4,
        },
        501: {
          slidesPerView: 3,
        },
        371: {
          slidesPerView: 2,
        }
      }
    });
  };

  // Tooltipster
  if ($('.tooltip').length) {
    $('.tooltip').tooltipster({
      theme: 'custom-theme',
      delay: 100,
      contentCloning: true
    });
  }

  // Fancybox portfolio
  if ($('.portfolio__slide a').length) {
    Fancybox.bind(".portfolio__slide a");
  }

  // Fancybox projectscreen
  if ($('.projectscreen__slide a').length) {
    Fancybox.bind(".projectscreen__slide a");
  }

  // Fancybox productscreen
  if ($('.productscreen__slide a').length) {
    Fancybox.bind(".productscreen__slide a");
  }

  // JQueryMatchHeight
  if ($('.stepscreen__item').length) {
    $('.stepscreen__item').matchHeight({
      byRow: false,
    });
  }

  // Калькулятор цены на странице товара
  $('#quantity').on('input keyup', (function () {
    calcPrice();
  }));
  function calcPrice() {
    var price = parseInt($('#priceOne').text()),
      quantity = parseInt($('#quantity').val()),
      result = $('.resultPrice');
    if (isNaN(quantity)) {
      quantity = 1;
    }
    var resultPrice = numericFormat(price * quantity);
    result.text(resultPrice + ' руб.');
  }
  calcPrice();

  // Делитель цены
  function numericFormat(value, decimal, thousand) {
    if (!decimal) decimal = ' ';
    if (!thousand) thousand = '.';
    var parts = value.toString().split('.');
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, decimal) + (parts[1] ? thousand + parts[1] : '');
  }

  // Скрыть определенное кол-во пунктов списка и показывать при нажатии на кнопку "показать больше"
  // data-valueItem="" - количество элементов которыеы нужно показывать
  function hideListItems() {
    $('.hide-list-items').each(function () {
      var $this = $(this),
          items = $this.find('li'),
          btnAll = $this.find('.hide-list-all'),
          valueItem = $this.data('value'),
          itemTarget = items.filter(function () {
            return $(this).index() > valueItem
          });
      if ((items.length + 1) > valueItem) {
        itemTarget.hide();
        btnAll.show();
        btnAll.on('click', function () {
          itemTarget.show();
          btnAll.hide();
        })
      }
    })
  }
  hideListItems();

});