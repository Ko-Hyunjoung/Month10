;(function(window,document,$,undefined){
    var t=0;

    setTimeout(resetFn,100);

    function resetFn(){
        $('#section9 h2').stop().animate({right:-1000},0).animate({right:83},1000);
        $('#section9 h3').stop().animate({right:-1000},0).animate({right:100},1500);
        $('#section9 p').stop().animate({right:-1000},0).animate({right:0},2000);
 
    }
    function formatFn(){
        $('#section9 h2').stop().animate({right:-1000},1000);
        $('#section9 h3').stop().animate({right:-1000},1500);
        $('#section9 p').stop().animate({right:-1000},2000);
 
    }
    function animationFn(){
        $('#section9 h2').stop().animate({right:83},2000);
        $('#section9 h3').stop().animate({right:100},2500);
        $('#section9 p').stop().animate({right:0},3000);
    }

    $(window).scroll(function(){
        if( $(this).scrollTop() < $(' #section7').offset().top ){
            if(t==1){
                t=0;
                formatFn();
            }

        }

        if( $(this).scrollTop() >= $(' #section7').offset().top ){
            if(t==0){
                t=1;
                animationFn();
            }

        }
    });

})(window,document,jQuery);