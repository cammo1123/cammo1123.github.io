function setCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/; Secure";
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == " ") c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

let prevID = "";
$("#collapse").click(() => {
	collapsed = getCookie("collapsed") == "true";
	setCollapsed(!collapsed);
});

$("#adjust").click(() => {
	dark = getCookie("dark") == "true";
	setDark(!dark);
});

function setDark(dark) {
	if (!dark) {
		document.documentElement.style.setProperty("--background-color", "#fff");
		document.documentElement.style.setProperty("--text-color", "#000");
	} else {
		document.documentElement.style.setProperty("--background-color", "#181a1b");
		document.documentElement.style.setProperty("--text-color", "#e8e6e3");
	}

	setCookie("dark", `${dark}`, 30);
}

function setCollapsed(collapsed) {
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

	setCookie("collapsed", `${collapsed}`, 30);
}

function setPage(page) {
	let pos = page == "" ? $(`#index`).offset() : $(`#${page}`).offset();

	if (pos != undefined) {
		if (prevID != "") {
			$(`#${prevID}`).removeClass("active");
		}

		$(`#${page}`).addClass("active");

		let my_pos = $("#active_cover");

		let my_pos_height = my_pos.height() + 24;

		$("#top_fill").css("bottom", window.innerHeight - (pos.top - my_pos.height() + 24) - 14 + scrollY);
		$("#bottom_fill").css("top", my_pos_height + (pos.top - my_pos.height() + 24) + 14 - scrollY);
		$("#active_cover").css("top", pos.top - my_pos.height() + 24 + 14 - scrollY);
		prevID = this.id;
		return 1;
	} else {
		return -1;
	}
}

let path = window.location.pathname;
let page = path.split("/").join("");
let links = document.getElementsByClassName("item_container");

setPage(page);
console.log(page);

collapsed = getCookie("collapsed") != "false";
setCollapsed(collapsed);

dark = getCookie("dark") == "true";
setDark(dark);

function addAnimations() {
	$(".cover").children().addClass("transition");
}

window.addEventListener("resize", () => {
	setPage(page);
});

$(".item_container").click(function (e) {
	setPage(this.id);

	console.log(this.id);

	if (this.id == "index") {
		window.location.href = "https://cammo1123.github.io/";
	} else {
		window.location.href = `https://cammo1123.github.io/${this.id}`;
	}
});
