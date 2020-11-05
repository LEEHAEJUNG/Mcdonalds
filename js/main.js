/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */





$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();

    $(".container").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // =========================
    // on event section      ===
    //==========================



//    $(".slide").slick({
//        dots: false, //네이베이션 사용여부
//        arrows: true, //화살표 사용여부
//        prevArrow: $('.prev'), //이전 화살표
//        nextArrow: $('.next'), //다음 화살표
//        autoplay:true, //자동넘김
//        autoplaySpeed: 2000, //자동넘김 속도
//        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
//        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
//        speed: 900, // 슬라이드 속도
//        infinite: true, // 무한슬라이
//        asNavFor: '', //다른 슬라이드 연동 여부
//        centerMode: false, //센터모드
//        centerPadding: '0%', //센터 모드 시 여백
//        slidesToShow: 1, //보여질 슬라이드 갯수
//        slidesToScroll: 1, //넘겨질 슬라이드 갯수
//        swipe: true, //스와이프
//        focusOnSelect: true, //슬라이드 선택시 넘어
//        draggable:true,
//        vertical: false, //세로 슬라이드
//        verticalSwiping: false, //세로 스와이프
//        initialSlide:0,//슬라이드 시작순서
//        variableWidth: true,
//        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
//
//    });






    $("#intro").on("mousewheel", function (event, delta) {
        if (delta > 0) {

        } else if (delta < 0) {
            $('#intro').addClass('on');
            $('#container').addClass('on');
            // $('#intro,#container').addClass('on');
        }
    });


    $("#container .main").on("mousewheel", function (event, delta) {
        if (delta > 0) {

            if ( $('#key').hasClass('in')) {
                $('#intro').removeClass('on');
                // $('#intro,#container').removeClass('on');
            }

        } else if (delta < 0) {

        }
    });







//==============================================================
});


