import $ from 'jquery';
import "../../../../node_modules/fastselect/dist/fastselect.standalone.js";

//? select
$('select').fastselect({
});

// setInterval(function () {
$('select').closest('.select-wrap').find('.fstToggleBtn').wrapInner($("<div>").addClass('fstToggleBtn--inner'));
// }, 100);


//? select-city wrap //active //footer
// setInterval(function () {
if ($('.footer .fstElement').hasClass('fstActive')) {
	$('.footer .select-wrap').addClass('active');
}
else {
	$('.footer .select-wrap').removeClass('active');
}
// }, 100);

//? select-program wrap //active  //casco page
// setInterval(function () {
if ($('.calculation-data .fstElement').hasClass('fstActive')) {
	$('.calculation-data .select-wrap').addClass('active');
}
else {
	$('.calculation-data .select-wrap').removeClass('active');
}
// }, 100);

$('.select-choose-car').change(function () {
	console.log('1111111111');
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

				$('.form-osago-data').removeClass("otk-no");
			}
		}
	}
});

$('.select-otk').change(function () {
	if ($(this).val() == '1') {
		$('.form-osago-data').addClass("otk-no");
	}
	else {
		$('.form-osago-data').removeClass("otk-no");
	}
});