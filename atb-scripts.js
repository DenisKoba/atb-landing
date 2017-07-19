/**
 * Created by griffin on 7/17/17.
 */


$(window).scroll( function(){
    var top_of_object = $('.js-trigger').offset().top;
    var top_of_window = $(window).scrollTop();
    if( top_of_window > top_of_object){
        $('.js-image-one, .js-image-two, .js-image-three, .js-image-four, .js-image-five').addClass("js-image-move");
    }
});