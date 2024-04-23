import Plyr from 'plyr';

// Перевірка наявності аудіоплеєрів
const audioPlayers = document.querySelectorAll('.js-player');
if (audioPlayers.length > 0) {
	// Створення аудіоплеєрів з використанням Plyr та отримання посилань на них
	const players = Plyr.setup('.js-player', {
		// Параметри конфігурації
		clickToPlay: false
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


// const videoPlayers = document.querySelectorAll('.specific-player');
// const playPauseButtons = document.querySelectorAll('.btn-video-play-pause');

// // Перевіряємо, чи є принаймні один елемент з класом `.specific-player` і один з класом `.btn-video-play-pause` на сторінці
// if (videoPlayers.length > 0 && playPauseButtons.length > 0) {
// 	videoPlayers.forEach((videoPlayer, index) => {
// 		const playPauseButton = playPauseButtons[index];
// 		if (videoPlayer && playPauseButton) {
// 			const plyrVideoPlayer = videoPlayer.plyr;

// 			playPauseButton.addEventListener('click', () => {
// 				if (plyrVideoPlayer.paused) {
// 					plyrVideoPlayer.play();
// 					playPauseButton.classList.add('active');
// 				} else {
// 					plyrVideoPlayer.pause();
// 					playPauseButton.classList.remove('active');
// 				}
// 			});

// 			plyrVideoPlayer.on('ended', () => {
// 				playPauseButton.classList.remove('active');
// 			});

// 			videoPlayer.addEventListener('click', (event) => {
// 				event.stopPropagation();
// 			});

// 			// Перевіряємо, чи відео на паузі, і видаляємо клас "active" з кнопки, якщо він присутній
// 			plyrVideoPlayer.on('pause', () => {
// 				if (!plyrVideoPlayer.playing) {
// 					playPauseButton.classList.remove('active');
// 				}
// 			});
// 		}
// 	});
// }





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
