const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

$(document).ready(function () {
	var scroll = $(window).scrollTop();
	let topPos = $("#scroll").position().top;
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > window.innerHeight - $("#nav").height()) {
			$(".backgroundGradient").css("background", "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)");
			$(".backgroundGradient").css("background-size", "400% 400%");
			$(".backgroundGradient").css("animation", "gradient 15s ease infinite");
		} else {
			$(".backgroundGradient").css("background", "#ffffff00");
		}

		let perc = -1 * clamp((scroll / topPos) * 2, 0.1, 1) + 1;
		let top = perc * 50 + 50;

		console.log(top);

		if (perc == 0) {
			$(".scroll").css("transform", "scale(-100%)");
		} else {
			$(".scroll").css("transform", "scale(100%)");
		}

		$(".contentGlass").css("top", top + "%");
		$(".contentGlass").css("bottom", "-50%");

		// $(".scroll").css("bottom", 97 - top + "%");
		$(".scroll").css("top", 2 + perc * 3 + "%");

		$(".contentGlass").css("left", perc * window.innerWidth * 0.05 + "px");
		$(".contentGlass").css("right", perc * window.innerWidth * 0.05 + "px");
		$(".contentGlass").css("border-radius", perc * 10 + "px");
	});
});
