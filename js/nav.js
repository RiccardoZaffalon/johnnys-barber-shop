$("a[href^='#']").on("click", function( e ) {
    
    e.preventDefault();

    $('.full-nav').removeClass('is-open');

    $('#toggle-menu input').attr('checked', false);

    $("body, html").animate({ 
        scrollTop:$($(this).attr('href')).offset().top 
    }, 1000);
    
});

$('#toggle-menu input').on("click", function(e){

	$('.full-nav').toggleClass('is-open');

});