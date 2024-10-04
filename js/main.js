//loader
$(function() {
  $('.loader-container').fadeOut();
})

// sidebar menu toggle
$(document).on('click', '#sidebar_toggler', function() {
  $('.sidebar-wrapper').addClass('sidebar-show');
  $('body').addClass('overBody__hidden');
   $('.mob-overlay').addClass('active');
});

$(document).on('click', '#burgerBtn', function() {
  $('.sidebar-wrapper').removeClass('sidebar-show');
  $('body').removeClass('overBody__hidden');
  $('.mob-overlay').removeClass('active');
});

$(document).on('click', '.mob-overlay', function() {
  $('.sidebar-wrapper').removeClass('sidebar-show');
  $('body').removeClass('overBody__hidden');
  $('.mob-overlay').removeClass('active');
});

$(document).on('click', '.sidebar-wrapper .nav-link .dropdown-item', function() {
  $('.sidebar-wrapper').removeClass('sidebar-show');
  $('body').removeClass('overBody__hidden');
  $('.mob-overlay').removeClass('active');
});

// scroll top button
$(function () {

  var scrollButton = $('.go-top');

  $(window).scroll(function () {

    if($(window).scrollTop() >= 500) {
      scrollButton.show();
    }else {
      scrollButton.hide();
    }
  });

  scrollButton.click(function () {
    $('html, body').animate({scrollTop: 0});
  })
});

// testimonials slider
$(function(){
  
  var is_rtl = $("html[lang='ar']").length > 0;
    
  $('.images_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: is_rtl,
    dots: false,
    arrows: true,
    loop: true,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 2000,
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',

  });
});