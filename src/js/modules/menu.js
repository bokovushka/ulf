let lastScrollTop = 0;

$(window).scroll(function (event) {
	let st = $(this).scrollTop();
	let headerThreshold = 45;
	let mainThreshold = 45; //122

	if ($(window).width() < 1200 && $(window).width() >= 1024) {
		headerThreshold = 61;
		mainThreshold = 61;//138
	} else if ($(window).width() < 1024 && $(window).width() >= 768) {
		headerThreshold = 45;
		mainThreshold = 45;//109
	} else if ($(window).width() < 768) {
		headerThreshold = 0;
		mainThreshold = 0;
	}

	// if ($(window).width() >= 768) {
	// 	// Perform header modifications only if window width is 768 or greater
	// 	if (st > lastScrollTop && $(window).scrollTop() >= mainThreshold) {
	// 		$(".header-main").removeClass("header--show").addClass("header--hide");
	// 		$(".header-top").removeClass("header--show").addClass("header--hide");
	// 	} else {
	// 		$(".header-main").removeClass("header--hide");
	// 		$(".header-top").removeClass("header--hide");
	// 		if ($(window).scrollTop() <= headerThreshold) {
	// 			$(".header-main").removeClass("header--show");
	// 			$("main").removeClass("show");
	// 			$(".header-top").removeClass("header--show");
	// 		} else {
	// 			$(".header-main").addClass("header--show");
	// 			$("main").addClass("show");
	// 			$(".header-top").addClass("header--show");
	// 		}
	// 	}
	// }
	lastScrollTop = st;
});

