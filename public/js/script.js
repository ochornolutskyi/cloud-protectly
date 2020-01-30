$(document).ready(function () {
  //mediacss
  $(window).resize(function () {
    if (window.matchMedia('screen and (max-width: 480px)').matches) {
      $('head').append($('<link rel="stylesheet" href="css/style-small.css" />'));
    } else if (window.matchMedia('screen and (min-width: 481px) and (max-width: 767px)').matches) {
      $('head').append($('<link rel="stylesheet" href="css/style-smedium.css" />'));
    } else if (window.matchMedia('screen and (min-width: 768px) and (max-width: 1023px)').matches) {
      $('head').append($('<link rel="stylesheet" href="css/style-medium.css" />'));
    }
  }).resize();
  //slick-slider configurations
  $('.slick').slick({
    arrows: true,
    dots: true,
    draggable: false,
    initialSlide: 1,
    autoplay: true,
    fade: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        draggable: true
      }
    }]
  });
  //scroll-animation
  $("#nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({
        scrollTop: top
      },
      1500
    );
  });
  $("#footer-logo").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({
        scrollTop: top
      },
      1500
    );
  });
  //jquery button tasks
  // $('#watch-button').click(function(){
  //   $('#watch').animate( { backgroundColor: "#000" ,}, 3000);
  // });
  $('.header-head__logo').click(function () {
    if ((window.matchMedia('screen and (max-width:767px)').matches)) {
      $(this).toggleClass('logo-active');
      $('.header-head__navigation').slideToggle(500).css('display', 'flex');
    }
  });
  $('#try').click(function () {
    $('.header-buttons__try').toggleClass('tryButton-active');
    if (window.matchMedia('(min-width: 768px)').matches) {
      $('.form').fadeToggle(500);
      $('#login').removeAttr('placeholder');
      $('#password').removeAttr('placeholder');
    } else if (window.matchMedia('screen and (max-width:767px)').matches) {
      $('.form').slideToggle(500, 'linear');
    }
  });
  $('#watch').click(function () {
    $('.video').fadeIn(500);
  });
  $('#video-close').click(function () {
    $('.video').fadeOut(500);
    $('.video-file').trigger('pause');
  });
  //jquery hover
  $('.header-head__logo').on('mouseenter', function () {
    $(this).addClass('header-head__logoHover');
  }).on('mouseout', function () {
    $(this).removeClass('header-head__logoHover');
  });
  $('.navigation-link').on('mouseenter', function () {
    $(this).addClass('navigation-linkHover');
  }).on('mouseout', function () {
    $(this).removeClass('navigation-linkHover');
  });
  $('.header-buttons__try').on('mouseenter', function () {
    $(this).addClass('header-buttons__tryHover');
  }).on('mouseout', function () {
    $(this).removeClass('header-buttons__tryHover');
  });
  $('.footer-logo').on('mouseenter', function () {
    $(this).addClass('footer-logoHover');
  }).on('mouseout', function () {
    $(this).removeClass('footer-logoHover');
  });
  $('.footer-block__link').on('mouseenter', function () {
    $(this).addClass('footer-block__linkHover');
  }).on('mouseout', function () {
    $(this).removeClass('footer-block__linkHover');
  });

});