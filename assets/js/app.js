
var a = $(".navbar").offset().top;

$(document).scroll(function () {
    if ($(this).scrollTop() > a) {
        $('.navbar').addClass('navbar-scroll');

    } else {
        $('.navbar').removeClass('navbar-scroll');

    }
});
