var $target = $('.anime'),
    animationClass= 'anime-start',
    offset=$(window).height()*3/4;

function animeScroll(){
    var documentTop = $(document).scrollTop();
    
    $target.each(function(){
        var itemTop= $(this).offset().top;
        if(documentTop > itemTop - offset){
            $(this).addClass(animationClass);
        }else{
            $(this).removeClass(animationClass);
        }
    })
}

animeScroll();

$(document).scroll(function(){
    animeScroll();
})


$(document).ready(function (){
    
    $("#quemsomos").click(function (){
        $('html, body').animate({scrollTop: $("#id1").offset().top - 100}, 600);
    });
    
    $("#nossossistemas").click(function (){
        $('html, body').animate({scrollTop: $("#id2").offset().top - 100}, 600);
    });

    $("#contato").click(function (){
        $('html, body').animate({scrollTop: $("#id3").offset().top - 100}, 600);
    });
  
});

