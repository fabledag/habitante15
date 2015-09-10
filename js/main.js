if(!main)
    var main = {};


main.sliderHome = function(){
    var swiper = new Swiper('.swiper-container',{
        loop:true,
        autoplay:4000,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
};


$(function(){
   main.sliderHome();
});