;(function($){
    var cnt=0;
    var z=0;


    function nextSlideCountFn(){
        cnt++;
        mainSlideFn();
    }
    function prevSlideCountFn(){
        cnt--;
        mainSlideFn();
    }

    function mainSlideFn(){
        $('.slide-wrap').stop().animate({left:(-1438*cnt)},200, function(){
            cnt>4? cnt=0 : cnt;
            cnt<0? cnt=4 : cnt;
            $('.slide-wrap').stop().animate({left:(-1438*cnt)},0);
        });
        cnt>4? z=0 : z=cnt;
        pageBtnFn();
    }

    $('.next-btn').on({
        click: function(e){
            e.preventDefault();
            if( !$('.slide-wrap').is(':animated')){
                nextSlideCountFn();
            }
        }
    });

    $('.prev-btn').on({
        click: function(e){
            e.preventDefault();
            if( !$('.slide-wrap').is(':animated')){
                prevSlideCountFn();
            }
        }
    });

    function pageBtnFn(){
        $('.page-btn-wrap li').removeClass('addPage');
        $('.page-btn-wrap li').eq(z).addClass('addPage');
    }
    $('.page-btn').each(function(index){
        $(this).on({
            click: function(e){
                e.preventDefault();
                cnt=index;
                mainSlideFn()

            }
        });
    });


})(jQuery);