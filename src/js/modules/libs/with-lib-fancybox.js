// import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import { Fancybox } from "@fancyapps/ui";

//? gallery-car
Fancybox.bind('.gallery-car [data-fancybox="gallery"]', {
	Toolbar: {
		display: {
			left: ["infobar"],
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
});
