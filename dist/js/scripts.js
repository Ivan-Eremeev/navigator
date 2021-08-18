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
  // Добавить класс списку .js-hide-list-items
  // и data-valueItem="" - количество элементов которыеы нужно показывать
  // Добавить пункт в конец списка с классом .js-hide-list-all (будет открывать список)
  function hideListItems() {
    $('.js-hide-list-items').each(function () {
      var $this = $(this),
          items = $this.find('li'),
          btnAll = $this.find('.js-hide-list-all'),
          valueItem = $this.data('value'),
          itemTarget = items.filter(function () {
            return $(this).index() > valueItem
          });
      if ((items.length + 1) > valueItem) { // если кол-во элементов превышает указанное в data-valueItem="", то скрываем остальные
        itemTarget.hide();
        btnAll.show();
        btnAll.on('click', function () { // клик по кнопке "показать еще" (появляются все скрытые пункты списка)
          itemTarget.show();
          btnAll.hide();
        })
      }
    })
  }
  hideListItems();

  // Выпадайки при клике по кнопке
  // Задать блокам выпадайкам .js-drop и айдишник совпадающий с data-drop="" в кнопке для этого блока
  // Задать кнопкам .js-drop-btn и data-drop="" с айдишником блока выпадайки
  function DropBlock(drop, button) {
    button.on('click', function () { // клик по кнопке
      var $this = $(this),
          data = $this.data('drop');
      if (!$this.hasClass('active')) { // если имеет класс .active скрываем все выпадайки и открываем только относящуюся к кнопке
        drop.removeClass('open');
        button.removeClass('active');
        $this.addClass('active');
        $('#' + data).addClass('open');
      } else { // если не имеет класс .active скрываем все выпадайки
        button.removeClass('active');
        drop.removeClass('open');
      }
    })
    $(document).mouseup(function (e) { // клик по любому месту страницы вне блока (скрываем все выпадайки)
      if (!drop.is(e.target)
        && drop.has(e.target).length === 0 
        && !button.is(e.target) 
        && button.has(e.target).length === 0) {
        drop.removeClass('open');
        button.removeClass('active');
      }
    });
  }
  DropBlock($('.js-drop'), $('.js-drop-btn'));
  DropBlock($('.js-filters-mobmenu'), $('.js-filters__btn-mob'));
  
  // JQuery Slider // Ползунок
  function JQuerySlider() {
    if ($('.jquery-slider').length) {
      $('.jquery-slider').each(function () {
        var $this = $(this),
            JQuerySlider = $this.find('.jquery-slider__slider'),
            input = $this.find('input'),
            valMin = $this.data('min'),
            valMax = $this.data('max'),
            valNow = $this.data('now');
        JQuerySlider.slider({
          range: "min",
          min: valMin,
          max: valMax,
          value: valNow,
          create: function () {
            input.val($(this).slider("value"));
          },
          slide: function(event, ui) {
            input.val(ui.value);
          },
        });
        input.on('input keyup', (function () {
          var valInput = $(this).val();
          JQuerySlider.slider("value", valInput);
        }));
      })
    }
  }
  JQuerySlider();

  // JQueryScrollbar
  if ($('.scrollbar-inner').length) {
    $('.scrollbar-inner').each(function () {
      $(this).scrollbar();
    })
  }

  // Отслеживание пункта "выбрать все" в фильтрах
  function selectAll($this) {
    var checkboxes = $this.parent().siblings('.filters__drop-row').find('input');
    $this.on('change', function () {
      if ($this.prop('checked')) {
        checkboxes.prop('checked', true);
      }else {
        checkboxes.prop('checked', false);
      }
    })
  }
  selectAll($('#color_all'));
  selectAll($('#material_all'));

  // Работа селекта в фильтрах
  function select() {
    var block = $('.filters__method'),
        trigger = block.find('.filters__picker'),
        drop = block.find('.filters__drop--picker'),
        radio = drop.find('input');
    radio.on('change', function () {
      var $this = $(this);
      trigger.removeClass('active');
      drop.removeClass('open');
      radio.parent().show();
      $this.parent().hide();
      trigger.text($this.next().text());
    })
  }
  select();

  const sliderProjects = new Swiper(".projects__slider", {
    slidesPerView: 4,
    spaceBetween: 27,
    loop: false,
    navigation: { nextEl: ".projects__next", prevEl: ".projects__prev" },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      414: { slidesPerView: 2, spaceBetween: 15 },
      767: { slidesPerView: 3 },
      1023: { slidesPerView: 4, spaceBetween: 27 }
    },
  });

});