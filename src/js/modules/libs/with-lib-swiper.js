import Swiper from 'swiper/bundle';

//? section-top--swiper
var SectionTopSwiper = new Swiper('.section-top--swiper', {
	slidesPerView: 7.5,
	spaceBetween: 16,
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	speed: 800,
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

//loan-leasing
var SwiperWallpaperCollectionThumbs = new Swiper(".gallery-car-thumbs--swiper", {
	spaceBetween: 25,
	// grabCursor: true,
	// loop: true,
	// watchSlidesProgress: true,
	breakpoints: {
		992: {
			slidesPerView: 6.4,
		},
		640: {
			slidesPerView: 2,
		},
		360: {
			slidesPerView: 1.15,
		}
	},
})

var SwiperWallpaperCollection = new Swiper(".gallery-car--swiper", {
	spaceBetween: 25,
	// grabCursor: true,
	// loop: true,
	breakpoints: {
		1024: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 3,
		},
		640: {
			slidesPerView: 2,
		},
		360: {
			slidesPerView: 1.15,
		}
	},
	thumbs: {
		swiper: SwiperWallpaperCollectionThumbs,
	},
	navigation: {
		prevEl: ".loan-leasing .leasing-swiper__buttons .icon-u_arrow-left",
		nextEl: ".loan-leasing .leasing-swiper__buttons .icon-u_arrow-right"
	},
})

// //передача контролю управління SwiperWallpaperCollection & SwiperWallpaperCollectionThumbs
// SwiperWallpaperCollection.controller.control = SwiperWallpaperCollectionThumbs;
// SwiperWallpaperCollectionThumbs.controller.control = SwiperWallpaperCollection;
