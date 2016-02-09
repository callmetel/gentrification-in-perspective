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
		//the promise timeline controls the background animation of the section
		promiseTL.set( $splitScreen, {css:{backgroundPosition:'53% 90%'}});
		$splitScreen.removeClass('blur-left');

		promiseTL.to( $splitScreen, 7 , {css:{backgroundPosition:'70% 90%'}, ease:Power2.easeOut});
		promiseTL.to( $promiseText, 7 , {css:{right:+window.innerWidth, opacity:0}, className:'blur', ease:Power2.easeOut}, '-=7');
		
		//this timeline disables the user from changing the background position on hover
		disableTL.to( $problem, 1 , {css:{alpha:0, display:'none'}, ease:Power2.easeOut});
		disableTL.set( $splitBlocker, {css:{display:'inherit'}}, '-=3');
	})
});