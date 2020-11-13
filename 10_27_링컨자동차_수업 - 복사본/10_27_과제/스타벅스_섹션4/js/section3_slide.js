;(function(window, document, $){
    var cnt = 0;
    var setId = 0;
    var setId2 = 0;


        //1. 카운트 함수
        function nextSlideCountFn(){
            cnt++; 
            mainSlideFn();
        }
        function prevSlideCountFn(){
            cnt--;
            mainSlideFn();
        }

        //2. 메인슬라이드 함수
        function mainSlideFn(){ //여기는 1부터 시작해서 1 2 3 4 이렇게 나오지
            $('.slide-wrap').stop().animate({ left:-829*cnt },600, function(){
                if(cnt>3){ cnt=0; }
                if(cnt<0){ cnt=3; }
                $('.slide-wrap').stop().animate({ left:-829*cnt },0);    /* 초기화 */
                
                $('.slide').removeClass('addSlide');
                $('.slide').eq(cnt+1).addClass('addSlide');   // 1 2 3 0     //css 들어있는 번호는 0 1 2 3 4 5 그래서 +1

            });
            pageBtnFn(cnt); //페이지버튼 (전달인자)
            //이걸 위에 안넣는 이유
            //콜백은 한템포 느려서 저기 넣으면 0.6초동안 이동이 끝난 애니메이션 뒤에 실행되기때문에
            //초록색 동그라미가 애니메이션 이동하고 한템포 늦게가서 눈으로 보기 이상해
        }

    //이벤트


    //4-1. 다음 화살 버튼 클릭 이벤트 - 다음 슬라이드 카운트 함수 호출
        $('.next-btn').on({
            click: function(){     //이벤트 리스너 
                if( !$('.slide-wrap').is(":animated")){
                    nextSlideCountFn();  //이벤트 핸들러
                }
                timerControlFn();
                
            }
        });

    //4-2. 이전 화살 버튼 클릭 이벤트 - 이전 슬라이드 카운트 함수 호출
    $('.prev-btn').on({
        click: function(){
            //애니메이션이 안될 때만 클릭하여 함수 호출
            if( !$('.slide-wrap').is(':animated')){
                prevSlideCountFn();
            }
            timerControlFn();
        }
    });

    //터치 스와이프 레프트   다음슬라이드 카운드
    //터치 스와이프 롸이트   이전슬라이드 카운드

    //4-3 터치 스와이프
    $('.slide-wrap').swipe({
        swipeLeft: function(){   //다음슬라이드
            if( !$('.slide-wrap').is(":animated")){
                nextSlideCountFn();  //이벤트 핸들러
            }
            timerControlFn();
        },
        swipeRight: function(){  //이전슬라이드
                //애니메이션이 안될 때만 클릭하여 함수 호출
            if( !$('.slide-wrap').is(':animated')){
                prevSlideCountFn();
            }
            timerControlFn();
        }
    });

        //4-4 타이머 카운트 컨트롤
        /////////////////////////////////
        // 타이머 컨트롤 카운트 함수
        // 이벤트 핸들러에 추가 함수
        function timerControlFn(){
            clearInterval(setId);
            clearInterval(setId2); //카운트 타이머 중지
            $('.pause-play-btn').addClass('addPlay');

            //중지상태 카운트 시작
            var cnt2 = 0;
            setId2 = setInterval(function(){
                    cnt2++; 
                    console.log( cnt2 );
                    
                    //조건문
                    if(cnt2>10){   
                        nextSlideCountFn(); //다음슬라이드 즉시 실행
                        initTimerFn();      //3초후 다음 슬라이드
                        clearInterval(setId2); //자신의 타이머 중지
                        $('.pause-play-btn').removeClass('addPlay');

                    }                        
            }, 1000);
        }  

    //5. each() 메서드로 .page-btn 버튼의 요소를 배열처리하여 인덱스번호를 반환(출력)한다
    $('.page-btn').each(function(index){
        $(this).on({
            click: function(){
                cnt=index;      //카운트 번호를 인덱스번호로 저장  //지역변수였던 index를 cnt로 보내면서 전역변수가 되는거야
                mainSlideFn();  //메인슬라이드 호출
                clearInterval(setId); //버튼 클릭시 타이머 중지
                $('.pause-play-btn').addClass('addPlay');

                timerControlFn();
            }
        });
    });

    //6. 인디게이터(페이지버튼)에 마킹 표시(배경이미지 녹색으로) -addClass
    function pageBtnFn(z){
        //console.log(z); //1 2 3 4 1 2 3 4 ...
        z>3 ? z=0 : z;
        //console.log(z); //1 2 3 0 1 2 3 0 ...
        $('.page-btn').removeClass('addPageBtn');
        $('.page-btn').eq(z).addClass('addPageBtn');

    }

    //7. 타이머 3초 간격 다음슬라이드 카운트 함수 호출 
    function initTimerFn(){
       setId = setInterval(nextSlideCountFn, 3000);
       console.log(setId);   //wjdtn 0 1 2 3 ..... 15 .. 30
    }
    // setTimeout(initTimerFn, 100);
    // 이거 중복되니까 중지시켜놔야해
  

    //8. 타이머 일시중지 버튼 클릭 이벤트
    /*
    var t=0;  //실행상태  //toggle 약자
    
    $('.pause-play-btn').on({
        click: function(){
        
        if(t==0){
            t=1;  //중지상태
            $(this).addClass('addPlay');  // 플레이 이미지로 변경
            clearInterval(setId);  // 중지
        }
        else if(t==1){    //if(t==1) 생략가능
            t=0;  //실행상태
            $(this).removeClass('addPlay');  //정지 이미지로 변경
            timerFn();   //타이머 재실행

        }

        }
    });
    */

    //8 위에 꺼 밑에 꺼 선택이지만 둘 다 해보구 has로 남겨놔
    //hasClass('addPlay') 있으면 true 없으면 false;
    //클래스가 있으면 중지상태  (삼각형 이미지를 애드클래스로 넣어놨으니까) 
    //클래스가 없으면 플레이상태
    $('.pause-play-btn').on({
        click: function(){
            var x = null;    //여기는 아무것도 없는거야 (null) 전혀 손대지 않은 상태, 참과 거짓을 판단하기 좋아요
                x = $(this).hasClass('addPlay'); // true || false  둘 중에 하나의 값이 밑에 찍혀요
                if( x== false){   //현재 재생 중인 상태이면
                    clearInterval(setId);
                    clearInterval(setId2);
                    $(this).addClass('addPlay');  
                }
                else if( x== true){  //현재 중지상태임, timerFn(); 넣어서 다시 플레이
                    // nextSlideCountFn();  //++ 다음슬라이드를 즉시실행
                    clearInterval(setId);
                    clearInterval(setId2);
                    initTimerFn();  //플레이 3초후에 계속 반복
                    $(this).removeClass('addPlay');  
                }

        }
    });

    //프로모션 버튼 클릭 이벤트
    $(".promotion-btn").on({
        click: function(e){
            e.preventDefault();

            $(this).toggleClass("addUp");
            $("#section3").stop().slideToggle(500);

            //addUp 클래스가 존재하면 섹션3이 open 된거니까
            //슬라이드는 실행하고

            //그렇지 않으면 (그외에) else
            //addUp 클래스가 존재하지 않으면 섹션3이 close 된거니까
            //슬라이드 중지함
            
            console.log( $(this).hasClass('addUp'));
            if( $(this).hasClass('addUp') ){  //슬라이드 실행
                initTimerFn();   // 플레이
                $('.pause-play-btn').removeClass('addPlay');  
            }
            else { //슬라이드 일시정지 초기화 처음상태
                clearInterval(setId); //슬라이드 전체 타이머 중지
                clearInterval(setId2);
                cnt=0; //카운트 0 초기화
                $('.slide-wrap').stop().animate({ left:-829*cnt },0);    /* 초기화 */
                $('.slide').removeClass('addSlide'); //불투명도 초기화
                $('.slide').eq(cnt+1).addClass('addSlide'); //불투명도 초기화
                pageBtnFn(cnt);  //페이지버튼 초기화
                $('.pause-play-btn').addClass('addPlay'); //플레이 정지버튼 초기화
            }
        }
    });
    


})(window, document, jQuery);