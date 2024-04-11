import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.horizontal');

console.log(horizontalSection.scrollWidth);

gsap.to('.horizontal', {
	x: () => horizontalSection.scrollWidth * -1,
	xPercent: 100,
	scrollTrigger: {
		// markers: true,
		scrub: true,
		trigger: '.horizontal',
		start: () => "center 50%",
		end: () => "+=" + document.querySelector(".horizontal").offsetWidth,
		pin: '.customer-stories .container-wrap',
		scrub: true,
		invalidateOnRefresh: true
	}
});

