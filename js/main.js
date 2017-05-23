// js
$(document).ready(function(){
	$('.btn_menu').click(function(){
		$('.menu ul').slideToggle();
	});
	  $("#owl-example").owlCarousel({
	  	singleItem: true,
	  	navigation: true,
	  	navigationText: false
	  	 });
	
 var mixer = mixitup('.my_wrapp');

	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "../mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;

	});

$("#menu, #top").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1200);

    });

});
