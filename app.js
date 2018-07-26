$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $("header").css({"background-color":"#42c2f4"});
            $(".logo a").css({"color":"black"});
            $("nav a").css({"color":"black"});
        }
        
        else {
            $("header").css({"background-color":"#1c1c1c"});
            $(".logo a").css({"color":"#FFF"});
            $("nav a").css({"color":"#FFF"});
        }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 820){
            $(".hi").addClass('bounce-4');
        }
    })
    
    $('.menu-toggle').click(function(){
    
        $('.site-nav').toggleClass('site-nav-open');
        $(this).toggleClass('open');
    
    })
    
})

//$(document).ready(function(){
//    $(window).scroll(function(){
//        if($(window).scrollTop() > $( window ).height() - 20){
//           $("#one-star").addClass('active-star'); 
//        } 
//        else if($(window).scrollTop() > $(window ).height() ){
//            $("#one-star").removeClass('active-star');
//        }
//    })
//})

//     $(document).ready(function() {
// 			$('#sticky-navigation').scrollspy({
// 				min: $('#nav').offset().top,
// 				onEnter: function(element, position) {
// 					$("#nav").addClass('fixed');
// 				},
// 				onLeave: function(element, position) {
// 					$("#nav").removeClass('fixed');
// 				}
// 			});
// 		});

