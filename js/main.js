$(document).ready(function () {

  // carousel slider

  var carousel = $("#carousel").waterwheelCarousel({

    
  });
  $('#prev').bind('click', function () {
    carousel.prev();
    return false
  });

  $('#next').bind('click', function () {
    carousel.next();
    return false;
  });

  // slick slider

  $('.clients__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slider__btn slider__btn_left slider__btn_left_bottom show"><div class="arrow-left"></div></button>',
    nextArrow: '<button class="slider__btn slider__btn_right slider__btn_right_bottom show"><div class="arrow-right"></div></button>',
    // prevArrow: '<button class="slider__btn slider__btn_left slider__btn_left_bottom show"><img src="img/slider/arrowL.png" alt="arrow"></button>',
    // nextArrow: '<button class="slider__btn slider__btn_right slider__btn_right_bottom show"><img src="img/slider/arrowL2.png" alt="arrow"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  });

  // slick slider adaptive

  $('.slider__carousel_adaptive').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slider__btn slider__btn_left slider__btn_left_bottom show"><div class="arrow-left"></div></button>',
    nextArrow: '<button class="slider__btn slider__btn_right slider__btn_right_bottom show"><div class="arrow-right"></div></button>',
    // prevArrow: '<button class="slider__btn slider__btn_left slider__btn_left_bottom show"><img src="img/slider/arrowL.png" alt="arrow"></button>',
    // nextArrow: '<button class="slider__btn slider__btn_right slider__btn_right_bottom show"><img src="img/slider/arrowL2.png" alt="arrow"></button>',
    responsive: [
      {
        breakpoint: 991,
        centerPadding: '100px',
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
   
    ],
  });

  //    навигация
  // ######################################################################

  $('.header__link_nav').click(function (event) {
    event.preventDefault();
    let target = $(this).attr('href');
    let top = $(target).offset().top;
    $('html, body').animate({
      scrollTop: top
    }, 500);
  });

  //    скролл
  // ######################################################################

  //   $(window).scroll(function() {
  //     if ($(this).scrollTop() > 1600) {
  //       $('.pageup').fadeIn();
  //     } else {
  //       $('.pageup').fadeOut();
  //     }
  //   });

  //   $("a[href=#up]").click(function(){
  //     const _href = $(this).attr("href");
  //     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  //     return false;
  // });



});

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //    кнопки слайдера
  // ######################################################################

  // let arrowRight = document.querySelectorAll('.arrow-right'),
  //   arrowRightAft = window.getComputedStyle(document.querySelector('.arrow-right'), ':after'),
  //   arrowLeft = document.querySelectorAll('.arrow-left'),
  //   itemNav = document.querySelectorAll('.slider__btn'),
  //   itemNavActive = document.querySelectorAll('.slider__btn-active'),
  //   itemNavImg = document.querySelectorAll('.slider__img'),
  //   itemNavImgActive = document.querySelectorAll('.slider__img-active');


  // function activeMenuNav(a) {
  //   itemNav[a].classList.add('hide');
  //   itemNav[a].classList.remove('show');
  //   itemNavActive[a].classList.remove('hide');
  //   itemNavActive[a].classList.add('show');
  //   arrowRight.style.cssText = `background: linear-gradient(to right, #fd712c, #f21780);`;
  // }

  // function noActiveMenuNav(b) {
  //   itemNav[b].classList.remove('hide');
  //   itemNav[b].classList.add('show');
  //   itemNavActive[b].classList.remove('show');
  //   itemNavActive[b].classList.add('hide');

  // }
  // document.addEventListener('mouseover', (event) => {
  //   let target = event.target;
  //   if (target && target.classList.contains('slider__img') || target && target.classList.contains('slider__btn') || target && target.classList.contains('slider__img-active')) {
  //     for (let i = 0; i < itemNav.length; i++) {
  //       if (target == itemNav[i] || target == itemNavActive[i] || target == itemNavImg[i] || target == itemNavImgActive[i]) {
  //         activeMenuNav(i)
  //       };
  //     };
  //   };
  // });

  // document.addEventListener('mouseout', (event) => {
  //   let target = event.target;
  //   if (target && target.classList.contains('slider__btn-active')) {
  //     for (let i = 0; i < itemNavActive.length; i++) {
  //       if (target == itemNavActive[i]) {
  //         noActiveMenuNav(i)
  //       };
  //     };
  //   };
  // });

  //    видео
  // ######################################################################

  var overlay = document.getElementById('overlay');
  var vid = document.getElementById('video');

  if (overlay.addEventListener) {
    overlay.addEventListener("click", play, false)
  } else if (overlay.attachEvent) {
    overlay.attachEvent("onclick", play)
  }

  function play() {
    if (vid.paused) {
      vid.play();
      overlay.className = "o";
    } else {
      vid.pause();
      overlay.className = "";
    }
  }

  //    цена
  // ######################################################################

  // let offer = document.querySelectorAll('.offer'),
  //   offerPrice = document.querySelectorAll('.offer__price'),
  //   offerPriceBefore = document.querySelectorAll('.offer__price::before'),
  //   // offerPriceBefore = getComputedStyle('.offer__price', ':before'),
  //   btnOffer = document.querySelectorAll('.button_offer');



  // function activeStyle(a) {
  //   offerPrice[a].style.cssText = `background: linear-gradient(to right, #fd712c, #f21780);
  //   color: #fff;`;
  //   offerPriceBefore[a].style.cssText = `background: linear-gradient(to right, #fd712c, #f21780);`;
  // }

  // document.addEventListener('mouseover', (event) => {
  //   let target = event.target;
  //   if (target && target.classList.contains('offer') || target && target.classList.contains('offer__price')) {
  //     for (let i = 0; i < itemNav.length; i++) {
  //       if (target == offer[i] || target == offerPrice[i]) {
  //         activeStyle(i)
  //       };
  //     };
  //   };
  // });

      //    мобильное меню
    // ######################################################################

    let menuLink = $('.menu-mobile-btn');
    let menu = $('.menu-mobile');
    let close = $('.menu-mobile-close');
    let navLink = $('.menu-mobile-link');

    menuLink.click(function () {
        menu.toggleClass('active-menu');
    });
    close.click(function () {
        menu.toggleClass('active-menu');
    });



    $('.menu-mobile-link').click(function (event) {
        event.preventDefault();
        let target = $(this).attr('href');
        let top = $(target).offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 500);
    });

});