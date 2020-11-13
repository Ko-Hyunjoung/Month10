;(function($){
    var cnt=0;
    var z=0;


        //1-1. 다음 슬라이드 카운트 함수 cnt++
        function nextSlideCountFn(){
            cnt++;
            mainSlideFn();
        }
        //1-2. 이전 슬라이드 카운트 함수 cnt--
        function prevSlideCountFn(){
            cnt--;
            mainSlideFn();
        }

        //2. 메인 슬라이드 함수
        function mainSlideFn(){
            $('.slide-wrap').stop().animate({left:(-1438*cnt)},500, function(){
                cnt>4? cnt=0 : cnt;
                cnt<0? cnt=4 : cnt;
                $('.slide-wrap').stop().animate({left:(-1438*cnt)},0); //리셋(리턴)
            });
            cnt>4? z=0 : z=cnt; //전역변수 사용
            pageBtnFn();
        }

        //3-1. next button 클릭 이벤트 리스너 / 이벤트 핸들러
        $('.next-btn').on({
            click: function(event){
                event.preventDefault();
                if( !$('.slide-wrap').is(':animated') ){
                    nextSlideCountFn();
                }


            }
        });

        //3-2. prev button 클릭 이벤트 리스너 / 이벤트 핸들러
        $('.prev-btn').on({
            click: function(event){
                event.preventDefault();
                if( !$('.slide-wrap').is(':animated') ){
                    prevSlideCountFn();
                }
            }
        });

        //3-3. 터치 스와이프 이벤트
        $('.slide-wrap').swipe({
            swipeLeft: function(){ //다음 슬라이드 카운트 함수 호출
                if( !$('.slide-wrap').is(':animated') ){
                    nextSlideCountFn();
                }
            },
            swipeRight: function(){ //이전 슬라이드 카운트 함수 호출 
                if( !$('.slide-wrap').is(':animated') ){
                    prevSlideCountFn();
                }
            }
        });


        //4-1. 인디게이터 (페이지버튼) 이벤트 함수 (모양 또는 마킹)
        function pageBtnFn(){
            $('.page-btn-wrap li').removeClass('addPage');
            $('.page-btn-wrap li').eq(z).addClass('addPage');
        }
        


        //4-2. 인디게이터 (페이지버튼) 클릭 이벤트 리스너 / 이벤트 핸들러
        $('.page-btn').each(function(index){
            $(this).on({
                click: function(e){
                    e.preventDefault();
                    cnt=index;  //클릭한 슬라이드 번호 전역변수
                    mainSlideFn();

                }
            });
        });


})(jQuery);