$(document).ready(function(){


	// setTimeout(function(){
	// 	$('.sec1').addClass('sec1In');
	// },500);

	// setTimeout(function(){
	// 	$('.logoContain').addClass('logoContainIn');
	// },500);





	$(".sec1").delay(250).animate({"opacity": "1"}, 1);
	$(".logoContain").delay(1000).animate({"opacity": "1", "width":"910px"}, 1);




	var screenTop = $(window).scrollTop();

	function parallaxContent(content, adjuster, inertia){
    	var scrolled = $(window).scrollTop();
    	$(content).css('margin-top', -((scrolled + adjuster) * inertia) + 'px');
    };


    $(window).scroll(function(e){
    	parallaxContent('.logoContain', 0, -0.57);
	});













})