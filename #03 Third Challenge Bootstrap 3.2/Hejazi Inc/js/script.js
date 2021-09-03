$(document).ready(function () {

    //Nice Scroll
    // $("html").niceScroll();


    $('.carousel').carousel({
        interval: 5000
    });

    //Show Color Option Div When I CLick To Gear
    $('.fa-cog').click(function () {
        $(".color-option").fadeToggle();
    });

    // Change Theme Color On Click
    let ColorLi = $(".color-option ul li ");
    ColorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#009aff").end()
        .eq(2).css("backgroundColor", "#ff0076").end()
        .eq(3).css("backgroundColor", "#cf2be5").end()
        .eq(4).css("backgroundColor", "#ebd80e");

    ColorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });

    let scrollBtn = $("#scroll_up");
    $(window).scroll(function () {
        $(this).scrollTop() >= 700 ? scrollBtn.show() : scrollBtn.hide();
    });


    // Click On Button To Scroll Top
    scrollBtn.click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
    });

    window.setInterval(function () {
        $("body").css("overflow", "auto");
    }, 1500);
});


// Loading Screen

$(window).on('load', function () {
    //Loading Elements
    $(".loading-overlay .spinner").fadeOut(2000, function () {
        $(this).parent().fadeOut(1500, function () {
            $(this).remove();
        });
    });
});