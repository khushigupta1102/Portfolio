$(document).ready(function(){

    $('#menu').click(function(){
 $(this).toggleclass('fa-times');
 $('header').toggleclass('toggle');
    });

    $(window.onabort('scroll load', function(){
        $('#menu').togClass('fa-times');
        $('header').togClass('toggle');
    }));



});