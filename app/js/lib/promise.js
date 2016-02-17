$(document).ready(function() {

	var intro = $('#intro-screen'),
		$promise = $('#promise-screen'),
		$problem = $('#problem-screen'),
		$promiseContent = $('#promise-content'),
		$prom1 = $('#prom-text-1'),
		$prom2 = $('#prom-text-2'),
		$prom3 = $('#prom-text-3'),
		$promCTA = $('#prom-cta'),
		$promP= $('.prom-p'),
		$splitBlocker = $('#split-blocker'),
		$splitScreen = $('#split-screen'),
		$promiseText = $('#promise-text') ,
		$mapBg = $('#map-bg') ,
		$intense = $('.i') ,
		$moderate = $('.m') ,
		$gentrified = $('.g') ,
		$mapOutline = $('#map-outline').children() ,
		promiseTL = new TimelineMax(),
		contentTL = new TimelineMax(),
		mapTL = new TimelineMax(),
		disableTL = new TimelineLite();

	$promise.on('click', function(){
		//the promise timeline controls the background animation of the section
		promiseTL.set( $splitScreen, {css:{backgroundPosition:'53% 90%'}});
		$splitScreen.removeClass('blur-left');

		promiseTL.to( $splitScreen, 14 , {css:{backgroundPosition:'70% 0%'}, ease:Power2.easeOut});
		promiseTL.to( $promiseText, 1 , {css:{opacity:0}, className:'blur', ease:Power2.easeOut}, '-=14');

		//this timeline controls the map animations
		mapTL.from( $mapOutline, 5 , {drawSVG:0}, '+=3');
		mapTL.from( $mapBg, 2 , {opacity:0},'-=1');
		mapTL.staggerFrom( $gentrified, 2 , {opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2, '-=1');
		mapTL.staggerFrom( $moderate, 2 , {opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2, '-=5');
		mapTL.staggerFrom( $intense, 2 , {opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2, '-=5');
		//this timeline disables the user from changing the background position on hover
		promiseTL.to( $problem, 1 , {css:{alpha:0, display:'none'}, ease:Power2.easeOut}, '-=16');
		disableTL.set( $splitBlocker, {css:{display:'inherit'}}, '-=3');
		$promiseContent.removeClass('is-inactive');

		contentTL.fromTo($prom1, .00001 , {alpha:0}, {className:'fadeBlurUp2'}, '-=4');
		contentTL.set($prom1, {alpha:1},"-=2");
		contentTL.fromTo($prom2, .00001 , {alpha:0}, {className:'fadeBlurUp2'},'+=2.25');
		contentTL.set($prom2, {alpha:1});
		contentTL.fromTo($prom3, .00001 , {alpha:0}, {className:'fadeBlurUp2'},'+=3.25');
		contentTL.set($prom3, {alpha:1});
		contentTL.fromTo($promCTA, .00001 , {alpha:0}, {className:'fadeBlurUp2'}, '+=5.5');
		contentTL.to($promCTA, 2 , {css:{marginTop:'-100px'}}, '-=1');
		contentTL.set($promCTA, {alpha:1});
		contentTL.to( $promP, 2, {alpha:0, css:{marginTop:'20px', opacity:0}, className:'blur', ease:Power2.easeOut});
	})
});