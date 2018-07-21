$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $("header").css({"background-color":"#42c2f4"});
            $("#logo").css({"color":"black"});
        } 
        else {
            $("header").css({"background-color":"black"});
            $("#logo").css({"color":"#FFF"});
        }
    })
})

