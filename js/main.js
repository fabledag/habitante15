if(!main)
    var main = {};


main.sliderHome = function(){
    var swiper = new Swiper('.swiper-container',{
        autoplay:4000,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
};

//main.drawCharts = function(){
//    $(".pieChart").drawPieChart([
//        { title: "Facebook",   value : 20,  color: "#76ccce" },
//        { title: "Twitter",    value:  20,  color: "#00acad" },
//        { title: "Google",     value:  60,  color: "#333332" }
//    ]);
//    $(".pieChart2").drawPieChart([
//        { title: "Facebook",   value : 20,  color: "#76ccce" },
//        { title: "Twitter",    value:  20,  color: "#00acad" },
//        { title: "Google",     value:  60,  color: "#333332" }
//    ]);
//    $(".pieChart3").drawPieChart([
//        { title: "Facebook",   value : 10,  color: "#76ccce" },
//        { title: "Twitter",    value:  70,  color: "#00acad" },
//        { title: "Google",     value:  20,  color: "#333332" }
//    ]);
//
//
//
//    $(".pieChart4").drawPieChart([
//        { title: "Facebook",   value : 20,  color: "#76ccce" },
//        { title: "Twitter",    value:  20,  color: "#00acad" },
//        { title: "Google",     value:  60,  color: "#333332" }
//    ]);
//    $(".pieChart5").drawPieChart([
//        { title: "Facebook",   value : 20,  color: "#76ccce" },
//        { title: "Twitter",    value:  20,  color: "#00acad" },
//        { title: "Google",     value:  60,  color: "#333332" }
//    ]);
//    $(".pieChart6").drawPieChart([
//        { title: "Facebook",   value : 10,  color: "#76ccce" },
//        { title: "Twitter",    value:  70,  color: "#00acad" },
//        { title: "Google",     value:  20,  color: "#333332" }
//    ]);
//};

$(function(){
    //main.drawCharts();
    main.sliderHome();
});