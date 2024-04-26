import $ from 'jquery';

let lastScrollTop = 0;

$(window).scroll(function (event) {
	let st = $(this).scrollTop();

	if ($(window).width() < 768) {
		if (st > lastScrollTop) {
			$(".toolbar-test-drive-request").removeClass("--show").addClass("--hide");
		} else {
			$(".toolbar-test-drive-request").removeClass("--hide").addClass("--show");
		}
	}
	lastScrollTop = st;
});