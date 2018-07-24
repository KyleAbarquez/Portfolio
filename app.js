$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $("header").css({"background-color":"#42c2f4"});
            $("#logo").css({"color":"black"});
            $("nav a").css({"color":"black"});
            $("nav ul").css({"background-color":"#42c2f4"});
        }
        
        else {
            $("header").css({"background-color":"black"});
            $("#logo").css({"color":"#FFF"});
            $("nav a").css({"color":"#FFF"});
            $("nav ul").css({"background-color":"black"});
        }
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

