;(function(window, document, $){

    //메인 슬라이드 롤링 애니메이션
    //1. 카운트 변수 설정      /*  전역변수  */ 전체에서 사용 가능
    var cnt=0;

    //2-1. 다음(next) 슬라이드 카운트 이름있는(선언적) 함수 만들기
        function nextSlideCountFn(){
            cnt++;
            mainSlideFn();
            //증가된 카운트 변수 메인 슬라이드 함수에 전달
            //메인 함수 호출();
        }

    //2-2. 이전(prev) 슬라이드 카운트 이름있는(선언적) 함수 만들기
        function prevSlideCountFn(){
            cnt--;
            mainSlideFn();
            //증가된 카운트 변수 메인 슬라이드 함수에 전달
            //메인 함수 호출();
        }

    //3. 메인슬라이드함수 만들기 애니메이션 카운트 변수 사용
        function mainSlideFn(){
            $('.slide-wrap').stop().animate({ left:-829*cnt },600, function(){
                if(cnt>3){
                    cnt=0;  //첫번째 슬라이드
                }
                if(cnt<0){ 
                    cnt=3;  //마지막 슬라이드 (4번째)

                }
                $('.slide-wrap').stop().animate({ left:-829*cnt },0);    /* 초기화 */
            });

        }

    //4-1. 다음 화살 버튼 클릭 이벤트 - 다음 슬라이드 카운트 함수 호출
        $('.next-btn').on({
            click: function(){
                nextSlideCountFn();

            }
        })
    //4-2. 이전 화살 버튼 클릭 이벤트 - 이전 슬라이드 카운트 함수 호출
        $('.prev-btn').on({
            click: function(){
                prevSlideCountFn();

            }
        })


})(window, document, jQuery);