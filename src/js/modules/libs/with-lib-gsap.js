import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
	let horizontalSection = document.querySelector('.horizontal');

	if (horizontalSection) { // перевіряємо, чи існує елемент
		console.log(horizontalSection.scrollWidth);

		gsap.to('.horizontal', {
			x: () => horizontalSection.scrollWidth * -1,
			xPercent: 100,
			scrollTrigger: {
				// markers: true,
				scrub: true,
				trigger: '.horizontal',
				start: () => "center 50%",
				end: () => "+=" + horizontalSection.offsetWidth, // використовуємо offsetWidth без додаткового запиту до DOM
				pin: '.scroll-trigger .container-wrap',
				scrub: true,
				invalidateOnRefresh: true
			}
		});
	}
	// else {
	// 	console.error("Element with class 'horizontal' not found on the page.");
	// }
});
