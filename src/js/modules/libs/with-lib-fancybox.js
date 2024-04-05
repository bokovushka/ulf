// import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import { Fancybox } from "@fancyapps/ui";

// //? single-wallpaper-gallery
Fancybox.bind('.wrapper [data-fancybox="gallery"]', {
	Toolbar: {
		display: {
			left: [],
			right: ["iterateZoom", "close"],
		},
	},
	Carousel: {
		Navigation: {
			nextTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-one-right"></use></svg>`,
			prevTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-one-right"></use></svg>`,
		},
	},
	contentClick: "iterateZoom",
	Images: {
		Panzoom: {
			maxScale: 2,
		},
	},
	Thumbs: false,
});
