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

	$('.mainBannerSlider').slick({
		autoplay: true,
		autoplaySpeed: 3500,
		pauseOnHover: false,
		pauseOnFocus: false,
		arrows: false,
		dots: false,
		infinite: true,
		speed: 700,
		cssEase: 'cubic-bezier(.22, .61, .36, 1)',
		waitForAnimate: false,
		swipeToSlide: true,
		touchThreshold: 8
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

	// Яндекс карта

	var $maps = $("#map");

	if ($maps.length > 0) {
		var center = [56.31230006843377, 43.99366149999997];

		function createMap(mapId) {
			var map = new ymaps.Map(mapId, {
				center: center,
				zoom: 12,
			});

			var placemark = new ymaps.Placemark(
				center,
				{},
				{
					iconLayout: "default#image",
					iconImageHref: "/images/svg/marker.svg",
					iconImageSize: [40, 40],
					iconImageOffset: [-19, -44],
				}
			);

			placemark.events.add("click", function () {
				var url = "https://yandex.ru/maps/-/CXqE4Z0y";
				window.open(url, "_blank");
			});

			map.controls.remove("geolocationControl");
			map.controls.remove("searchControl");
			map.controls.remove("trafficControl");
			map.controls.remove("typeSelector");
			map.controls.remove("fullscreenControl");
			map.controls.remove("zoomControl");
			map.controls.remove("rulerControl");

			map.geoObjects.add(placemark);
		}

		ymaps.ready(function () {
			createMap("map");
		});
	}
});