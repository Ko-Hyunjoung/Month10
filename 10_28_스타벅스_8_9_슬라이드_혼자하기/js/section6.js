;(function(window,document,$,undefined){
    var t=0;

    setTimeout(resetFn,100);

    function resetFn(){
        $('#section6 .img-wrap').stop().animate({opacity:0},0).animate({opacity:1},3000);
    }
    function formatFn(){
        $('#section6 .img-wrap').stop().animate({opacity:0},1000);
    }
    function animationFn(){
        $('#section6 .img-wrap').stop().animate({opacity:1},3000);
    }

    $(window).scroll(function(){

            console.log('윈도우 스크롤 탑값 ', $(this).scrollTop() );
            console.log('섹션1의 탑값 ', $('#section1').offset().top );
            console.log('섹션2의 탑값 ', $('#section2').offset().top );
            console.log('섹션4의 탑값 ', $('#section4').offset().top );
            console.log('섹션5의 탑값 ', $('#section5').offset().top );
            console.log('섹션6의 탑값 ', $('#section6').offset().top );
            console.log('섹션7의 탑값 ', $('#section7').offset().top );
            console.log('섹션8의 탑값 ', $('#section8').offset().top );
            console.log('섹션9의 탑값 ', $('#section9').offset().top );
            console.log('footer 탑값 ', $('#footer').offset().top );

            if( $(this).scrollTop() < $('#section5').offset().top-100 ){
                if(t==1){
                    t=0;
                    //섹션6의 이미지를 부드럽게 나타나게 하시오.
                    formatFn();
                }
            }
            if( $(this).scrollTop() >= $('#section5').offset().top-100 ){
                if(t==0){
                    t=1;
                    //섹션6의 이미지를 부드럽게 나타나게 하시오.
                    animationFn();
                }
            }



    });

})(window,document,jQuery);