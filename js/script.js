// when document is ready, load
$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 4000, 
    });

    var typed = new Typed(".typed", {
        strings: ["Web Developer", "Front End Programmer", "Passionate Professional"], 
        typeSpeed: 70, 
        loop: true,
        startDelay: 1000, 
        showCursor: false
    });

});