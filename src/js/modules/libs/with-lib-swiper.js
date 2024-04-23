import Swiper from 'swiper/bundle';

//? section-top--swiper
new Swiper('.section-top--swiper', {
	slidesPerView: 7.5,
	spaceBetween: 16,
	loop: true,
	speed: 4000,
	autoplay: {
		enabled: true,
		delay: 1,
		// disableOnInteraction: false,
	},
	centeredSlides: true,
	allowTouchMove: false,
	breakpoints: {
		1400: {
		},
		1200: {
			slidesPerView: 5.5,
		},
		1024: {
			slidesPerView: 4.5,
		},
		768: {
			slidesPerView: 3.5,
		},
		0: {
			slidesPerView: 2.2,
		}
	},
});

//? gallery-car-thumbs--swiper
var SwiperWallpaperCollectionThumbs = new Swiper(".gallery-car-thumbs--swiper", {
	grabCursor: true,
	breakpoints: {
		1200: {
			slidesPerView: 6.4,
			spaceBetween: 25,
		},
		1024: {
			slidesPerView: 5.5,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 3.5,
			spaceBetween: 15,
		},
		575: {
			slidesPerView: 3.3,
			spaceBetween: 10,
		}
	},
})

//? gallery-car--swiper
new Swiper(".gallery-car--swiper", {
	grabCursor: true,
	slidesPerView: 1,
	loop: true,
	breakpoints: {
		1200: {
			spaceBetween: 25,
		},
		576: {
			spaceBetween: 20,
		},
		0: {
		}
	},
	pagination: {
		el: ".gallery-car--swiper .swiper-pagination",
		clickable: true,
	},
	thumbs: {
		swiper: SwiperWallpaperCollectionThumbs,
	}
})

