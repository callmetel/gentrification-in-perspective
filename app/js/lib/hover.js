$(document).ready(function() {
		var //$splitScreen = $('#split-screen') ,
			//$promise = $('#promise-screen') ,
			$promise = $('#promise-nav-link') ,
			$blurOverRight = $('.blur-overlay-right') ,
			$blurOverLeft = $('.blur-overlay-left') ,
			$blurLeft = $('.blur-left'),
			$blurRight = $('.blur-right'),
			//$problem = $('#problem-screen');
			$problem = $('#problem-nav-link');

		setTimeout(function(){
		      $('#main-blocker').remove();
		 }, 12000);	

		function problemEnter(){
		//	$splitScreen.addClass('blur-right');
		//	$splitScreen.removeClass('blur-left');
			$promise.addClass('blur-out');
			$promise.removeClass('blur-in');
			$problem.addClass('blur-in');
		}
		$problem.mouseenter( problemEnter );

		function promiseEnter(){
		//	$splitScreen.addClass('blur-left');
		//	$splitScreen.removeClass('blur-right');
			$problem.addClass('blur-out');
			$problem.removeClass('blur-in');
			$promise.addClass('blur-in');
		}
		$promise.mouseenter( promiseEnter );

});
