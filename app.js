$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $("header").css({"height":"70px"});
            $("#logo").css({"font-size":"27px"});
            $("#logo").css({"transform":"translateY(-7px)"});
            $("nav ul").css({"transform":"translateY(-5px)"});
        } 
        else{
            $("header").css({"height":"90px"});
            $("#logo").css({"font-size":"32px"});
            $("#logo").css({"transform":"translateY(0px)"});
            $("nav ul").css({"transform":"translateY(0px)"});
        }

    })
})

