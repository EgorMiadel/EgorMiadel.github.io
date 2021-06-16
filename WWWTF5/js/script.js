//---------switch language----------//
$(document).ready(function(){
    $('.sub_language').click(function(){
        $('.sub_header_top_language').toggleClass('sub_active');
    });
});
//----------switch language----------//
//----------menu burger----------//
$(document).ready(function(){
    $('.header_burger').click(function(){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
//----------menu burger----------//
//---------swiper----------//
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-prev_2",
      prevEl: ".swiper-button-next_1",
    },
  });
//---------swiper----------//
