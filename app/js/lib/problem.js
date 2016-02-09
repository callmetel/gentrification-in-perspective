$(document).ready(function() {
	
	var intro = $('#intro-screen') ,
		$problem = $('#problem-screen'),
		$promise = $('#promise-screen'),
		$splitBlocker = $('#split-blocker'),
		$splitScreen = $('#split-screen'),
		$problemText = $('#problem-text') ,
		$problemContent = $('#problem-content'),
		$prob1 = $('#prob-text-1'),
		$prob2 = $('#prob-text-2'),
		$prob3 = $('#prob-text-3'),
		$probCTA = $('#prob-cta'),
		problemTL = new TimelineMax(),
		contentTL = new TimelineMax(),
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
		contentTL.fromTo($prob2, .00001 , {alpha:0}, {className:'fadeBlurUp2'},'+=2.5');
		contentTL.set($prob2, {alpha:1});
		contentTL.fromTo($prob3, .00001 , {alpha:0}, {className:'fadeBlurUp2'},'+=2.5');
		contentTL.set($prob3, {alpha:1});
		
	})

});