;(function($){
    var cnt=0;

    function nextCountFn(){
        cnt++;
        mainSlideFn();
    }
    function prevCountFn(){
        cnt--;
        mainSlideFn();
    }

    function mainSlideFn(){
        $('.slide-wrap').stop().animate({})
    }
})(jQuery);