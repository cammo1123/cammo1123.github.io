import $ from "jquery";

function addAnimations() {
	document.documentElement.style.setProperty("--nav-time", "0.1s");
}

function removeAnimations() {
	document.documentElement.style.setProperty("--nav-time", "0s");
}


export function toTitleCase(str) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

export function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === " ") c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

export function setCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/; Secure";
}

let prevPage = "";

export function setPage(page, animations = true) {
	if (!animations) {
		removeAnimations();
	}

	document.title = toTitleCase(page);

	window.ga("set", "page", page);
	window.ga("send", "pageview");

	page = page === "" ? "#home" : "#" + page;
	let pos = $(page).offset();

	if (pos !== undefined) {
		if (prevPage !== "") {
			$("#" + prevPage).removeClass("active");
		}

		$(page).addClass("active");

		let my_pos = $("#active_cover");

		let my_pos_height = my_pos.height() + 24;

		$("#top_fill").css("bottom", window.innerHeight - (pos.top - my_pos.height() + 24) - 14 + window.pageYOffset);
		$("#bottom_fill").css("top", my_pos_height + (pos.top - my_pos.height() + 24) + 14 - window.pageYOffset);
		$("#active_cover").css("top", pos.top - my_pos.height() + 24 + 14 - window.pageYOffset);
		prevPage = page.slice(1);
	}
	if (!animations) {
		addAnimations();
	}
}

export function setDark(NULL, dontInvert = false) {
	let dark = getCookie("dark") === dontInvert + "";

	if (!dark) {
		document.documentElement.style.setProperty("--background-color", "#fff");
		document.documentElement.style.setProperty("--text-color", "#000");
		document.documentElement.style.setProperty("--shadow-color", "#cbcbcb");
	} else {
		document.documentElement.style.setProperty("--background-color", "#181a1b");
		document.documentElement.style.setProperty("--text-color", "#e8e6e3");
		document.documentElement.style.setProperty("--shadow-color", "#0B0B0B");
	}

	setCookie("dark", `${dark}`, 30);
}

export function setCollapsed(NULL, dontInvert = false) {
	let collapsed = getCookie("collapsed") === dontInvert + "";

	if (!collapsed) {
		document.documentElement.style.setProperty("--toolbar-width", "300px");
		document.documentElement.style.setProperty("--toolbar-text", "unset");
		document.documentElement.style.setProperty("--nav-color", "#23a6d5");

		$("#collapse").html("<i class='bx bxs-chevron-left'></i>");
	} else {
		document.documentElement.style.setProperty("--toolbar-width", "50px");
		document.documentElement.style.setProperty("--toolbar-text", "none");
		document.documentElement.style.setProperty("--nav-color", "transparent");

		$("#collapse").html("<i class='bx bxs-chevron-right'></i>");
	}

	setCookie("collapsed", collapsed + "", 30);
}