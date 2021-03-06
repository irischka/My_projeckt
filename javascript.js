$(function () {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/larax@ukr.net", 
            method: "POST",
            data: {
                message: $('#name').val(),
                text: $('#text').val(),
                email:$('#e-mail').val(),
                },
            dataType: "json"
        }).done(function() {
            $('form').html('<h3>Дякуємо Вам!</h3>')
        }).fail(function(xhr, err) {
            $('form').html(xhr.statusText);
        });        
    })
});

$(document).ready(function(){

    $(function (){
		$(".p up").hide();

		$(window).scroll(function (){
			if ($(this).scrollTop() > 700){
				$(".p up").fadeIn();
			} else{
				$(".p up").fadeOut();
			}
		});

		$(".p up a").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});
});
