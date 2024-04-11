import $ from 'jquery';
// import { createPopper } from '@popperjs/core';
import 'bootstrap';

//? modal
$(document).on('hidden.bs.modal', function (event) {
	if ($('.modal:visible').length) {
		$('body').addClass('modal-open');
	}
});

//? select-accordion tab mobile // strahuvannya-za-dogovorami-zelena-kartka.html
$('.select-accordion').on('change', function (e) {
	$(this).closest(".insurance-case-tablist-nav").find('.nav-pills .nav-item .nav-link').eq($(this).val()).tab('show');
});

//? select-accordion tab mobile // partners.html
$('.select-accordion').on('change', function (e) {
	$(this).closest(".partners-tablist-nav").find('.nav-pills .nav-item .nav-link').eq($(this).val()).tab('show');
});

// //? tab banner // partners.html
$('#partners-tablist-nav--pills-tab a[data-toggle="pill"]').on('show.bs.tab', function (e) {
	let target = $(e.target).data('target');
	$(target)
		.addClass('active show')
		.siblings('.tab-pane.active')
		.removeClass('active show')
});


$('#calculation-table--eurocasco--pills-tab .card-item[data-toggle="pill"]').on('show.bs.tab', function (e) {
	let target = $(e.target).data('target');
	$(target)
		.addClass('active')
		.siblings('.tab-pane.active')
		.removeClass('active')
});

// $(function () {
// 	$('.calculation-table--eurocasco .tab-content .table-row .table-col').hide().eq(0).show();
// 	// $('#tabcontainer-2 .tabs').hide().eq(0).show();
// 	$('.calculation-table--eurocasco .type-program .card-list .card-item').click(function () {
// 		var num = $('.calculation-table--eurocasco .type-program .card-list .card-item').index(this);
// 		$('.calculation-table--eurocasco .tab-content .table-row .table-col').hide().eq(num).show();
// 		// $('#tabcontainer-2 .tabs').hide().eq(num).show();
// 	});
// });


//? select-accordion tab mobile // user.html
$('.select-accordion').on('change', function (e) {
	$(this).closest(".user-profile-nav").find('.nav-pills .nav-item .nav-link').eq($(this).val()).tab('show');
});

//? tooltip info field
$(function () {
	var tooltipFieldError = ['<div class="tooltip tooltip-help-info" role="tooltip">',
		'<div class="tooltip-inner">',
		'</div>',
		'</div>'].join('');
	$('.i-info').tooltip({
		trigger: "hover", //hover focus click manual
		html: true,
		placement: "top",
		template: tooltipFieldError,
		// fallbackPlacement: [], // строго в заданому напрямку, не дає можливості при скролі позиціонувати в інші сторони
	});
});


$('.accordion .card').on('show.bs.collapse', function () {
	$(this).addClass('active');
});

$('.accordion .card').on('hide.bs.collapse', function () {
	$(this).removeClass('active');
});

