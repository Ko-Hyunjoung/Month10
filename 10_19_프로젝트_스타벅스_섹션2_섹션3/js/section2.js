(function(window, document, $){

    //공지사항 롤링 슬라이드 상하
    // 슬라이드 함수(){

    // }
    // 타이머(슬라이드 함수,2500); 2.5초 후에 실행
    // setInterval(함수, 2500);

    var cnt=-1;

    function noticeSlideFn(){
        cnt++;  // 0 1 2 3 4 0 1 2 3 4 ...
        if(cnt>4){
            cnt=0;
        }
        $(".notice-list li").stop().animate({top:100+'%'},0).css({zIndex:2});     /* 초기값 */  //모두 초기화되서 24픽셀 아래에서 대기
        $(".notice-list li").eq(cnt).stop().animate({top:0},0).css({zIndex:1});       /* 현재 있는 거 */  //첫번째만 화면에서 대기
        $(".notice-list li").eq( cnt+1 > 4 ? 0 : cnt).stop().animate({top:0},1000).css({zIndex:3});       /* 다음값 */ /* 24px에 아래에서 위로(0으로) 부드럽게 올라오는데 걸리는 시간 1000 (1초) */
    }

    setInterval(noticeSlideFn, 1500);

    // 0  1
    // 1  2
    // 2  3
    // 3  4
    // 4  5  X   ==> 0




    //섹션2의 프로모션 버튼 클릭 이벤트 리스너
    $(".promotion-btn").on({
        click: function(e){
            e.preventDefault();

            $(this).toggleClass("addUp");
            $("#section3").stop().slideToggle(500);
        }
    });

}(window, document, jQuery));