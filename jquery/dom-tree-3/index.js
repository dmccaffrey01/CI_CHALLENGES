$(document).ready(function() {
    $('#reset').click(function(){
        $(this).siblings().children().removeClass('red').removeClass('yellow').removeClass('green').removeClass('large-font');
    });
    
    $('#card-btn-1').click(function(){
        $(this).siblings("span").addClass("yellow");
    });
    
    $('#card-btn-2').click(function(){
        $(this).siblings("#card-par-1").addClass("red");
    });
    
    $('#card-btn-3').click(function(){
        $(this).siblings().addClass("large-font")
    });
});