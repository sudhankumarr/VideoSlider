$(document).ready(function(){
	//start of video slider
    var videoSliderItemsWidth=0,endScrollVideo;
    $('.video-overflow-slider .item').each(function(){
         videoSliderItemsWidth = videoSliderItemsWidth + $(this).outerWidth();
    });
    $('.video-overflow-slider .scroll .slider-row').css('width',videoSliderItemsWidth);

    if( $('.video-overflow-slider .scroll').scrollLeft()===0){
        $('.video-overflow-slider a.prev').addClass('disable-slide');
    }

    $('.video-overflow-slider .scroll').scroll(function() {
        endScrollVideo = $('.scroll .slider-row').width() - $('.scroll').width();
        if( $('.video-overflow-slider .scroll').scrollLeft()===0){
            $('.video-overflow-slider a.prev').addClass('disable-slide');
        }
        else if( $('.video-overflow-slider .scroll').scrollLeft()===endScrollVideo ){
            $('.video-overflow-slider a.next').addClass('disable-slide');
        }
        else{
            $('.video-overflow-slider a.prev').removeClass('disable-slide');
            $('.video-overflow-slider a.next').removeClass('disable-slide');
        }

    });

    var $items = $('.video-overflow-slider .item'),
        $videoSlides = $('.video-overflow-slider .scroll'),
        $itemWidth = $items.outerWidth();

    $('.video-overflow-slider a.next').click(function (e) {
        e.preventDefault();
        if( $('.scroll').scrollLeft()!==endScrollVideo ){
            $videoSlides.animate({
                scrollLeft: $itemWidth + $videoSlides.scrollLeft()
            }, 500);
        }
    });

    $('.video-overflow-slider a.prev').click(function (e) {
        e.preventDefault();
        if( $('.scroll').scrollLeft()!==0 ) {
            $videoSlides.animate({
                scrollLeft: -($itemWidth) + $videoSlides.scrollLeft()
            }, 500);
        }
    });
});