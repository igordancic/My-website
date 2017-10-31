jQuery(document).ready(function($) {
	$(window).scroll(function(event) {

		var pos = $(this).scrollTop();
		console.log(pos);

		 if(pos>550){
            $(".navbar").addClass(' navbar navbar-default navbar-fixed-top')
            .css("background-color", "#616161");
            $("ul li a").css("color","white");
            $("#toTop").addClass('icon-angle-up');
		 }
		 else{
		 $(".navbar").removeClass(' navbar-fixed-top').addClass('navbar navbar-default')
		 .css("background-color","transparent");
		  $("ul li a").css("color","#777");
		  $("#toTop").removeClass('icon-angle-up');
		 }

	});



// Smooth Scrolling

$(".navbar a, a[href='#myPage']").click(function() {
	if (this.hash !=="") {
		event.preventDefault();
		var hash = this.hash;

		$("html, body").animate({
			scrollTop:$(hash).offset().top 
		}, 900, function(){
			window.location.hash = hash;
		});
	}

	
});




});