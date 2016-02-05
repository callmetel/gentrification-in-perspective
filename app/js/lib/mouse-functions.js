$(document).ready(function() {
		var $splitScreen = $('#split-screen') ,
			$promise = $('#promise-screen') ,
			$promiseHead = $('#promise-heading') ,
			$promiseSubHead = $('#promise-subheading') ,
			$problem = $('#problem-screen') ,
			$problemHead = $('#problem-heading') ,
			$problemSubHead = $('#problem-subheading') ;

	function activateHover(){
		
		// $promise.mouseenter(function() {
		// 	$problem.addClass('blurOut');
		// 	$problem.addClass('moveRight');
		// 	$promise.removeClass('blurOut');
		// 	$promise.removeClass('moveRight');
		// 	$promise.addClass('blurBackIn');
		// 	$promise.addClass('moveBackLeft');
		// });

		$problem.mouseenter(function() {
			$promise.addClass('blurOut');
			$problem.removeClass('blurOut');
			$problem.addClass('moveLeft');
			$problem.addClass('moveBackRight');
		});

	}

	setTimeout(activateHover, 10000);
		
});
