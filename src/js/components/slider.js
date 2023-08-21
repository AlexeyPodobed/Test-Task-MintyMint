import Swiper from 'swiper/bundle';

export function sliderInit() {
	const swiper = new Swiper('.js-slider', {
        speed: 1000,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			375: {
				slidesPerView: 1,
				centeredSlides: true,
			},
			768: {
				centeredSlides: false,
			},
		},
	});
}
