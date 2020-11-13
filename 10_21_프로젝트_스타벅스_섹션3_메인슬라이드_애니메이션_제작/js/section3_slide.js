;(function(window, document, $){

    //메인 슬라이드 롤링 애니메이션
    //1. 카운트 변수 설정      /*  전역변수  */ 전체에서 사용 가능
    var cnt=0;
    var setId=0;


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
                if(cnt>3){  //총 슬라이드 4개  0 1 2 3 (n-1)
                    cnt=0;  //첫번째 슬라이드
                }
                if(cnt<0){  //첫번째 미만이면 -1 이상이면
                    cnt=3;  //마지막 슬라이드 (4번째)

                }
                $('.slide-wrap').stop().animate({ left:-829*cnt },0);    /* 초기화 */

            });
            pageBtnFn(cnt); //페이지버튼 (전달인자)

        }

    //4-1. 다음 화살 버튼 클릭 이벤트 - 다음 슬라이드 카운트 함수 호출
        $('.next-btn').on({
            click: function(){     //이벤트 리스너 
                //애니메이션이 구동중에는 클릭을 못하게 막는 알고리즘
                console.log($('.slide-wrap').is(":animated"));

                //애니메이션이 안될때만 실행 
                // if( $('.slide-wrap').is(":animated")===false ){

                // }

                // if( $('.slide-wrap').is(":animated")!==true ){

                // }

                if( !$('.slide-wrap').is(":animated")){
                    nextSlideCountFn();  //이벤트 핸들러
                }
                
                clearInterval(setId);
                $('.pause-play-btn').addClass('addPlay');

            }
        });
    //4-2. 이전 화살 버튼 클릭 이벤트 - 이전 슬라이드 카운트 함수 호출
        $('.prev-btn').on({
            click: function(){
                //애니메이션이 안될 때만 클릭하여 함수 호출
                if( !$('.slide-wrap').is(':animated')){

                    prevSlideCountFn();
                }

                clearInterval(setId);
                $('.pause-play-btn').addClass('addPlay');
            }
        })

    //5. 인디게이터(4개) 버튼 클릭 이벤트 - 요소 객체 배열처리 each() 메서드 
    //   알고리즘 구현
    //   첫번째를 클릭하면 0(인덱스번호)이 나오고 : 슬라이드번호       -819*index
    //   두번째를 클릭하면 1(인덱스번호)이 나오고 : 슬라이드번호       -819*index 
    //   세번째를 클릭하면 2(인덱스번호)이 나오고 : 슬라이드번호       -819*index
    //   네번째를 클릭하면 3(인덱스번호)이 나오고 : 슬라이드번호       -819*index
/*
    $('.page-btn').eq(0).on({
        click: function(){
            cnt = 0;
            // 메인함수 호출
            mainSlideFn();
        }
    });
    
    $('.page-btn').eq(1).on({
        click: function(){
            cnt = 1;
            // 메인함수 호출
            mainSlideFn();
        }
    });

    $('.page-btn').eq(2).on({
        click: function(){
            cnt = 2;
            // 메인함수 호출
            mainSlideFn();
        }
    });

    $('.page-btn').eq(3).on({
        click: function(){
            cnt = 3;
            // 메인함수 호출
            mainSlideFn();
        }
    });
*/

    //6. each() 메서드로 .page-btn 버튼의 요소를 배열처리하여 인덱스번호를 반환(출력)한다
    $('.page-btn').each(function(index){
        $(this).on({
            click: function(){
                cnt=index;      //카운트 번호를 인덱스번호로 저장  //지역변수였던 index를 cnt로 보내면서 전역변수가 되는거야
                mainSlideFn();  //메인슬라이드 호출
                clearInterval(setId); //버튼 클릭시 타이머 중지
                $('.pause-play-btn').addClass('addPlay');
            }
        });
    });

    //7. 인디게이터(페이지버튼)에 마킹 표시(배경이미지 녹색으로) -addClass
    function pageBtnFn(z){
        //console.log(z); //1 2 3 4 1 2 3 4 ...
        z>3 ? z=0 : z;
        //console.log(z); //1 2 3 0 1 2 3 0 ...
        $('.page-btn').removeClass('addPageBtn');
        $('.page-btn').eq(z).addClass('addPageBtn');

    }

    //8. 타이머 3초 간격 다음슬라이드 카운트 함수 호출 
    function timerFn(){
       setId = setInterval(nextSlideCountFn, 3000);
       console.log(setId);   //wjdtn 0 1 2 3 ..... 15 .. 30
    }

    timerFn();             //로딩시 바로 타이머 호출

    //9. 타이머 일시중지 버튼 클릭 이벤트
    /*
    var t=0;  //toggle 약자
    
    $('.pause-play-btn').on({
        click: function(){
        
        if(t==0){
            t=1;
            $(this).addClass('addPlay');  // 플레이 이미지로 변경
            clearInterval(setId);  // 중지
        }
        else if(t==1){    //if(t==1) 생략가능
            t=0;
            $(this).removeClass('addPlay');  //정지 이미지로 변경
            timerFn();   //타이머 재실행

        }

        }
    });
    */

    //hasClass('addPlay') 있으면 true 없으면 false;
    //클래스가 있으면 중지상태  (삼각형 이미지를 애드클래스로 넣어놨으니까) 
    //클래스가 없으면 플레이상태
    $('.pause-play-btn').on({
        click: function(){
            var x = null;    //여기는 아무것도 없는거야 (null) 전혀 손대지 않은 상태, 참과 거짓을 판단하기 좋아요
                x = $(this).hasClass('addPlay'); // true || false  둘 중에 하나의 값이 밑에 찍혀요
                if( x== false){   //현재 재생 중인 상태이면
                    clearInterval(setId);
                    $(this).addClass('addPlay');  
                }
                else if( x== true){  //현재 중지상태임, timerFn(); 넣어서 다시 플레이
                    nextSlideCountFn();  //++ 다음슬라이드를 직시실행
                    timerFn();  //플레이 3초후에 계속 반복
                    $(this).removeClass('addPlay');  
                }

        }
    });
    


})(window, document, jQuery);