import $ from 'jquery';

//? Підрахунок кількості блоків `.subscription-period-benefits--item`

document.addEventListener("DOMContentLoaded", function () {
	var blocks = document.querySelectorAll('.subscription-period-benefits');

	blocks.forEach(function (block) {
		var items = block.querySelectorAll('.subscription-period-benefits--item');

		if (items.length > 5) {
			for (var i = 5; i < items.length; i++) {
				items[i].classList.add('d-none');
			}
		}
	});

	var showMoreButtons = document.querySelectorAll('.subscription-period-tab .btn-more');

	showMoreButtons.forEach(function (button) {
		button.addEventListener('click', function () {
			var parentBlock = this.previousElementSibling;
			var items = parentBlock.querySelectorAll('.subscription-period-benefits--item');

			for (var i = 5; i < items.length; i++) {
				if (items[i].classList.contains('d-none')) {
					items[i].classList.remove('d-none');
				} else {
					items[i].classList.add('d-none');
				}
			}

			if (parentBlock.querySelectorAll('.d-none').length > 0) {
				this.textContent = 'Усі фішки';
			} else {
				this.textContent = 'Сховати';
			}
		});
	});
});

//? Підрахунок кількості блоків `.subscription-features--item`

document.addEventListener("DOMContentLoaded", function () {
	var blocks = document.querySelectorAll('.subscription-features');

	blocks.forEach(function (block) {
		var items = block.querySelectorAll('.subscription-features--item');

		if (items.length > 8) {
			for (var i = 8; i < items.length; i++) {
				items[i].classList.add('d-none');
			}
		}
	});

	var showMoreButtons = document.querySelectorAll('.subscription-features-content .btn-more');

	showMoreButtons.forEach(function (button) {
		button.addEventListener('click', function () {
			var parentBlock = this.previousElementSibling;
			var items = parentBlock.querySelectorAll('.subscription-features--item');

			for (var i = 8; i < items.length; i++) {
				if (items[i].classList.contains('d-none')) {
					items[i].classList.remove('d-none');
				} else {
					items[i].classList.add('d-none');
				}
			}

			if (parentBlock.querySelectorAll('.d-none').length > 0) {
				this.textContent = 'Показати Більше';
			} else {
				this.textContent = 'Сховати';
			}
		});
	});
});