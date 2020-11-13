;(function(window,document,$,undefined){
    var t=0;

    setTimeout(resetFn,100);

    function resetFn(){
        $('#section8 h2').stop().animate({right:-1000},0).animate({right:0},1000);
        $('#section8 .button-wrap').stop().animate({right:-1000},0).animate({right:360},1500);
        
    }
    function formatFn(){
        $('#section8 h2').stop().animate({right:-1000},1000);
        $('#section8 .button-wrap').stop().animate({right:-1000},1500);
        
    }
    function animationFn(){
        $('#section8 h2').stop().animate({right:0},1000);
        $('#section8 .button-wrap').stop().animate({right:360},1500);
        
    }

    $(window).scroll(function(){
        if( $(this).scrollTop() < $('#section7').offset().top){
            if(t==1){
                t=0;
                formatFn();
            }
        }
        if( $(this).scrollTop() >= $('#section7').offset().top){
            if(t==0){
                t=1;
                animationFn();
            }
        }
    });


})(window,document,jQuery);