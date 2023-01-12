
$(function () {
    $(".slider").slick({
        dots: true,
        arrows: false,
    });
  });
  
  


  
  // 
  $("html").hide().fadeIn(1500);
  // 
  
  
  
  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.fadein').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });