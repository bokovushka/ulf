// import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import { Fancybox } from "@fancyapps/ui";
import Plyr from 'plyr';

// Перевірка наявності аудіоплеєрів
const audioPlayers = document.querySelectorAll('.js-player');
let players; // Змінна players вище оголошується

if (audioPlayers.length > 0) {
	// Створення аудіоплеєрів з використанням Plyr та отримання посилань на них
	players = Plyr.setup('.js-player', {
		// Параметри конфігурації
		// clickToPlay: false
	});

	// Додаємо обробник подій для кожного аудіоплеєра
	players.forEach((player, i) => {
		player.on('play', () => {
			// При відтворенні ставимо решту плеєрів, крім поточного
			players.forEach((otherPlayer, a) => {
				if (a !== i) {
					otherPlayer.pause();
				}
			});
		});
	});
}

// Знаходимо всі контейнери відео, які мають клас .video-wrap--vissible
const videoWraps = document.querySelectorAll('.video-wrap--vissible');

videoWraps.forEach((videoWrap) => {
	// Знаходимо відеоплеєр і кнопку відтворення для поточного контейнера відео
	const videoPlayer = videoWrap.querySelector('.specific-player');
	const playPauseButton = videoWrap.querySelector('.btn-video-play-pause');

	if (videoPlayer && playPauseButton) {
		const plyrVideoPlayer = videoPlayer.plyr;

		playPauseButton.addEventListener('click', () => {
			if (plyrVideoPlayer.paused) {
				plyrVideoPlayer.play();
				playPauseButton.classList.add('active');
			} else {
				plyrVideoPlayer.pause();
				playPauseButton.classList.remove('active');
			}
		});

		plyrVideoPlayer.on('ended', () => {
			playPauseButton.classList.remove('active');
		});

		videoPlayer.addEventListener('click', (event) => {
			event.stopPropagation();
		});

		plyrVideoPlayer.on('pause', () => {
			if (!plyrVideoPlayer.playing) {
				playPauseButton.classList.remove('active');
			}
		});
	}
});


// Функція для зупинки всіх відео
function pauseAllVideos() {
	if (players) { // Перевірка на наявність players
		// Зупиняємо всі аудіоплеєри
		players.forEach(player => {
			player.pause();
		});
	}

	// Зупиняємо всі відеоплеєри
	document.querySelectorAll('.js-player').forEach(videoPlayer => {
		const plyrVideoPlayer = videoPlayer.plyr;
		if (plyrVideoPlayer.playing) {
			plyrVideoPlayer.pause();
			videoPlayer.querySelector('.btn-video-play-pause').classList.remove('active');
		}
	});
}


