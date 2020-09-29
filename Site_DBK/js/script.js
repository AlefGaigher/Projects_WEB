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