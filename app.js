$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $("header").css({"height":"70px"});
            $("#logo").css({"margin-top":"-30px"});
        } 
        else{
            $("header").css({"height":"90px"});
            $("#logo").css({"margin-top":"7px"});
        }

    })
})

