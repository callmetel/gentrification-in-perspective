$(document).ready(function() {
	
	var $problem = $('#problem-screen'),
		$promise = $('#promise-screen'),
		$splitBlocker = $('#split-blocker'),
		$splitScreen = $('#split-screen'),
		$problemText = $('#problem-text') ,
		$problemHead = $('#problem-heading') ,
		$problemSubHead = $('#problem-subheading'),
		problemTL = new TimelineMax(),
		disableTL = new TimelineLite();

	$problem.on('click', function(){
		problemTL.to( $splitScreen, .0000001 , {css:{backgroundPosition:'49% 90%'}, ease:Power2.easeOut});
		$splitScreen.removeClass('blur-right');

		problemTL.to( $splitScreen, 7 , {css:{backgroundPosition:'32% 90%'}, ease:Power2.easeOut});
		problemTL.to( $problemText, 7 , {css:{left:+window.innerWidth, opacity:0}, className:'blur', ease:Power2.easeOut}, '-=7');
		
		disableTL.to( $promise, 1 , {css:{alpha:0, display:'none'}, ease:Power2.easeOut});
		disableTL.to( $splitBlocker, .000001 , {css:{display:'inherit'}, ease:Power2.easeOut}, '-=3');
	})

});