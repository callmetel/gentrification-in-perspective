$(document).ready(function() {
	
	var $problem = $('#problem-screen'),
		$promise = $('#promise-screen'),
		$problemIntro = $('#problem-intro'),
		$splitBlocker = $('#split-blocker'),
		$splitScreen = $('#split-screen'),
		$problemText = $('#problem-text') ,
		$problemContent = $('#problem-content'),
		$prob1 = $('#prob-text-1'),
		$prob2 = $('#prob-text-2'),
		$prob3 = $('#prob-text-3'),
		$probCTA = $('#prob-cta'),
		$probP= $('.prob-p'),
		$outline = $('.btn-outline'),
		$triangle = $('.btn-triangle'),
		$streetview = $('.street-view-container'),
		problemTL = new TimelineMax(),
		contentTL = new TimelineMax(),
		streetTL = new TimelineMax(),
		disableTL = new TimelineLite();

	$problem.on('click', function(){
		//the problem timeline controls the background animation of the section
		problemTL.set( $splitScreen, {css:{backgroundPosition:'49% 90%'}});
		$splitScreen.removeClass('blur-right');

		problemTL.to( $splitScreen, 14 , {css:{backgroundPosition:'32% 0%'}, ease:Power1.easeOut});
		problemTL.to( $problemText, 1 , {css:{opacity:0}, className:'blur', ease:Power2.easeOut}, '-=14');
		
		//this timeline disables the user from changing the background position on hover
		problemTL.to( $promise, 1 , {css:{alpha:0, display:'none'}, ease:Power2.easeOut}, '-=16');
		disableTL.set( $splitBlocker, {css:{display:'inherit'}}, '-=3');
		$problemContent.removeClass('is-inactive');

		contentTL.set($probCTA, {alpha:0});
		contentTL.fromTo($prob1, .00001 , {alpha:0}, {className:'fadeBlurUp2'}, '-=2');
		contentTL.set($prob1, {alpha:1});
		contentTL.fromTo($prob2, .00001 , {alpha:0}, {className:'fadeBlurUp2'},'+=2.25');
		contentTL.set($prob2, {alpha:1});
		contentTL.fromTo($prob3, .00001 , {alpha:0}, {className:'fadeBlurUp2'},'+=2.25');
		contentTL.set($prob3, {alpha:1});
		contentTL.fromTo($probCTA, .00001 , {alpha:0}, {className:'fadeBlurUp2'}, '+=4');
		contentTL.to($probCTA, 2 , {css:{marginTop:'-100px'}}, '-=1');
		contentTL.set($probCTA, {alpha:1});
		contentTL.to( $probP, 2, {alpha:0, css:{marginTop:'20px', opacity:0}, className:'blur', ease:Power2.easeOut});
		contentTL.from( $outline , 2, {drawSVG:0, ease:Power2.easeOut},'-=1');
		contentTL.from( $triangle , 2, {opacity:0, ease:Power2.easeOut},'-=.5');

		
	});

	$triangle.on('click', function(){
		$streetview.removeClass('is-hidden');
		streetTL.to($problemIntro, 3, {css:{opacity:0, marginTop:'-20px', height:0}, className:'blur', ease:Power2.easeOut});
		streetTL.to( $splitScreen, 8 , {css:{backgroundPosition:'32% 30%'}, ease:Power1.easeOut}, "-=3");
		streetTL.fromTo( $streetview, 4, {alpha:0, ease:Power1.easeOut}, {alpha:1, ease:Power1.easeOut}, "-=6");
		streetTL.fromTo( $('#drag-cta'), .00001, {alpha:0}, {className:'fadeBlurUp2'}, "-=6");
		streetTL.set( $('#drag-cta'), {alpha:1},"-=3.2");
		streetTL.from( $('#drag-bar-container'), 2, {height:0, ease:Power1.easeOut}, "-=3");
		streetTL.fromTo( $('#drag-arrow'), 1, {opacity:0}, {opacity:1, className: 'pulse2'},"-=1");
		streetTL.to( $('#drag-cta'), 3, {alpha:0, css:{marginTop:'20px', opacity:0}, className:'blur', ease:Power2.easeOut},"+=5");
	});

});