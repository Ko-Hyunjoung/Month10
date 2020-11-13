;(function(window, document, $){

    var cnt = 0;
    var setId = 0;
    var setId2 = 0;

    function nextSlideCountFn(){
        cnt++;
        mainSlideFn();
    }
    function prevSlideCountFn(){
        cnt--;
        mainSlideFn();
    }

    function mainSlideFn(){
        $('.slide-wrap').stop().animate({ left:-1438*cnt },600, function(){
            if(cnt>4){
                cnt=0;
            }
            if(cnt<0){
                cnt=4;
            }
            $('.slide-wrap').stop().animate({left:-1438*cnt},0);
        });
        pageBtnFn(cnt);

    }
    
    $('.next-btn').on({
        click: function(){
            if( !$('.slide-wrap').is(":animated")){
                nextSlideCountFn();
            }
            clearInterval(setId);
            clearInterval(setId2);

            var cnt2 = 0;
            setId2 = setInterval(function(){
                cnt2++;
                if(cnt2>6){
                    nextSlideCountFn();
                    timerFn();
                    clearInterval(setId2);

                }
            }, 1000);

        }
    })
    $('.prev-btn').on({
        click: function(){
            if( !$('.slide-wrap').is(":animated")){
                prevSlideCountFn();
            }
            clearInterval(setId);
            clearInterval(setId2);

            var cnt2 = 0;
            setId2 = setInterval(function(){
                cnt2++;
                if(cnt2>6){
                    nextSlideCountFn();
                    timerFn();
                    clearInterval(setId2);

                }
            }, 1000);

        }
    })

/*
    $('.page-btn').eq(0).on({
        click: function(){
            cnt = 0;
            mainSlideFn();
        }
    });
    $('.page-btn').eq(1).on({
        click: function(){
            cnt = 1;
            mainSlideFn();
        }
    });
    $('.page-btn').eq(2).on({
        click: function(){
            cnt = 2;
            mainSlideFn();
        }
    });
    $('.page-btn').eq(3).on({
        click: function(){
            cnt = 3;
            mainSlideFn();
        }
    });
    $('.page-btn').eq(4).on({
        click: function(){
            cnt = 4;
            mainSlideFn();
        }
    });
*/

    $('.page-btn').each(function(index){
        $(this).on({
            click: function(){
                cnt=index;
                mainSlideFn();
            }
        });
    });

    //인디게이터(페이지버튼)에 마킹 표시 - addClass
    function pageBtnFn(z){
        z>4 ? z=0 : z;
        $('.page-btn').removeClass('addPageBtn');
        $('.page-btn').eq(z).addClass('addPageBtn');
    }
    
    function timerFn(){
        setId = setInterval(nextSlideCountFn, 3000);
 
    }
    timerFn();

})(window, document, jQuery);