(function($,window,document,undefined){

    $('.ani').css({opacity:0});
  
    //섹션1 애니메이션 
    function fnSection1(){
        $('.ani-1').stop().animate({opacity:1},800, function(){
            $('.ani-2').stop().animate({opacity:1},800, function(){
                $('.ani-3').stop().animate({opacity:1},800, function(){
                    $('.ani-4').stop().animate({opacity:1},800, function(){
                        $('.ani-5').stop().animate({opacity:1},800, function(){
                            $('.ani-6').stop().animate({opacity:1},800);
                        });
                    });
                });
            });
        });
    }  

    fnSection1();


})(jQuery,window,document);