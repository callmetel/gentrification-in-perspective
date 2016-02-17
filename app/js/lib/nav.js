$(document).ready(function() {
	var $menuToggle = $('#menu-toggle'), 
		$menu = $('#menu'),
		$navIcon = $('.draw-icon'),
		$navLogo = $('#nav-logo'),
		$divider = $('.divider'),
		$subLine = $('.sub-line'),
		$promise = $('#promise-nav-link') ,
		$problem = $('#problem-nav-link'),
		tl = new TimelineMax({repeat:9999}),
		navtl = new TimelineMax({paused:true});


	tl.to($menu, 5, {css:{backgroundPosition: '49% 88%'}, ease:Power1.easeInOut});
	tl.to($menu, 5, {css:{backgroundPosition: '52% 93%'}, ease:Power1.easeInOut});

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