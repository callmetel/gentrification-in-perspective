$(document).ready(function() {

	var $promise = $('#promise-screen'),
		$problem = $('#problem-screen'),
		$splitBlocker = $('#split-blocker'),
		$splitScreen = $('#split-screen'),
		$promiseText = $('#promise-text') ,
		$promiseHead = $('#promise-heading') ,
		$promiseSubHead = $('#promise-subheading'),
		promiseTL = new TimelineMax(),
		disableTL = new TimelineLite();

	$promise.on('click', function(){
		promiseTL.to( $splitScreen, .0000001 , {css:{backgroundPosition:'53% 90%'}, ease:Power2.easeOut});
		$splitScreen.removeClass('blur-left');

		promiseTL.to( $splitScreen, 7 , {css:{backgroundPosition:'70% 90%'}, ease:Power2.easeOut});
		promiseTL.to( $promiseText, 7 , {css:{right:+window.innerWidth, opacity:0}, className:'blur', ease:Power2.easeOut}, '-=7');
		
		disableTL.to( $problem, 1 , {css:{alpha:0, display:'none'}, ease:Power2.easeOut});
		disableTL.to( $splitBlocker, .000001 , {css:{display:'inherit'}, ease:Power2.easeOut}, '-=3');
	})
});