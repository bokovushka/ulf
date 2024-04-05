import $ from 'jquery';
import '../../../../node_modules/readmore-js/readmore.min.js';

$('.spoiler--leadership').readmore({
	speed: 75,
	collapsedHeight: false,
	moreLink: '<button class="btn-read-more btn btn-ahead rounded-0 d-block mt-5 p-0">Детальніше</button>',
	lessLink: '<button class="btn-read-more btn btn-ahead rounded-0 d-block mt-5 p-0">Згорнути</button>'

});

$('.spoiler--media').readmore({
	speed: 75,
	collapsedHeight: false,
	moreLink: '<button class="btn-read-more btn btn-ahead rounded-0 d-block mt-5 p-0">Показати більше</button>',
	lessLink: false,
});

if (window.innerWidth < 1200) {
	$('.spoiler--contacts-info').readmore({
		speed: 75,
		collapsedHeight: false,
		moreLink: '<button class="btn-read-more btn rounded-0 d-flex align-items-center small-txt mt-3 p-0"><span>Детальніше</span><svg class="ml-1"><use xlink:href="img/icons/icons.svg#i-arrow-two-right"></use></svg></button>',
		lessLink: '<button class="btn-read-more btn rounded-0 d-flex align-items-center small-txt mt-3 p-0"><span>Згорнути</span><svg class="ml-1"><use xlink:href="img/icons/icons.svg#i-arrow-two-right"></use></svg></button>'
	});
}