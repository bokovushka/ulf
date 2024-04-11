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

//? articles-preview--swiper
var ArticlesPreviewSwiper = new Swiper('.articles-preview--swiper', {
	slidesPerView: 3,
	spaceBetween: 24,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	speed: 800,
	grabCursor: true,
	navigation: {
		nextEl: ".articles-preview .swiper-buttons .button-slider-next",
		prevEl: ".articles-preview .swiper-buttons .button-slider-prev",
	},
	breakpoints: {
		1024: {
		},
		640: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
		}
	},
});

//? articles-preview-two--swiper
var ArticlesPreviewTwoSwiper = new Swiper('.articles-preview-two--swiper', {
	slidesPerView: 3,
	spaceBetween: 24,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	speed: 800,
	grabCursor: true,
	navigation: {
		nextEl: ".articles-preview .swiper-buttons .button-slider-next",
		prevEl: ".articles-preview .swiper-buttons .button-slider-prev",
	},
	breakpoints: {
		1024: {
		},
		768: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
			grid: {
				rows: 3,
				fill: "row",
			},
			autoplay: false,
			allowTouchMove: false,
		}
	},
});

//? reviews-preview
var ReviewsPreviewSwiper = new Swiper('.reviews-preview--swiper', {
	slidesPerView: 3,
	spaceBetween: 24,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	speed: 800,
	grabCursor: true,
	navigation: {
		nextEl: ".reviews-preview .swiper-buttons .button-slider-next",
		prevEl: ".reviews-preview .swiper-buttons .button-slider-prev",
	},
	breakpoints: {
		1024: {
		},
		640: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
		}
	},
});

//? натиск по картці відгука зупиняє автопрокрутку
$(".reviews-preview--swiper .card-link-popup").on("click", function () {
	ReviewsPreviewSwiper.autoplay.stop();
});

//? натиск по кнопці закриття модального вікна запускає автопрокрутку
$(".popup-reviews-preview-card .close").on("click", function () {
	ReviewsPreviewSwiper.autoplay.start();
});

//? натиск поза областю модального вікна запускає автопрокрутку
$(document).mouseup(function (e) {
	if (!$(".popup-reviews-preview-card .modal-content").is(e.target) // если клик был не по нашему блоку
		&& $(".popup-reviews-preview-card .modal-content").has(e.target).length === 0) {
		ReviewsPreviewSwiper.autoplay.start();
	}
});

//? при наведені
// let sliderReviewsPreview = document.querySelector('.reviews-preview--swiper');
//? //при наведені зупиняє
// sliderReviewsPreview.addEventListener("mouseenter", function (e) {
// 	ReviewsPreviewSwiper.autoplay.stop();
// });
//? покидає область слайду запускає автопрокрутку
// sliderReviewsPreview.addEventListener("mouseleave", function (e) {
// 	ReviewsPreviewSwiper.autoplay.start();
// });


//? about-packages-preview--swiper
var AboutPackagesPreviewSwiper = new Swiper('.about-packages-preview--swiper', {
	grabCursor: true,
	spaceBetween: 24,
	slidesPerView: 4,
	navigation: {
		nextEl: ".about-packages-preview .swiper-buttons .button-slider-next",
		prevEl: ".about-packages-preview .swiper-buttons .button-slider-prev",
	},
	breakpoints: {
		1200: {
		},
		1024: {
			slidesPerView: 2.3,
		},
		768: {
			slidesPerView: 1.8,
		},
		576: {
			slidesPerView: 1.5,
		},
		0: {
			slidesPerView: 1,
			grid: {
				rows: 4,
				fill: "row",
			},
		}
	},
});


//? about-program-preview--swiper
var AboutProgramPreviewSwiper = new Swiper('.about-program-preview--swiper', {
	grabCursor: true,
	spaceBetween: 24,
	slidesPerView: 3,
	navigation: {
		nextEl: ".about-program-preview .swiper-buttons .button-slider-next",
		prevEl: ".about-program-preview .swiper-buttons .button-slider-prev",
	},
	breakpoints: {
		1200: {
		},
		1024: {
			slidesPerView: 2.3,
		},
		768: {
			slidesPerView: 1.8,
		},
		576: {
			slidesPerView: 1.5,
		},
		0: {
			slidesPerView: 1,
			grid: {
				rows: 3,
				fill: "row",
			},
		}
	},
});

//? news-category--swiper //news.html
var NewsCategorySwiper = new Swiper('.news-category--swiper', {
	grabCursor: true,
	slidesPerView: "auto",
	navigation: {
		nextEl: ".news .swiper-buttons .button-slider-next",
		prevEl: ".news .swiper-buttons .button-slider-prev",
	},
});

//? news-category--swiper //news.html
var PartnersCategorySwiper = new Swiper('.partners-category--swiper', {
	grabCursor: true,
	slidesPerView: "auto",
	navigation: {
		nextEl: ".partners-tablist-nav .swiper-buttons .button-slider-next",
		prevEl: ".partners-tablist-nav .swiper-buttons .button-slider-prev",
	},
});