import Swiper from 'swiper/bundle';

//? section-top--swiper
new Swiper('.section-top--swiper', {
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

// //передача контролю управління SwiperWallpaperCollection & SwiperWallpaperCollectionThumbs
// SwiperWallpaperCollection.controller.control = SwiperWallpaperCollectionThumbs;
// SwiperWallpaperCollectionThumbs.controller.control = SwiperWallpaperCollection;
