(function($){
    $(".main-btn").on({
       
        mouseenter:function(){
            //버튼 효과 배경 색상 글자
            $(".main-btn").removeClass("addMainbtn");
            $(this).addClass("addMainbtn");

            //서브메뉴의 슬라이드 다운 업 효과(애니메이션)
            $(".sub").stop().slideUp(0);
            $(this).next().stop().slideDown(500);

// ?? this 말고 어떤 걸 쓸 수 있죠?
            
        },

        focusin:function(){
            //버튼 효과 배경 색상 글자
            $(".main-btn").removeClass("addMainbtn");
            $(this).addClass("addMainbtn");
        }

    });

    //마우스가 nav를 떠나면 
    $("#nav").on({
        mouseleave:function(){
            $(".sub").stop().slideUp(400);
            $(".main-btn").removeClass("addMainbtn");
        }
    });

/*
    //메인 버튼 클릭 링크 이동
    $(".main-btn").eq(0).on({
        click: function(){
            location.href="https://www.starbucks.co.kr/coffee/index.do";
       
        }
    });
    $(".main-btn").eq(1).on({
        click: function(){
            location.href="https://www.starbucks.co.kr/menu/index.do";
        }
    });
    $(".main-btn").eq(2).on({
        click: function(){
            location.href="https://www.starbucks.co.kr/store/index.do";
        }
    });
    $(".main-btn").eq(3).on({
        click: function(){
            location.href="https://www.starbucks.co.kr/responsibility/index.do";
        }
    });
    $(".main-btn").eq(4).on({
        click: function(){
            location.href="https://www.starbucks.co.kr/msr/index.do";
        }
    });
    $(".main-btn").eq(5).on({
        click: function(){
            location.href="https://www.starbucks.co.kr/whats_new/index.do";
        }
    });
*/

//each() 메소드 활용 버튼 배열 처리
//$(".main-btn").each();
$(".main-btn").each(function(index){
    $(this).on({
        click: function(){
            if(index==0){
                location.href="https://www.starbucks.co.kr/coffee/index.do";
            }
            else if(index==1){
                location.href="https://www.starbucks.co.kr/menu/index.do";
            }
            else if(index==2){
                location.href="https://www.starbucks.co.kr/store/index.do";
            }
            else if(index==3){
                location.href="https://www.starbucks.co.kr/responsibility/index.do";
            }
            else if(index==4){
                location.href="https://www.starbucks.co.kr/msr/index.do";
            }
            else if(index==5){
                window.open("https://www.starbucks.co.kr/whats_new/index.do");
 //? 다른창에서 열기 익스에서 열려면? //
            }
        }
    });
});
})(jQuery);