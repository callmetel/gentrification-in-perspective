$(document).ready(function() {
	
	var $menuToggle = $('#menu-toggle'), 
	$menu = $('#menu'),
	$navIcon = $('.draw-icon'),
	$navLogo = $('#nav-logo'),
	$divider = $('.divider'),
	$subLine = $('.sub-line'),
	$promise = $('#promise-nav-link') ,
	$problem = $('#problem-nav-link'),
	navtl = new TimelineMax({paused:true});

	$.fn.parallax = function ( resistance, mouse ) 
	{
		$el = $( this );
		TweenLite.to( $el, 0.2, 
		{
			x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
			y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
		});

	};

	$.fn.parallaxTouch = function ( resistance, touch ) 
	{
		$el = $( this );
		TweenLite.to( $el, 0.2, 
		{
			x : -(( touch.clientX - (window.innerWidth/2) ) / resistance ),
			y : -(( touch.clientY - (window.innerHeight/2) ) / resistance )
		});

	};

	$( document ).mousemove( function( e ) {

		$( '.background' ).parallax( -30, e );

		$( '.level-1' ).parallax( -49 , e );
		$( '.level-2' ).parallax( -25 , e );
		$( '.level-3' ).parallax( -49 , e );
		$( '.level-4' ).parallax( -49 , e );
		$( '.level-5' ).parallax( -49 , e );

	});

	$( document ).touchmove( function( e ) {

		$( '.background' ).parallaxTouch( -30, e );

		$( '.level-1' ).parallaxTouch( -49 , e );
		$( '.level-2' ).parallaxTouch( -25 , e );
		$( '.level-3' ).parallaxTouch( -49 , e );
		$( '.level-4' ).parallaxTouch( -49 , e );
		$( '.level-5' ).parallaxTouch( -49 , e );

	});


	function problemEnter(){
		$promise.addClass('blur-out');
		$promise.removeClass('blur-in');
		$problem.addClass('blur-in');
	}
	$problem.mouseenter( problemEnter );

	function promiseEnter(){
		$problem.addClass('blur-out');
		$problem.removeClass('blur-in');
		$promise.addClass('blur-in');
	}
	$promise.mouseenter( promiseEnter );

	navtl.to( $navLogo , .00001 , {className:'fadeBlurUp2'});
	navtl.staggerFrom( $navIcon , 2 , {drawSVG:0}, 0.25, "+=1");
	navtl.from( $divider , 1 , {scale:0}, "-=3");
	navtl.fromTo( $problem, 1.5, {scaleY:0}, {scaleY:1, ease:Power1.easeOut}, "-=2");
	navtl.fromTo( $promise, 1.5, {scaleY:0}, {scaleY:1, ease:Power1.easeOut}, "-=2");
	navtl.from( $subLine, .75, {scaleX:0, ease:Power1.easeOut}, "-=.5");

	$menuToggle.on('click', function(){
		$menu.toggleClass('city-bg');

		if( $menuToggle.is(':checked') ){
			navtl.timeScale(1).restart();
		}
		else{
			navtl.timeScale(1).reverse();

			$promise.removeClass('blur-in');
			$problem.removeClass('blur-in');
			$promise.removeClass('blur-out');
			$problem.removeClass('blur-out');
		}
	});

});