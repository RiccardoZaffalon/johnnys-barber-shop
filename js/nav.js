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

var services = $("#services").offset().top;

var about = $("#about").offset().top;

var contacts = $("#contacts").offset().top;

$(window).on("scroll", function() {

	var scrolled = $(window).scrollTop();

        if (scrolled < services) {
            $("#mouse-icon").attr("href", "#services");

        }

		else if (scrolled + 10 > services && scrolled + 10 < about) {
			$("#mouse-icon").attr("href", "#about");
		}

        else if (scrolled + 10 > about && scrolled + 10 < contacts) {
            $("#mouse-icon").attr("href", "#contacts");
        }

        else if (scrolled + 10 > contacts) {            
            $("#mouse-icon").attr("href", "#footer");
        };
});

