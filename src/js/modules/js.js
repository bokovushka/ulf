import $ from 'jquery';

//? mobile menu lock body
$(document).ready(function () {
	let body_lock = document.querySelector('body');
	let menuBtn = document.querySelector('.navbar-toggler');
	let bgBody = document.querySelector('.popup-bg-body');
	let isMenuEnabled = true;

	menuBtn.addEventListener('click', function (event) {
		if (!isMenuEnabled) {
			event.preventDefault();
		} else {
			body_lock.classList.add('lock');
			bgBody.classList.add('open')
			isMenuEnabled = false;
			setTimeout(function () {
				isMenuEnabled = true;
			}, 1000);
		}
	});

	setInterval(function () {
		if ($(bgBody).hasClass('collapsed')) {
			body_lock.classList.remove('lock');
			bgBody.classList.remove('open')
		}
	}, 100);
});

//?  закриття меню поза областю
$(document).mouseup(function (e) {
	if (!$(".header").is(e.target) // если клик был не по нашему блоку
		&& $(".header").has(e.target).length === 0) { // и не по его дочерним элементам
		$('.popup-bg-body').removeClass("open");
		$('body').removeClass("lock");
	}
});

//? закриття popup-bg-body і мобільного меню при поворотах наприклад на планшетці
setInterval(function () {
	if (window.innerWidth >= 1024) {
		if ($(".navbar-collapse").hasClass("show")) {
			$('.navbar-toggler').click()
		}
	}
}, 1000);



// height = max height
// Оголошення функції setEqualHeight
function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(function () {
		$(this).css('height', 'auto'); // Спочатку встановлюємо автоматичну висоту
		var currentHeight = $(this).height();
		if (currentHeight > tallestcolumn) {
			tallestcolumn = currentHeight;
		}
	});
	columns.height(tallestcolumn);
}

window.addEventListener('resize', (e) => {
	cardResize();
});

window.addEventListener('load', function () {
	setTimeout(() => {
		cardResize();
	}, 500);
}, false);

function cardResize() {

}

$(document).ready(function () {
	setEqualHeight($(".our-fleet-preview--item .name"));
});