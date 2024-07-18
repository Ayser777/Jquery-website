// const cursorRounded = document.querySelector('.rounded');
// // const cursorPointed = document.querySelector('.pointed');


// const moveCursor = function(e) {
//     var mouseY = e.clientY;
//     var mouseX = e.clientX;

//     cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

//     // cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

// }

// window.addEventListener('mousemove', moveCursor)

// ------------

$(".open").on("click", function(e){
    $(e.target).parent().siblings(".overlay1, .content").addClass("active")
    
})

$(".overlay1").on("click", function(){
    $(".overlay1, .content").removeClass("active")
})

// ------------


$(window).scroll(function(){

    $(".section").each(function(){
        var x = $(window).scrollTop() + $(window).height()
        var y = $(this).offset().top + $(this).height() / 2

        if(x >= y){
            $(this).addClass("activeSec")
        }
    })
})

// --------------


$(".acordion").on("click", ".acordion-header", function(){
    $(this).toggleClass("active").next().slideToggle()
})

// --------------

var but1 = document.getElementById("btn2")  
  
function myfun() {  
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop  > 20) {  
        but1.style.display = 'block';  
    } else {  
        but1.style.display = 'none';  
    }  
}  
  
window.onscroll = function(){  
    myfun()  
}  
  
function scrolltop() {  
    document.body.scrollTop = 0;  
    document.documentElement.scrollTop = 0;  
}

// --------------



$(document).ready(function() {
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('nav').css('top', '130px');
        } else {
            $('nav').css('top', '0px');
        }
        lastScrollTop = st;
    });
});
