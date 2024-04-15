import $ from 'jquery';
// import { createPopper } from '@popperjs/core';
import 'bootstrap';

//? modal
$('.btn-modal-close').on('click', function () {
	var originalText = $(this).text(); // Зберігаємо початковий текст кнопки
	$(this).addClass('active');

	if ($(this).hasClass('active')) {
		$(this).text('Відправлено');
	}

	$('.modal').on('hidden.bs.modal', function () {
		$('.btn-modal-close').each(function () {
			$(this).removeClass('active').text(originalText); // Встановлюємо початковий текст та видаляємо клас active
		});
	});

});


