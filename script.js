$(document).ready(function() {
    $('#menu-links > li > a').click(function() {
        var sub = $(this).parents('li').find('.submenu');
        var show = false;
        if ($(sub).css('display') == 'none') {
            show = true;
        }
        $('.submenu').hide();
        if (show) {
            $(sub).toggle();
        }
    });

    $('.titles >ul> li > a').click(function() {
        var sub = $(this).siblings('.categories');
        var show = false;
        if ($(sub).css('display') == 'none') {
            show = true;
            removeInactiveClass = true;
        }
        $('.categories').hide();
        $('.titles >ul> li > a').addClass('inactive-text');
        if (show) {
            $(sub).toggle();
            $(this).removeClass('inactive-text');
        }
    });

    $('.accordion-title').click(function() {
        var sub = $(this).siblings('.accordion-description');
        $('.accordion-title').find('i').removeClass('fa-angle-down').addClass('fa-angle-right');
        var show = false;
        if ($(sub).css('display') == 'none') {
            show = true;
            removeInactiveClass = true;
            $(this).find('i').removeClass('fa-angle-right').addClass('fa-angle-down');
        }
        $('.accordion-description').hide();
        if (show) {
            $(sub).toggle();
        }
    });

    $('#mobile-toggle').click(function(){
        $('menu').toggle();
    });

    $('.pic-thumb').click(function(){
        $('.pic-thumb').removeClass('selected');
        $(this).addClass('selected');
        $('#big-picture').attr('src', $(this).attr('src'));
    });
    
    (function(){
 
        $("#cart").on("click", function() {
          $(".shopping-cart").fadeToggle( "fast");
        });
        
      })();
    
});