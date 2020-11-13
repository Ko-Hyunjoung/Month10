(function($, window, document, undefined){

    $('.ani').css({opacity:0});

    function fnSection1(){
        $('.ani-1').stop().animate({opacity:1},800, function(){
            $('.ani-2').stop().animate({opacity:1},800, function(){
                $('.ani-3').stop().animate({opacity:1},800, function(){
                    $('.ani-4').stop().animate({opacity:1},800, function(){
                        $('.ani-5').stop.animate({opacity:1},800, function(){
                            $('.ani-6').stop.animate({opacity:1},800, function(){});
                        });
                    });
                });
            });

        });
    }

    fnSection1();

})(jQuery, window, document);