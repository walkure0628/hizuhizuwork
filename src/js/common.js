$(function() {
	$('.main-box__lnk-pct img').delay(700).queue(function(next) {
		$(this).addClass('is-active');
		next();
	});
	$(window).on('load scroll resize', function() {
		$('.animate-fadein').each(function() {
			var getHeight = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > getHeight - windowHeight + windowHeight / 5) {
				$('.concept-main-scroll').addClass('animate-hidden');
				$(this).addClass('is-active');
			}
		});
		$('.art-skill__column_star').each(function() {
			var getHeight = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > getHeight - windowHeight + windowHeight / 5) {
				$(this).addClass('is-active');
			}
		});
		$('.art-career__column').each(function() {
			var getHeight = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			var delaySpeed = 200;
        	var fadeSpeed = 1000;
			if (scroll > getHeight - windowHeight + windowHeight / 3) {
				$(this).find('li').each(function(i){
					$(this).delay(i*(delaySpeed)).queue(function(next) {
						$(this).addClass('is-active');
						next();
					});
				});
			}
		});
	});
	var task_delay = 0;
	$('a[href^="#"]').on('click',function() {
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		if (task_delay == 1) return false;
		$("html, body").animate({scrollTop:position}, speed);
		task_delay = 1;
		setTimeout(function() { task_delay = 0; }, 500);
		return false;
	});
	$(window).on('load scroll', function() {
    var value = $(window).scrollTop();
    if ( value >= 1 ) {
 		$('.fixed').addClass('is-active');
    } else {
	     $('.fixed').removeClass('is-active');
    }
  });
});