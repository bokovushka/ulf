// import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import { Fancybox } from "@fancyapps/ui";

//? gallery-car
Fancybox.bind('[data-fancybox="gallery"]', {
	Toolbar: {
		items: {
			carName: {
				tpl: `<div class="h4 font-m mb-0 font-weight-bolder text-white">Hyundai Tucson</div>`,
			}
		},
		display: {
			left: ["carName"],
			right: ["iterateZoom", "close"],
		},
	},
	Carousel: {
		Navigation: {
			nextTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
			prevTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
		},
	},
	contentClick: "iterateZoom",
	Images: {
		Panzoom: {
			maxScale: 3,
		},
	},
	Thumbs: false,
	caption: (fancybox, slide) => {
		const caption = slide.caption || "";

		return `${slide.index + 1} / ${fancybox.carousel?.slides.length
			} <br /> ${caption}`;
	},
});


//? [data-fancybox="gallery-scroll"]
Fancybox.bind('[data-fancybox="gallery-scroll"]', {
	Toolbar: {
		display: {
			right: ["iterateZoom", "close"],
		},
	},
	Carousel: {
		Navigation: {
			nextTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
			prevTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
		},
	},
	contentClick: "iterateZoom",
	Images: {
		Panzoom: {
			maxScale: 3,
		},
	},
	Thumbs: false,
	caption: (fancybox, slide) => {
		const caption = slide.caption || "";

		return `${slide.index + 1} / ${fancybox.carousel?.slides.length
			} <br /> ${caption}`;
	},
});

//? [data-fancybox="specific-player"]
Fancybox.bind('[data-fancybox="specific-player"]', {
	Toolbar: {
		display: {
			right: ["close"],
		},
	},
	Thumbs: false,
});

//? [data-fancybox="specific-player-mob"]
Fancybox.bind('[data-fancybox="specific-player-mob"]', {
	Toolbar: {
		display: {
			right: ["close"],
		},
	},
	Thumbs: false,
});