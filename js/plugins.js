$(function(){
    'use strict';
        $("html").niceScroll({
        cursorcolor: "#777",
        cursorwidth: "10px",
        cursorborder: "none",
        cursorborderradius: "0",
        scrollspeed: 120,
        mousescrollstep: 65,
        cursorminheight: 18,
    });
    var myHeader = $("header");
    myHeader.height($(window).height());
    $(window).resize(function(){
    myHeader.height($(window).height());
    });
    $(window).stellar();
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll > $('.snip-2').offset().top - ($(window).height() / 1.9)) {
            $('.snip-2').each(function(i){
                setTimeout(function(){
                $('.snip-2').eq(i).addClass('show');
                }, 150 * (i+1));
                
            });
        }
    });
});
$(window).load(function(){
    $("body").css("overflow", "auto");
        $(".loading").fadeOut(1000);
    });