$(function () {

    // scroll event
    $('.container').scroll(function () {
        var scrollTop = $('.container').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값


        // =========================
        // scroll event section  ===
        //==========================


         if(scrollTop >= 1){  //스크롤 값
            $('#section01').addClass('on');

        }else{
            $('#section01').removeClass('on');
        }
        if(scrollTop >= 700){  //스크롤 값
            $('#section02 .center .top').addClass('on');
            $('#section02 .center .top2').addClass('on');
        }
        else{
            $('#section02 .center .top').removeClass('on');
            $('#section02 .center .top2').removeClass('on');
        }
        if(scrollTop >= 1200){  //스크롤 값
            $('#section02 .bottom .bottom').addClass('on');
        }
        else{
            $('#section02 .bottom .bottom').removeClass('on');
        }
        if(scrollTop >= 2490){  //스크롤 값
            $('#section03 .center03 .top03').addClass('on');
            $('#section03 .center03 .top03_1').addClass('on');
        }
        else{
            $('#section03 .center03 .top03').removeClass('on');
            $('#section03 .center03 .top03_1').removeClass('on');
        }
        if(scrollTop >= 3200){  //스크롤 값
            $('#section03 .bottom03 .bottom03').addClass('on');
        }
        else{
            $('#section03 .bottom03 .bottom03').removeClass('on');
        }
        if(scrollTop >= 4000){  //스크롤 값
            $('#section04 .center04 .top04').addClass('on');
            $('#section04 .center04 .top04_1').addClass('on');
            $('#section04 .center04 .top04_2').addClass('on');
        }
        else{
            $('#section04 .center04 .top04').removeClass('on');
            $('#section04 .center04 .top04_1').removeClass('on');
            $('#section04 .center04 .top04_2').removeClass('on');
        }
        if(scrollTop >= 4700){  //스크롤 값
            $('#section04 .bottom04').addClass('on');
        }
        else{
            $('#section04 .bottom04').removeClass('on');
        }
        if(scrollTop >= 5300){  //스크롤 값
            $('#section05 .center05 .top05').addClass('on');
            $('#section05 .center05 .top05_1').addClass('on');
            $('#section05 .center05 .top05_1_1').addClass('on');
        }
        else{
            $('#section05 .center05 .top05').removeClass('on');
            $('#section05 .center05 .top05_1').removeClass('on');
            $('#section05 .center05 .top05_1_1').removeClass('on');
        }
        if(scrollTop >= 6300){  //스크롤 값
            $('#section05 .center05 .top05_2').addClass('on');
            $('#section05 .center05 .top05_2_1').addClass('on');
        }
        else{
            $('#section05 .center05 .top05_2').removeClass('on');
            $('#section05 .center05 .top05_2_1').removeClass('on');
        }
        if(scrollTop >= 7300){  //스크롤 값
            $('#section05 .center05 .top05_3').addClass('on');
            $('#section05 .center05 .top05_3_1').addClass('on');
        }
        else{
            $('#section05 .center05 .top05_3').removeClass('on');
            $('#section05 .center05 .top05_3_1').removeClass('on');
        }
        if(scrollTop >= 8700){  //스크롤 값
            $('#section06 .center06 .top06').addClass('on');
            $('#section06 .center06 .top06_1').addClass('on');
        }
        else{
            $('#section06 .center06 .top06').removeClass('on');
            $('#section06 .center06 .top06_1').removeClass('on');
        }
        if(scrollTop >= 9300){  //스크롤 값
            $('#section06 .center06 .top06_2').addClass('on');
        }
        else{
            $('#section06 .center06 .top06_2').removeClass('on');
        }
        if(scrollTop >= 9800){  //스크롤 값
            $('#section06 .center06 .top06_3').addClass('on');
        }
        else{
            $('#section06 .center06 .top06_3').removeClass('on');
        }
        if(scrollTop >= 10500){  //스크롤 값
            $('#section06 .center06 .top06_4').addClass('on');
        }
        else{
            $('#section06 .center06 .top06_4').removeClass('on');
        }
        
        if(scrollTop >= 11800){  //스크롤 값
            $('#section07 .center07 .top07').addClass('on');
            $('#section07 .center07 .top07_1').addClass('on');
            $('#section07 .center07 .mp4').addClass('on');
        }
        else{
            $('#section07 .center07 .top07').removeClass('on');
            $('#section07 .center07 .top07_1').removeClass('on');
            $('#section07 .center07 .mp4').removeClass('on');
        }

        if(scrollTop >= 12000){  //스크롤 값
            $('#section07 .center07 .top07_2').addClass('on');
        }
        else{
            $('#section07 .center07 .top07_2').removeClass('on');
        }

        if(scrollTop >= 13200){  //스크롤 값
            $('#section07 .center07 .top07_3').addClass('on');
        }
        else{
            $('#section07 .center07 .top07_3').removeClass('on');
        }
        if(scrollTop >= 14700){  //스크롤 값
            $('#section08 .center08 .top08').addClass('on');
            $('#section08 .center08 .top08_1').addClass('on');
            $('#section08 .center08 .mp4_1').addClass('on');
        }
        else{
            $('#section08 .center08 .top08').removeClass('on');
             $('#section08 .center08 .top08_1').removeClass('on');
            $('#section08 .center08 .mp4_1').removeClass('on');
        }
        if(scrollTop >= 16300){  //스크롤 값
            $('#section08 .center08 .top08_2').addClass('on');
        }
        else{
            $('#section08 .center08 .top08_2').removeClass('on');
        }
        if(scrollTop >= 17000){  //스크롤 값
            $('#section09 .center09 .top09').addClass('on');
            $('#section09 .center09 .top09_1').addClass('on');
        }
        else{
            $('#section09 .center09 .top09').removeClass('on');
            $('#section09 .center09 .top09_1').removeClass('on');
        }
        if(scrollTop >= 17700){  //스크롤 값
            $('#section09 .center09 .top09_2').addClass('on');
        }
        else{
            $('#section09 .center09 .top09_2').removeClass('on');
        }
        if(scrollTop >= 19000){  //스크롤 값
            $('#section10 .center10 .top10').addClass('on');
            $('#section10 .center10 .top10_1').addClass('on');
        }
        else{
            $('#section10 .center10 .top10').removeClass('on');
            $('#section10 .center10 .top10_1').removeClass('on');
        }
        if(scrollTop >= 19500){  //스크롤 값
            $('#section10 .center10 .top10_2').addClass('on');
        }
        else{
            $('#section10 .center10 .top10_2').removeClass('on');
        }
        if(scrollTop >= 21100){  //스크롤 값
            $('#section10 .bottom10 .bottom10_1').addClass('on');
            $('#section10 .bottom10 .mp4_2').addClass('on');
        }
        else{
            $('#section10 .bottom10 .bottom10_1').removeClass('on');
            $('#section10 .bottom10 .mp4_2').removeClass('on');
        }
        if(scrollTop >= 22550){  //스크롤 값
            $('#section11 .center11 .top11').addClass('on');
            $('#section11 .center11 .top11_1').addClass('on');
        }
        else{
            $('#section11 .center11 .top11').removeClass('on');
            $('#section11 .center11 .top11_1').removeClass('on');
        }
        if(scrollTop >= 24000){  //스크롤 값
            $('#section11 .center11 .top11_2').addClass('on');
        }
        else{
            $('#section11 .center11 .top11_2').removeClass('on');
        }
        if(scrollTop >= 25000){  //스크롤 값
            $('#section12 .center12 .top12').addClass('on');
        }
        else{
            $('#section12 .center12 .top12').removeClass('on');
        }
        if(scrollTop >= 26000){  //스크롤 값
            $('#section12 .center12 .top12_1').addClass('on');
        }
        else{
            $('#section12 .center12 .top12_1').removeClass('on');
        }
        if(scrollTop >= 27600){  //스크롤 값
            $('#section13 .center13 .top13').addClass('on');
            $('#section13 .center13 .top13_1').addClass('on');
        }
        else{
            $('#section13 .center13 .top13').removeClass('on');
            $('#section13 .center13 .top13_1').removeClass('on');
        }
        if(scrollTop >= 28700){  //스크롤 값
            $('#section13 .center13 .top13_2').addClass('on');
        }
        else{
            $('#section13 .center13 .top13_2').removeClass('on');
        }
        if(scrollTop >= 30000){  //스크롤 값
            $('#section13 .bottom13').addClass('on');
        }
        else{
            $('#section13 .bottom13').removeClass('on');
        }
        
//        if ( scrollTop === 0 ) {
//            $('#key').delay(700).queueAddClass('in');
//        } else {
//            $('#key').removeClass('in');
//        }
//
//        if ( scrollTop >= 824 ) {
//            $('#section02 > h2').addClass('on');
//        } else {
//
//        }
//
//        if ( scrollTop >= 1200 ) {
//
//        } else {
//
//        }
//
//        if ( scrollTop >= 1200 ) {
//
//        } else {
//
//        }



        //===================================================================
        // nav on/off event
        $('.container .main > section').each(function (i) {
            var fastNum = 100;
            var firstY = $('.container .main > section:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        })

    });
});












