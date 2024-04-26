import $ from 'jquery';

let lastScrollTop = 0;

$(window).scroll(function (event) {
	let st = $(this).scrollTop();
	if ($(window).width() < 768) {
		if (st > lastScrollTop) {
			$(".toolbar-fixed").removeClass("--show").addClass("--hide");
		} else {
			$(".toolbar-fixed").removeClass("--hide").addClass("--show");
		}
	}
	lastScrollTop = st;
});
