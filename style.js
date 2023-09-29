$(document).ready(function(){
    var p=true;
    var t=true;
    window.setInterval(function(){
        if(p){
            $(".title>h3").css('color','red');
            p=false;
        }
        else{
            $(".title>h3").css('color','yellow');
            p=true;
        }
    },300);
    $('.gd>button').click(function(){
        if(t)
        {
            $('body').css({'background-color':'rgb(90, 90, 90)','color':'white'});
            $('header').css({'background-color':'rgb(90, 90, 90)','color':'white'});
            $('.nav_link>li>a').css({'color':'white'});
            $('.title').css({'background-color':'rgb(59, 59, 59)'})
            $('.card').css({'border': '3px solid rgb(59, 59, 59)'});
            t=false;        
        }
        else{
            $('body').css({'background-color':'white','color':'black'});
            $('header').css({'background-color':'white','color':'black'});
            $('.nav_link>li>a').css({'color':'black'});
            $('.title').css({'background-color':'#ccc'})
            $('.card').css({'border': '3px solid #ccc'});
            t=true;
        }
    });
})