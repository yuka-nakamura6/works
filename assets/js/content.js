$(function(){

    $(".time a").click(function(){
    //    $("a[href^='#']:not([href='#'])").click(function(){
    //      教科書の見本はこれだけど、バージョン古いためNG 

        var target = 
        $($(this).attr("href")).offset().top;

        target -= 100

        /* htmlとbody両方に指定する*/
        $("html,body").animate({
            scrollTop : target
        },500);

        return false
    });

});

// 
$("html").hide().fadeIn(700);
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