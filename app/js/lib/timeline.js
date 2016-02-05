$(document).ready(function() {


/// Declare Main Timeline Variables
/// ///////////////////////////////////////	
	
	var   	introTL = new TimelineLite() ,
		  	mainTL = new TimelineMax() ,
			intro = $('#intro-screen') ,
			introText = $('#intro-text') ,
			introHead = $('#intro-heading') ,
			introSubHead = $('#intro-subheading') ,
			splitScreen = $('#split-screen') ,
			promise = $('#promise-screen') ,
			promiseHead = $('#promise-heading') ,
			promiseSubHead = $('#promise-subheading') ,
			problem = $('#problem-screen') ,
			problemHead = $('#problem-heading') ,
			problemSubHead = $('#problem-subheading') ;


/// Start Main Timeline Animation
/// ///////////////////////////////////////	 


	// mainTL.set( introHead , {css:{className:'+=fadeBlur'}} );
	// mainTL.set( introSubHead , {css:{className:'+=fadeBlur'}}, '+=1' );
	mainTL.to( introHead , .000001, {alpha:1}, "+=3" );
	mainTL.to( introSubHead , .000001, {alpha:1}, "+=1" );
	mainTL.to( introHead , 1, {alpha:0, y:100}, "+=3.25" );
	mainTL.to( introSubHead , 1, {alpha:0, y:100}, "-=1" );
	mainTL.to( intro, .000001, {css:{display:'none'}});
	mainTL.from( splitScreen , 2, {alpha:0, y:300}, "-=5");
	mainTL.to( promise, .000001, {alpha:1} );
	mainTL.to( problem, .000001, {alpha:1} );

});