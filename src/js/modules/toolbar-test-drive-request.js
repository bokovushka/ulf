import $ from 'jquery';

let lastScrollTop = 15;
let ticking = false;

$(window).scroll(function () {
	if (!ticking) {
		window.requestAnimationFrame(function () {
			let st = $(window).scrollTop();

			if ($(window).width() < 768) {
				if (st > lastScrollTop) {
					$(".toolbar-test-drive-request").removeClass("--show").addClass("--hide");
				} else if (st <= 0) {
					// Якщо прокрутили до самого верху сторінки
					$(".toolbar-test-drive-request").removeClass("--hide").addClass("--show");
				} else {
					$(".toolbar-test-drive-request").removeClass("--hide").addClass("--show");
				}
			}

			lastScrollTop = Math.max(st, 0);
			ticking = false;
		});
		ticking = true;
	}
});
