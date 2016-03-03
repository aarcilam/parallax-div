// PARALLAX DIV v1.0
// Developed by Andres Arcila - andresarcila2@me.com
//
$(window).scroll(function() {

    var div_to_parallax = document.getElementsByClassName("parallax-div");

    for (var i = 0; i < div_to_parallax.length; i++) {
        var top_div = div_to_parallax[i].parentNode.offsetTop / 3;
        var scrolled = $(window).scrollTop()/3;

        div_to_parallax[i].style.opacity = 1;
        div_to_parallax[i].style.top = top_div-scrolled + "px";
    };
   
});