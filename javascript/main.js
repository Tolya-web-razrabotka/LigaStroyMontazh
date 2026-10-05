$(document).ready(function () {
	$('.sliderTreeOsTrack').slick({
		autoplay: false,
		autoplaySpeed: 3500,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		swipeToSlide: true,
		variableWidth: true,
		arrows: false,
		infinite: true,
		speed: 750,
		fade: true,
		easing: 'easeInOutQuart',
		slide: '.slideTOT'
	});

	var $partnersSlider = $('.partnersSlider');
	var $partnersBar = $('.partnersProgressBar');
	function partnersProgress(slick, current) {
		var pages = Math.ceil(slick.slideCount / slick.options.slidesToShow);
		var page = Math.ceil(current / slick.options.slidesToScroll);
		$partnersBar.css({ width: 100 / pages + '%', left: 100 / pages * page + '%' });
	}
	$partnersSlider.on('init', function (e, slick) { partnersProgress(slick, 0); });
	$partnersSlider.on('beforeChange', function (e, slick, current, next) { partnersProgress(slick, next); });
	$partnersSlider.slick({
		rows: 2,
		slidesPerRow: 1,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: false,
		infinite: false,
		speed: 500
	});
});