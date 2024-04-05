import $ from 'jquery';
import "../../../../node_modules/select2/dist/js/select2.js";

//? select
$(document).ready(function () {
	$('.field .select-wrap select').select2({
		minimumResultsForSearch: -1,
	});
});


//footer
$(document).ready(function () {
	$('.select-city').select2({
		minimumResultsForSearch: -1,
		dropdownParent: $('#footer-select-city')
	});
});

//news.html
$(document).ready(function () {
	$('.select-news-category').select2({
		minimumResultsForSearch: -1,
		dropdownParent: $('.select-news-category--wrap')
	});
});

$(document).ready(function () {
	$('.select-year').select2({
		minimumResultsForSearch: -1,
		dropdownParent: $('.select-year--wrap')
	});
});

$(document).ready(function () {
	$('.select-accordion').select2({
		minimumResultsForSearch: -1,
		dropdownParent: $('.select-accordion--wrap')
	});
});



// $('.select-otk').select2({
// 	data: ['Так', 'Ні']
// })

//avtotsyvilka-2.html
$('.select-choose-car').change(function () {
	// $('#select-otk').select2('val', 'Так')
	$('.select-otk').val('0').trigger('change');
	if ($(this).val() == '1') {
		$('.form-osago-data').addClass("choose-car-2");
		$('.form-osago-data').removeClass("choose-car-1");
		$('.form-osago-data').removeClass("choose-car-3");
		$('.form-osago-data').removeClass("choose-car-4");
		$('.form-osago-data').removeClass("otk-no");
	}
	else {
		if (($(this).val() == '2')) {
			$('.form-osago-data').addClass("choose-car-3");
			$('.form-osago-data').removeClass("choose-car-1");
			$('.form-osago-data').removeClass("choose-car-2");
			$('.form-osago-data').removeClass("choose-car-4");
		}
		else {
			if (($(this).val() == '3')) {
				$('.form-osago-data').addClass("choose-car-4");
				$('.form-osago-data').removeClass("choose-car-1");
				$('.form-osago-data').removeClass("choose-car-2");
				$('.form-osago-data').removeClass("choose-car-3");
				$('.form-osago-data').removeClass("otk-no");
			}
			else {
				$('.form-osago-data').addClass("choose-car-1");
				$('.form-osago-data').removeClass("choose-car-2");
				$('.form-osago-data').removeClass("choose-car-3");
				$('.form-osago-data').removeClass("choose-car-4");
				$('.form-osago-data').removeClass("otk-no");
			}
		}
	}
});

//avtotsyvilka-2.html
$('.select-otk').change(function () {
	if ($(this).val() == '1') {
		$('.form-osago-data').addClass("otk-no");
	}
	else {
		$('.form-osago-data').removeClass("otk-no");
	}
});

//calc-property-protection.html
// /calc-property-protection-2.html
$('.select-property-type').change(function () {
	if ($(this).val() == '2') {
		$('.program-type--wrap').css('display', 'none')
	}
	else {
		$('.program-type--wrap').css('display', 'block')
	}
});

//calc-insurance-payment-step.html
//calc-insurance-payment-step-2.html

$('.select-additional-limit').select2({
	minimumResultsForSearch: -1,
	disabled: true,
});

$(".select-additional-limit--wrap .user-pic--edit").on("click", function () {
	$(".select-additional-limit").prop("disabled", false);
	$(".js-example-disabled-multi").prop("disabled", false);
});

$(".select-additional-limit--wrap .btn-default").on("click", function () {
	$(".select-additional-limit").prop("disabled", true);
	$(".select-additional-limit").prop("disabled", true);
});
