if(!main)
    var main = {};


main.sliderHome = function(){
    var swiper = new Swiper('.swiper-container',{
        autoplay:4000,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
};


main.closeModal = function(){
    $("#modal-video .btn-close").click(function(){
        $("#modal-video").hide();
        $("#modal-video .video").hide();
        $('body').css('overflow', 'auto');

        return false;
    });
}

main.openModal = function(){
    $(".container-general .btn-video").click(function(){
        video = $(this).attr("data-target");
        $("#modal-video").show();
        $("#modal-video #" + video).show();
        $('body').css('overflow', 'hidden');
    });
}

$(function(){
    main.openModal();
    main.closeModal();
    main.sliderHome();
});