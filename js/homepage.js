$(document).ready(function(){
    
    if($(window).width() > 991){
        load_horizontal_theme();
    } else {
        load_vertical_theme();
    }

    $(window).resize(function() {
        if($(window).width() > 991){
            load_horizontal_theme();
        } else {
            load_vertical_theme();
        }
    });


    // Reseting the page
    $('.home').on('click', function(){
        $('.home').css({top: '-100px'});
        if($(window).width() > 991){
            $('.header').animate({marginTop: '0px'});
            $('.feature_wrapper').css({alignItems: 'flex-end', paddingBottom: '50px'}).animate({width: '25%'}, {duration: 300, queue: false});
            $('.feature_details').hide();
            $('.feature_brief').css({alignContent: 'space-between'}).show();
            $('.feature_title').css({width: '75%', writingMode: 'unset', transform: 'unset', border: '0px', opacity: '1', borderBottom: 'solid 1px #333333'}).addClass('plus');
            $('.feature_title h1').show();
            $('.feature_info, .feature_img').fadeIn();
        } else {
            $('.side').animate({marginRight: '0px'});
            $('.feature_wrapper').animate({height: '25vh'}, {duration: 300, queue: false});
            $('.feature_details').hide();
            $('.feature_brief').show();
            $('.feature_title').css({width: '75%', border: '0px', opacity: '1', borderBottom: 'solid 1px #333333'}).addClass('plus');
            $('.feature_title h1').show();
            $('.feature_img').fadeIn();
        }
    });




    $('.feature_wrapper').find('.feature_details').hide();
    $('.feature_wrapper').on('click', function(){

        $('.home').css({top: '30px'});
        if($(window).width() > 991){
            $('.header').animate({marginTop: '-150px'});

            $('.feature_wrapper').css({alignItems: 'flex-end', paddingBottom: '50px'});
            $('.feature_wrapper').find('.feature_details').hide();
            $('.feature_wrapper').animate({width: '5%'}, {duration: 300, queue: false});
            $('.feature_wrapper').find('.feature_title h1').css({fontSize: '32px', lineHeight: '28px'}).fadeIn();
            $('.feature_wrapper').not(this).find('.feature_title').css({opacity: 0.2, width: '100%', writingMode: 'vertical-rl', transform: 'rotate(-180deg)', borderBottom: '0px'}).removeClass('plus');
            $('.feature_wrapper').find('.feature_brief').css({alignContent: 'end'}).show();
            $('.feature_info, .feature_img').fadeOut();

            $(this).css({alignItems: 'center', paddingBottom: '0px'});
            $(this).find('.feature_info, .feature_img').hide();
            $(this).animate({width: '85%'}, {duration: 300, queue: false});
            $(this).find('.feature_details').fadeIn();
            $(this).find('.feature_brief').hide();
            $(this).find('.feature_title h1').hide();
            $(this).find('.feature_title').css({textAlign: 'left', opacity: 1, writingMode: 'unset', transform: 'none'}).removeClass('plus');
        } else {
            $('.features').css({padding: '0px'});
            $('.side').animate({marginRight: '-300px'});

            $('.feature_wrapper').animate({height: '10vh'}, {duration: 300, queue: false});
            $('.feature_wrapper').find('.feature_details').hide();
            $('.feature_wrapper').find('.feature_title h1').css({fontSize: '32px', lineHeight: '28px'}).fadeIn();
            $('.feature_wrapper').not(this).find('.feature_title').css({opacity: 0.2, width: '100%', borderBottom: '0px'});
            $('.feature_wrapper').find('.feature_brief').css({alignContent: 'end'}).show();
            $('.feature_info, .feature_img').fadeOut();

            $(this).css({alignItems: 'center'});
            $(this).animate({height: '70vh'}, {duration: 300, queue: false});
            $(this).find('.feature_details').fadeIn();
            $(this).find('.feature_brief').hide();
            $(this).find('.feature_title h1').hide();
            $(this).find('.feature_title').css({textAlign: 'left', opacity: 1, writingMode: 'unset', transform: 'none'}).removeClass('plus').addClass('plus_full');
        }
            
    });
    

    $('.hamburger').on('click', function(){
        $('#mySidebar').animate({marginRight: 0});
    });
    $('.close_menu_btn').on('click', function(){
        $('#mySidebar').animate({marginRight: '-500px'});
    });
});

function load_horizontal_theme(){
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    var features = $('.feature_wrapper');
    var feature_count = features.length;
    var feature_width = Math.floor( ww / feature_count);

    features.css({width: feature_width + 'px'});
}

function load_vertical_theme(){
    // var ww = window.innerWidth;
    // var wh = window.innerHeight;
    // var features = $('.feature_wrapper');
    // var feature_count = features.length;
    // var feature_height = Math.floor( wh / feature_count);

    // features.css({height: feature_height + 'px'});
}