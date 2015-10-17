$(document).ready(function(){
    $(".welcome-block").height($(window).height() - $(".header").height()-2);
    setInterval(function(){
        if ($(".first-screen").css("opacity") == 1){
            $(".first-screen").animate({"opacity":"0"},500);
        } else {
            $(".first-screen").animate({"opacity":"1"},500);
        }
    },6000);
});
