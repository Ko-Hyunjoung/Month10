(function(window, document, $){

    var cnt =-1;

    function noticeSlideFn(){
        cnt++;
        if(cnt>3){
            cnt=-1;
        }

        $(".notice-list li").stop().animate({top:24},0).css({zIndex:2});
        $(".notice-list li").eq(cnt<0?4:cnt).stop().animate({top:0},0).css({zIndex:1});
        $(".notice-list li").eq(cnt+1).stop().animate({top:0},1000).css({zIndex:3});
    }
    setInterval(noticeSlideFn, 1500);

    $(".promotion-btn").on({
        click: function(e){
            e.preventDefault();

            $(this).toggleClass("addUp");
            $("#section3").stop().slideToggle(500);
        }
    });

}(window, document, jQuery));


// 1 다시 올라올 때 5 글씨가 겹쳐요