import Fuse from 'fuse.js'

const items = [
	{ title: "The Catcher in the Rye", InfoPage: "ст. Публічна інформація" },
	{ title: "To Kill a Mockingbird", InfoPage: "ст. Головна" },
	{ title: "1984", InfoPage: "ст. Контакти" },
	{ title: "The Great Gatsby", InfoPage: "ст. Про нас" },
	{ title: "Brave New World", InfoPage: "ст. Блог" },
];

const options = {
	keys: ['title', 'InfoPage'],
};

const fuse = new Fuse(items, options);

const searchInputsWrap = document.querySelector('.search-main');
const searchInputs = document.querySelectorAll('.search-input');
const resultsDivs = document.querySelectorAll('.results-search');
const clearIcons = document.querySelectorAll('.clear-icon');

// Отримати ширину першого блоку
let searchInputsWrapWidth = searchInputsWrap.offsetWidth;

resultsDivs.forEach(resultDiv => {
	resultDiv.style.width = searchInputsWrapWidth + 'px';
});

searchInputs.forEach((searchInput, index) => {
	const resultsDiv = resultsDivs[index];
	const clearIcon = clearIcons[index];

	searchInput.addEventListener('input', function (e) {
		const searchTerm = e.target.value;
		const result = fuse.search(searchTerm);

		searchInputsWrapWidth = searchInputsWrap.offsetWidth;

		if (searchTerm === '') {
			resultsDiv.innerHTML = '';
			clearIcon.style.display = 'none';
			searchInput.closest('.search-main').classList.remove('active');
			return;
		}

		if (result.length > 0) {
			const resultList = document.createElement('div');
			resultList.classList.add('result-list');

			result.forEach(item => {
				const resultItem = document.createElement('a');
				resultItem.setAttribute('href', '#');
				resultItem.classList.add('result-item');

				const titleDiv = document.createElement('div');
				titleDiv.textContent = item.item.title;
				titleDiv.classList.add('title');

				const infoPageDiv = document.createElement('div');
				infoPageDiv.textContent = item.item.InfoPage;
				infoPageDiv.classList.add('info-page');

				resultItem.appendChild(titleDiv);
				resultItem.appendChild(infoPageDiv);
				resultList.appendChild(resultItem);
			});

			resultsDiv.innerHTML = '';
			resultsDiv.appendChild(resultList);
			clearIcon.style.display = 'block';
			searchInput.closest('.search-main').classList.add('active');
			resultsDiv.classList.remove('no-result-search');

		} else {
			resultsDiv.innerHTML = 'Нічого не знайдено';
			resultsDiv.classList.add('no-result-search');
			clearIcon.style.display = 'block';
			searchInput.closest('.search-main').classList.add('active');
		}

		resultsDivs.forEach(resultDiv => {
			resultDiv.style.width = searchInputsWrapWidth + 'px';
		});
	});

	clearIcon.addEventListener('click', function () {
		searchInput.value = '';
		resultsDiv.innerHTML = '';
		clearIcon.style.display = 'none';
		searchInput.closest('.search-main').classList.remove('active');
		resultsDivs.forEach(resultDiv => {
			resultDiv.style.width = searchInputsWrapWidth + 'px';
		});
	});

});

function clearSearchResults() {
	searchInputs.forEach((searchInput, index) => {
		const resultsDiv = resultsDivs[index];
		const clearIcon = clearIcons[index];
		searchInput.value = '';
		resultsDiv.innerHTML = '';
		clearIcon.style.display = 'none';
		searchInput.closest('.search-main').classList.remove('active');
		resultsDivs.forEach(resultDiv => {
			resultDiv.style.width = searchInputsWrapWidth + 'px';
		});
	});
}
if (window.innerWidth >= 768) {
	setInterval(function () {
		if ($(".header-top").hasClass("header--hide")) {
			clearSearchResults();
			$(".header-top").removeClass("search-active");
		}
	}, 0);
}


//tablet

const searchMain = document.querySelectorAll('.search-main');
const headerTop = document.querySelector('.header-top');

function addSearchActiveToHeaderTop() {
	headerTop.classList.add('search-active');
}

function removeSearchActiveFromHeaderTop() {
	headerTop.classList.remove('search-active');
	searchMain.forEach(element => {
		element.classList.remove('active');
	});
}
if (window.innerWidth >= 768) {
	searchMain.forEach(element => {
		element.addEventListener('click', addSearchActiveToHeaderTop);
	});
}
document.addEventListener('click', function (event) {
	const isClickInsideSearch = Array.from(searchMain).some(elem => elem.contains(event.target));

	if (!isClickInsideSearch) {
		removeSearchActiveFromHeaderTop();
	}
});