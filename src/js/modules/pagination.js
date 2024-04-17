import $ from 'jquery';

$(document).ready(function () {
	// Функція, що додає клас на екранах від 1024 пікселів
	function addClassOnLargeScreens() {
		var windowWidth = $(window).width();
		if (windowWidth >= 1024) {
			$('.our-fleet .our-fleet-search').addClass('content');
		} else {
			$('.our-fleet .our-fleet-search').removeClass('content');
		}
	}

	// Викликати функцію при завантаженні сторінки
	addClassOnLargeScreens();

	// Викликати функцію при зміні розміру вікна
	$(window).resize(function () {
		addClassOnLargeScreens();
	});
});

//? pagination
function getPageList(totalPages, page, maxLength) {
	if (maxLength < 5) throw "maxLength must be at least 5";

	function range(start, end) {
		return Array.from(Array(end - start + 1), (_, i) => i + start);
	}

	var sideWidth = maxLength < 9 ? 1 : 2;
	var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
	var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
	if (totalPages <= maxLength) {
		// no breaks in list
		return range(1, totalPages);
	}
	if (page <= maxLength - sideWidth - 1 - rightWidth) {
		// no break on left of page
		return range(1, maxLength - sideWidth - 1)
			.concat([0])
			.concat(range(totalPages - sideWidth + 1, totalPages));
	}
	if (page >= totalPages - sideWidth - 1 - rightWidth) {
		// no break on right of page
		return range(1, sideWidth)
			.concat([0])
			.concat(
				range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
			);
	}
	// Breaks on both sides
	return range(1, sideWidth)
		.concat([0])
		.concat(range(page - leftWidth, page + rightWidth))
		.concat([0])
		.concat(range(totalPages - sideWidth + 1, totalPages));
}

//? pagination questions
$(function () {
	// Number of items and limits the number of items per page
	var numberOfItems = $("#questions .content").length;

	// var w = screen.width;
	// if (w < '768') {
	// 	var limitPerPage = 6;
	// } else
	// 	if (w < '1024') {
	// 		var limitPerPage = 6;
	// 	}
	// 	else {
	// 		var limitPerPage = 11;
	// 	}

	var limitPerPage = 11;

	// Total pages rounded upwards
	var totalPages = Math.ceil(numberOfItems / limitPerPage);
	// Number of buttons at the top, not counting prev/next,
	// but including the dotted buttons.
	// Must be at least 5:
	var paginationSize = 7;
	var currentPage;

	function showPage(whichPage) {
		if (whichPage < 1 || whichPage > totalPages) return false;
		currentPage = whichPage;
		$("#questions .content")
			.hide()
			.slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
			.show();
		// Replace the navigation items (not prev/next):
		$("#questions .pagination li").slice(1, -1).remove();
		getPageList(totalPages, currentPage, paginationSize).forEach(item => {
			$("<li>")
				.addClass(
					"page-item " +
					(item ? "current-page " : "") +
					(item === currentPage ? "active " : "")
				)
				.append(
					$("<a>")
						.addClass("page-link")
						.attr({
							href: "javascript:void(0)"
						})
						.text(item || "...")
				)
				.insertBefore("#next-page");
		});
		return true;
	}

	// Include the prev/next buttons:
	$("#questions .pagination").append(
		$("<li>").addClass("page-item button-slider-prev").attr({ id: "previous-page" }).append(
			$(`<a><svg><use xlink:href="img/icons/icons.svg#i-arrow-right">`)
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Prev")
		),
		$("<li>").addClass("page-item button-slider-next").attr({ id: "next-page" }).append(
			$(`<a><svg><use xlink:href="img/icons/icons.svg#i-arrow-right">`)
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Next")
		)
	);
	// Show the page links
	$("#questions").show();
	showPage(1);

	// Use event delegation, as these items are recreated later
	$(
		document
	).on("click", "#questions .pagination li.current-page:not(.active)", function () {
		return showPage(+$(this).text());
	});
	$("#questions #next-page").on("click", function () {
		return showPage(currentPage + 1);
	});

	$("#questions #previous-page").on("click", function () {
		return showPage(currentPage - 1);
	});
	// $(".pagination").on("click", function () {
	// 	$("html,body").animate({ scrollTop: 0 }, 0);
	// });
});

//? pagination our-fleet
$(function () {
	// Number of items and limits the number of items per page
	var numberOfItems = $(".our-fleet .content").length;

	var w = screen.width;
	if (w < '768') {
		var limitPerPage = 5;
	} else
		if (w < '1024') {
			var limitPerPage = 8;
		}
		else {
			var limitPerPage = 12;
		}

	// Total pages rounded upwards
	var totalPages = Math.ceil(numberOfItems / limitPerPage);
	// Number of buttons at the top, not counting prev/next,
	// but including the dotted buttons.
	// Must be at least 5:
	var paginationSize = 7;
	var currentPage;

	function showPage(whichPage) {
		if (whichPage < 1 || whichPage > totalPages) return false;
		currentPage = whichPage;
		$(".our-fleet .content")
			.hide()
			.slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
			.show();
		// Replace the navigation items (not prev/next):
		$(".our-fleet .pagination li").slice(1, -1).remove();
		getPageList(totalPages, currentPage, paginationSize).forEach(item => {
			$("<li>")
				.addClass(
					"page-item " +
					(item ? "current-page " : "") +
					(item === currentPage ? "active " : "")
				)
				.append(
					$("<a>")
						.addClass("page-link")
						.attr({
							href: "javascript:void(0)"
						})
						.text(item || "...")
				)
				.insertBefore("#next-page");
		});
		return true;
	}

	// Include the prev/next buttons:
	$(".our-fleet .pagination").append(
		$("<li>").addClass("page-item button-slider-prev").attr({ id: "previous-page" }).append(
			$(`<a><svg><use xlink:href="img/icons/icons.svg#i-arrow-right">`)
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Prev")
		),
		$("<li>").addClass("page-item button-slider-next").attr({ id: "next-page" }).append(
			$(`<a><svg><use xlink:href="img/icons/icons.svg#i-arrow-right">`)
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Next")
		)
	);
	// Show the page links
	$(".our-fleet").show();
	showPage(1);

	// Use event delegation, as these items are recreated later
	$(
		document
	).on("click", ".our-fleet .pagination li.current-page:not(.active)", function () {
		return showPage(+$(this).text());
	});
	$(".our-fleet #next-page").on("click", function () {
		return showPage(currentPage + 1);
	});

	$(".our-fleet #previous-page").on("click", function () {
		return showPage(currentPage - 1);
	});
	// $(".pagination").on("click", function () {
	// 	$("html,body").animate({ scrollTop: 0 }, 0);
	// });

	$(".our-fleet .btn-show-more").on("click", function () {
		var w = screen.width;
		if (w < '768') {
			limitPerPage += 5;
		} else
			if (w < '1024') {
				limitPerPage += 4;
			}
			else {
				limitPerPage += 3;
			}
		// limitPerPage += 3; // Increase limitPerPage by its initial value
		totalPages = Math.ceil(numberOfItems / limitPerPage);
		showPage(currentPage); // Show the current page with the updated limitPerPage
	});

});