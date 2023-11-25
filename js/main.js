;(function () {
	'use strict';

	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	$('.js-gtco-nav-toggle').addClass('gtco-nav-white');

	    	if ( $('body').hasClass('offcanvas') ) {
    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
	    	}	
	    }
		});
	};

	var offcanvasMenu = function() {
		$('#page').prepend('<div id="gtco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
		var cloneLogo = $('#gtco-logo').clone();
		$('#gtco-offcanvas').append(cloneLogo);

		var clone1 = $('.menu-1 > ul').clone();
		$('#gtco-offcanvas').append(clone1);

		var clone2 = $('.menu-2 > ul').clone();
		$('#gtco-offcanvas').append(clone2);

		$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#gtco-offcanvas').find('li').removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);
			$this.addClass('active').find('ul').slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){
			var $this = $(this);
			$this.removeClass('active').find('ul').slideUp(500, 'easeOutExpo');				
		});

		$(window).resize(function(){
			if ( $('body').hasClass('offcanvas') ) {
    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');				
	    	}
		});
	};

	var burgerMenu = function() {
		$('body').on('click', '.js-gtco-nav-toggle', function(event){
			var $this = $(this);

			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();
		});
	};

	var dropdown = function() {
		$('.has-dropdown').mouseenter(function(){
			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});
	};

	var goToTop = function() {
		$('.js-gotop').on('click', function(event){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){
			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}
		});
	};

	// Loading page
	var loaderPage = function() {
		$(".gtco-loader").fadeOut("slow");
	};

	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		dropdown();
		goToTop();
		loaderPage();
	});
}());