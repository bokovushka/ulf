import RangeSlider from "../../../../node_modules/svelte-range-slider-pips/dist/svelte-range-slider-pips.mjs";

//? price-slider-casco

// if (window.location.toString().indexOf('casco') === 0) { //добавляє виконання скрипту на сторінках з таким вмістом
if (window.location.pathname === "/casco.html") { //добавляє виконання скрипту лиш на певній сторінці
	var PriceSliderCasco = new RangeSlider({
		target: document.getElementById("price-slider-casco"),
		props: {
			min: 0,
			max: 50000,
			values: [0],
			step: 1,
			range: "min",
			float: true,
			suffix: "",
			pushy: false,
			pips: false,
		}
	});

	var PriceSliderCascoValue = document.querySelector(".casco-page .calculation-data .price-subject .price-value");

	//змінює значення при використанні повзунка
	PriceSliderCasco.$on('change', function (e) {
		PriceSliderCascoValue.value = e.detail.values[0];
	});

	//змінює значення в інпутах
	PriceSliderCascoValue.addEventListener("change", (e) => {
		PriceSliderCasco.$set({ values: [PriceSliderCascoValue.value] });
	});
}

// //? price-slider-minicasco
if (window.location.pathname === "/minicasco.html") { //добавляє виконання скрипту на сторінках з таким вмістом
	let PriceSliderMiniCasco = new RangeSlider({
		target: document.getElementById("price-slider-minicasco"),
		props: {
			min: 0,
			max: 50000,
			values: [0],
			step: 1,
			range: "min",
			float: true,
			suffix: "",
			pushy: false,
			pips: false,
		}
	});

	let PriceSliderMiniCascoValue = document.querySelector(".minicasco-page .calculation-data .price-subject .price-value");

	//змінює значення при використанні повзунка
	PriceSliderMiniCasco.$on('change', function (e) {
		PriceSliderMiniCascoValue.value = e.detail.values[0];
	});

	//змінює значення в інпутах
	PriceSliderMiniCascoValue.addEventListener("change", (e) => {
		PriceSliderMiniCasco.$set({ values: [PriceSliderMiniCascoValue.value] });
	});
}

//? price-slider-eurocasco 
if (window.location.pathname === "/eurocasco.html") { //добавляє виконання скрипту лиш на певній сторінці
	let PriceSliderEuroCasco = new RangeSlider({
		target: document.getElementById("price-slider-eurocasco"),
		props: {
			min: 0,
			max: 50000,
			values: [0],
			step: 1,
			range: "min",
			float: true,
			suffix: "",
			pushy: false,
			pips: false,
		}
	});

	let PriceSliderEuroCascoValue = document.querySelector(".eurocasco-page .calculation-data .price-subject .price-value");

	//змінює значення при використанні повзунка
	PriceSliderEuroCasco.$on('change', function (e) {
		PriceSliderEuroCascoValue.value = e.detail.values[0];
	});

	//змінює значення в інпутах
	PriceSliderEuroCascoValue.addEventListener("change", (e) => {
		PriceSliderEuroCasco.$set({ values: [PriceSliderEuroCascoValue.value] });
	});
}

//? price-slider-property-protection 
if (window.location.pathname === "/calc-property-protection.html" || window.location.pathname === "/calc-property-protection-2.html" || window.location.pathname === "/calc-casco.html" || window.location.pathname === "/calc-casco-2.html" || window.location.pathname === "/calc-eurocasco.html") {
	var PriceSliderPropertyProtection = new RangeSlider({
		target: document.getElementById("price-slider-property-protection"),
		props: {
			min: 0,
			max: 500000,
			values: [0],
			step: 1000,
			range: "min",
			float: true,
			suffix: "",
			pushy: false,
			pips: false,
		}
	});

	var PriceSliderPropertyProtectionValue = document.querySelector(".calc-property-protection-page .calculation-data .price-subject .price-value");

	//змінює значення при використанні повзунка
	PriceSliderPropertyProtection.$on('change', function (e) {
		PriceSliderPropertyProtectionValue.value = e.detail.values[0];
	});

	//змінює значення в інпутах
	PriceSliderPropertyProtectionValue.addEventListener("change", (e) => {
		PriceSliderPropertyProtection.$set({ values: [PriceSliderPropertyProtectionValue.value] });
	});
}
