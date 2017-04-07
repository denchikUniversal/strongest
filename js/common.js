$(document).ready(function() {

	$("#main-carousel").slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 700,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 7000
	});

	$('.btn-next').on('click',function(){ $('#main-carousel').slick('slickNext'); });
	$('.btn-prev').on('click',function(){ $('#main-carousel').slick('slickPrev'); });

	$('.main-mnu-button').click(function(){
		$(this).next().slideToggle();
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});