// Перевизначаємо обробники подій FancyBox всередині того самого контексту
Fancybox.bind('[data-fancybox="scroll-gallery"]', {
	on: {
		// Обробник події, коли відкривається FancyBox
		reveal: function (instance, slide) {
			console.log("FancyBox відкрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли закривається FancyBox
		close: function (instance, slide) {
			console.log("FancyBox закрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли перегортаються слайди
		slideChange: function (instance, current) {
			console.log("Змінено слайд");
			// Якщо тип слайду - відео
			if (current.type === 'video') {
				// Зупиняємо всі відео
				pauseAllVideos();
			}
		}
	},
	Toolbar: {
		display: {
			left: [],
			right: ["iterateZoom", "close"],
		},
	},
	Carousel: {
		Navigation: {
			nextTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
			prevTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
		},
	},
	contentClick: "iterateZoom",
	Images: {
		Panzoom: {
			maxScale: 3,
		},
	},
	Thumbs: {
		type: "classic",
	},
	caption: (fancybox, slide) => {
		const caption = slide.caption || "";

		return `${slide.index + 1} / ${fancybox.carousel?.slides.length} <br /> ${caption}`;
	},
});

//? gallery-car
Fancybox.bind('[data-fancybox="gallery"]', {
	on: {
		// Обробник події, коли відкривається FancyBox
		reveal: function (instance, slide) {
			console.log("FancyBox відкрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли закривається FancyBox
		close: function (instance, slide) {
			console.log("FancyBox закрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли перегортаються слайди
		slideChange: function (instance, current) {
			console.log("Змінено слайд");
			// Якщо тип слайду - відео
			if (current.type === 'video') {
				// Зупиняємо всі відео
				pauseAllVideos();
			}
		}
	},
	Toolbar: {
		items: {
			carName: {
				tpl: `<div class="h4 font-m mb-0 font-weight-bolder text-white">Hyundai Tucson</div>`,
			}
		},
		display: {
			left: ["carName"],
			right: ["iterateZoom", "close"],
		},
	},
	Carousel: {
		Navigation: {
			nextTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
			prevTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
		},
	},
	contentClick: "iterateZoom",
	Images: {
		Panzoom: {
			maxScale: 3,
		},
	},
	Thumbs: false,
	caption: (fancybox, slide) => {
		const caption = slide.caption || "";

		return `${slide.index + 1} / ${fancybox.carousel?.slides.length
			} <br /> ${caption}`;
	},
});

//? [data-fancybox="gallery-scroll"]
Fancybox.bind('[data-fancybox="gallery-scroll"]', {
	on: {
		// Обробник події, коли відкривається FancyBox
		reveal: function (instance, slide) {
			console.log("FancyBox відкрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли закривається FancyBox
		close: function (instance, slide) {
			console.log("FancyBox закрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли перегортаються слайди
		slideChange: function (instance, current) {
			console.log("Змінено слайд");
			// Якщо тип слайду - відео
			if (current.type === 'video') {
				// Зупиняємо всі відео
				pauseAllVideos();
			}
		}
	},
	Toolbar: {
		display: {
			right: ["iterateZoom", "close"],
		},
	},
	Carousel: {
		Navigation: {
			nextTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
			prevTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
		},
	},
	contentClick: "iterateZoom",
	Images: {
		Panzoom: {
			maxScale: 3,
		},
	},
	Thumbs: false,
	caption: (fancybox, slide) => {
		const caption = slide.caption || "";

		return `${slide.index + 1} / ${fancybox.carousel?.slides.length
			} <br /> ${caption}`;
	},
});

//? [data-fancybox="specific-player"]
Fancybox.bind('[data-fancybox="specific-player"]', {
	on: {
		// Обробник події, коли відкривається FancyBox
		reveal: function (instance, slide) {
			console.log("FancyBox відкрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли закривається FancyBox
		close: function (instance, slide) {
			console.log("FancyBox закрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли перегортаються слайди
		slideChange: function (instance, current) {
			console.log("Змінено слайд");
			// Якщо тип слайду - відео
			if (current.type === 'video') {
				// Зупиняємо всі відео
				pauseAllVideos();
			}
		}
	},
	Toolbar: {
		display: {
			right: ["close"],
		},
	},
	Thumbs: false,
});

//? [data-fancybox="specific-player-mob"]
Fancybox.bind('[data-fancybox="specific-player-mob"]', {
	on: {
		// Обробник події, коли відкривається FancyBox
		reveal: function (instance, slide) {
			console.log("FancyBox відкрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли закривається FancyBox
		close: function (instance, slide) {
			console.log("FancyBox закрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли перегортаються слайди
		slideChange: function (instance, current) {
			console.log("Змінено слайд");
			// Якщо тип слайду - відео
			if (current.type === 'video') {
				// Зупиняємо всі відео
				pauseAllVideos();
			}
		}
	},
	Toolbar: {
		display: {
			right: ["close"],
		},
	},
	Thumbs: false,
});

//? scroll-gallery
// Fancybox.bind('[data-fancybox="scroll-gallery"]', {
// 	Toolbar: {
// 		display: {
// 			left: [],
// 			right: ["iterateZoom", "close"],
// 		},
// 	},
// 	Carousel: {
// 		Navigation: {
// 			nextTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
// 			prevTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
// 		},
// 	},
// 	contentClick: "iterateZoom",
// 	Images: {
// 		Panzoom: {
// 			maxScale: 3,
// 		},
// 	},
// 	Thumbs: {
// 		type: "classic",
// 	},
// 	caption: (fancybox, slide) => {
// 		const caption = slide.caption || "";

// 		return `${slide.index + 1} / ${fancybox.carousel?.slides.length
// 			} <br /> ${caption}`;
// 	},
// });

//? cube-gallery
Fancybox.bind('[data-fancybox="story-cube-gallery"]', {
	on: {
		// Обробник події, коли відкривається FancyBox
		reveal: function (instance, slide) {
			console.log("FancyBox відкрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли закривається FancyBox
		close: function (instance, slide) {
			console.log("FancyBox закрито");
			// Зупиняємо всі відео
			pauseAllVideos();
		},

		// Обробник події, коли перегортаються слайди
		slideChange: function (instance, current) {
			console.log("Змінено слайд");
			// Якщо тип слайду - відео
			if (current.type === 'video') {
				// Зупиняємо всі відео
				pauseAllVideos();
			}
		}
	},
	Toolbar: {
		display: {
			left: [],
			right: ["iterateZoom", "close"],
		},
	},
	Carousel: {
		Navigation: {
			nextTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
			prevTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
		},
	},
	contentClick: "iterateZoom",
	Images: {
		Panzoom: {
			maxScale: 3,
		},
	},
	Thumbs: {
		type: "classic",
	},
	caption: (fancybox, slide) => {
		const caption = slide.caption || "";

		return `${slide.index + 1} / ${fancybox.carousel?.slides.length
			} <br /> ${caption}`;
	},
});
