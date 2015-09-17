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
        return false;
    });
}

main.openModal = function(){
    $(".container-general .btn-video").click(function(){
        video = $(this).attr("data-target");
        console.log(video);
        $("#modal-video").show();
        $("#modal-video #" + video).show();
    });
}

$(function(){
    main.openModal();
    main.closeModal();
    main.sliderHome();
});