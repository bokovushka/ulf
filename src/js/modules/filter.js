import $ from 'jquery';

//? mobile menu lock body
$(document).ready(function () {
	let bodyFilterLock = document.querySelector('body');
	let btnFilter = document.querySelector('.btn-filter');
	let bgBodyFilter = document.querySelector('.popup-bg-body-filter');
	let isMenuFilterEnabled = true;

	btnFilter.addEventListener('click', function (event) {
		if (!isMenuFilterEnabled) {
			event.preventDefault();
		} else {
			bodyFilterLock.classList.add('lock-filter');
			bgBodyFilter.classList.add('open')
			isMenuFilterEnabled = false;
			setTimeout(function () {
				isMenuFilterEnabled = true;
			}, 1000);
		}
	});

	setInterval(function () {
		if ($(bgBodyFilter).hasClass('collapsed')) {
			bodyFilterLock.classList.remove('lock-filter');
			bgBodyFilter.classList.remove('open')
		}
	}, 100);
});

//?  закриття меню поза областю
// $(document).mouseup(function (e) {
// 	if (!$(".sidebar").is(e.target) // если клик был не по нашему блоку
// 		&& $(".sidebar").has(e.target).length === 0) { // и не по его дочерним элементам
// 		$('.popup-bg-body-filter').removeClass("open");
// 		$('body').removeClass("lock-filter");
// 	}
// });

// //? закриття popup-bg-body і мобільного меню при поворотах наприклад на планшетці
// setInterval(function () {
// 	if (window.innerWidth >= 1024) {
// 		if ($(".btn-filter").hasClass("show")) {
// 			$('.btn-filter').click()
// 		}
// 	}
// }, 1000);

