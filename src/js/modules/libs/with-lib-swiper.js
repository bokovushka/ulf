import { gsap } from "gsap";
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



//story-cube
new Swiper(".story-cube--swiper", {
	speed: 1000, // Adjust the speed of the transition as needed
	effect: 'cube', // Set the effect to 'cube'
	cubeEffect: {
		slideShadows: true, // Enable slide shadows
		shadow: true, // Enable shadows on the cube faces
		shadowOffset: 20, // Adjust the shadow offset
		shadowScale: 0.94 // Adjust the shadow scale
	},
	// Other options remain unchanged
	watchSlidesProgress: true,
	loop: true,
	autoplay: {
		delay: 15000,
		disableOnInteraction: false
	},
	slidesPerView: 1,
	navigation: {
		nextEl: ".story-cube--next",
		prevEl: ".story-cube--prev",
	},
	pagination: {
		el: '.story-cube--pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<div class="' + className + '"> <div class="swiper-pagination-progress"></div> </div>';
		}
	},
	on: {
		autoplayTimeLeft(swiper, time, progress) {
			let currentSlide = document.querySelectorAll('.story-cube--swiper .swiper-slide')[swiper.activeIndex]
			let currentBullet = document.querySelectorAll('.story-cube--swiper .swiper-pagination-progress')[swiper.realIndex]
			let fullTime = currentSlide.dataset.swiperAutoplay ? parseInt(currentSlide.dataset.swiperAutoplay) : swiper.params.autoplay.delay;

			let percentage = Math.min(Math.max(parseFloat(((fullTime - time) * 100 / fullTime).toFixed(1)), 0), 100) + '%';

			gsap.set(currentBullet, { width: percentage });
		},
		transitionEnd(swiper) {
			let allBullets = $('.story-cube--swiper .swiper-pagination-progress');
			let bulletsBefore = allBullets.slice(0, swiper.realIndex);
			let bulletsAfter = allBullets.slice(swiper.realIndex, allBullets.length);
			if (bulletsBefore.length) { gsap.set(bulletsBefore, { width: '100%' }) }
			if (bulletsAfter.length) { gsap.set(bulletsAfter, { width: '0%' }) }

			let activeSlide = document.querySelectorAll('.story-cube--swiper .swiper-slide')[swiper.realIndex];
			if (activeSlide.querySelector('video')) {
				activeSlide.querySelector('video').currentTime = 0;
			}
		},
	}
});
