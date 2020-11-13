(function(window, document, $){

    var cnt=-1;

    function noticeSlideFn(){
        cnt++; 
        if(cnt>3){
            cnt=-1;  // 마지막 슬라이드를 0으로 셋팅 마지막이전 마지막 4
        }
        $(".notice-list li").stop().animate({top:100+'%'},0).css({zIndex:2});     /* 초기값 */  //모두 초기화되서 24픽셀 아래에서 대기
        $(".notice-list li").eq(cnt<0?4:cnt).stop().animate({top:0},0).css({zIndex:1});       /* 현재 있는 거 */  //첫번째만 화면에서 대기
        $(".notice-list li").eq(cnt+1).stop().animate({top:0},1000).css({zIndex:3});       /* 다음값 */ /* 24px에 아래에서 위로(0으로) 부드럽게 올라오는데 걸리는 시간 1000 (1초) */
    }

    setInterval(noticeSlideFn, 1500);

//0  1
//1  2
//2  3
//3  4
//4  0



}(window, document, jQuery));