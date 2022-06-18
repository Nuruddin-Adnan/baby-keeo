"use strict"

var navbar = document.querySelector(".header")
if (navbar) {
	window.onscroll = function () {
		myFunction()
	}

	// Get the navbar

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset >= 120) {
			navbar.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky")
		}
	}
}

if (document.querySelector(".review-slider")) {
	var swiper = new Swiper(".review-slider", {
		slidesPerView: 1,
		spaceBetween: 24,
		loop: true,
		autoplay: {
			delay: 1600,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			575: {
				slidesPerView: 2,
			},

			768: {
				slidesPerView: 3,
				spaceBetween: 6,
			},
		},
	})
}

if (document.querySelector(".blogs-slider")) {
	var swiper = new Swiper(".blogs-slider", {
		loop: true,
		centeredSlides: true,
		slidesPerView: 1,
		spaceBetween: 24,
		autoplay: {
			delay: 1600,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			991: {
				slidesPerView: 3,
				spaceBetween: 6,
			},
		},
	})
}

if (document.querySelector(".product-slider")) {
	var swiper = new Swiper(".product-slider", {
		// loop: true,
		spaceBetween: 8,
		slidesPerView: 2,
		watchSlidesProgress: false,
		breakpoints: {
			480: {
				spaceBetween: 6,
				slidesPerView: 3,
			},

			992: {
				spaceBetween: 10,
				slidesPerView: 4,
				direction: "vertical",
			},
		},
	})
	var swiper2 = new Swiper(".product-thumb-slider", {
		// loop: true,
		slidesPerView: 1,
		spaceBetween: 10,
		thumbs: {
			swiper: swiper,
		},
	})
}

if (document.querySelector(".counter")) {
	$(".counter").counterUp({
		delay: 10,
		time: 1200,
	})
}
