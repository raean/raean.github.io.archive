$(document).ready(function(){

    // To alter the colour and the styling of the navigation bar as it becomes sticky:
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            $('.navbar .menu li a').addClass("sticky");
            $('.menu-btn').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
            $('.navbar .menu li a').removeClass("sticky");
            $('.menu-btn').removeClass("sticky");
        }
    });

    // Toggling the menu and navigation bar when in reduced window size:
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation:
    var typed = new Typed(".typing", {
        strings: ["algorithms.", 
        "natural language processing.", 
        "machine learning.", 
        "product design.", 
        "big data.",
        "data analytics."],
        typeSpeed: 60 ,
        backSpeed: 60,
        loop: true
    });
});