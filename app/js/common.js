$(function() {
// Easing and active link block start
$('.scroll').on('click', function () {
	let el = $(this).attr("href");

	if (el !== undefined && el !== '') {
		$('html, body').animate({
			scrollTop: $(el).offset().top
		}, 1500, 'easeInOutQuint');
	}
	return false;
});
// Easing and active link block end
//Slick slider start
$('.header-slider').slick({
	arrows: false,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
});
//Slick slider end
});
