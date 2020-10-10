function scrollPara(id) {
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 800, function () {
        window.location.hash = id;
    });

}

function darkTheme() {
    $("body").css({"background-image":"none"});
    $("body").css({"background-color":"black"});    
    $(".menuColor").css({"background-color":"rgb(25, 9, 51)"});    
    $("body, .jumbotron, .menuColor, #goToDiv0, #goToDiv1, #goToDiv2, #goToDiv3, #goToDiv4, #goToDiv5, #ddTemas")
    .css({"color":"white"});
}

function lightTheme() {
    $("body").css({"background-image":"none"});
    $("body").css({"background-color":"white"});    
    $(".menuColor").css({"background-color":"rgb(114, 109, 168)"});    
    $("body, .jumbotron, .menuColor, #goToDiv0, #goToDiv1, #goToDiv2, #goToDiv3, #goToDiv4, #goToDiv5, #ddTemas")
    .css({"color":"black"});
}

function midnightSun() {
    $("body").css({"background-image":"linear-gradient(to bottom right, rgb(145, 5, 68), rgb(231, 115, 0))"});
    $("body, .jumbotron, .menuColor, #goToDiv0, #goToDiv1, #goToDiv2, #goToDiv3, #goToDiv4, #goToDiv5, #ddTemas")
    .css({"color":"white"});
    $(".menuColor").css({"background-color":"rgb(0, 38, 66)"});

}

$(function () {
    $("#goToDiv0").on("click", function () {
        scrollPara("#div0");
    });

    $("#goToDiv1").on("click", function () {
        scrollPara("#div1");
    });

    $("#goToDiv2").on("click", function () {
        scrollPara("#div2");
    });

    $("#goToDiv3").on("click", function () {
        scrollPara("#div3");
    });

    $("#goToDiv4").on("click", function () {
        scrollPara("#div4");
    });

    $("#goToDiv5").on("click", function () {
        scrollPara("#div5");
    });

    $("#lightTheme").on("click", lightTheme);
    $("#darkTheme").on("click", darkTheme);
    $("#midnightSun").on("click", midnightSun);

});


