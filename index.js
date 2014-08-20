$(document).ready(function(){


	// setTimeout(function(){
	// 	$('.sec1').addClass('sec1In');
	// },500);

	// setTimeout(function(){
	// 	$('.logoContain').addClass('logoContainIn');
	// },500);





	$(".sec1").delay(250).animate({"opacity": "1"}, 1);
	$(".logoContain").delay(1000).animate({"opacity": "1", "width":"910px"}, 1);




	var scrolled = $(window).scrollTop();

	function parallaxContent(content, adjuster, inertia){
    	$(content).css('margin-top', -((scrolled + adjuster) * inertia) + 'px');
    };


    $(window).scroll(function(){
    	scrolled = $(window).scrollTop();
    	parallaxContent('.logoContain', 0, -0.57);
    	if (scrolled > ($('.sec2').offset().top-200)) {
    		$('.headContain').addClass('headContainDark');
    	}
	});












})