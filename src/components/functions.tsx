const toTitleCase = (str: string) => {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

const getCookie = (name: string) => {
	const nameEQ = name + "=";
	const ca = document.cookie.split(";");

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		if (!c) return null;
		while (c.charAt(0) === " ") c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}

	return null;
};

const setCookie = (name: string, value: string, days: number) => {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = "; expires=" + date.toUTCString();

	document.cookie = name + "=" + (value || "") + expires + "; path=/; Secure";
};

let prevPage = "";

const setPage = (page: string, animations = true) => {
	page = page === "" ? "home" : page;
	if (!animations) document.documentElement.style.setProperty("--nav-time", "0s");

	document.title = "Cameron | " + toTitleCase(page);

	const pageElement = document.getElementById(page);
	const navCover = document.getElementById("active_cover");

	if (pageElement && navCover) {
		const rect = pageElement.getBoundingClientRect();

		document.getElementById(prevPage)?.classList.remove("active");
		pageElement.classList.add("active");

		const navHeight = navCover.children[0]?.getBoundingClientRect().height ?? 0;
		navCover.style.setProperty("top", `${rect.y - navHeight}px`);

		prevPage = page;
	}

	if (!animations) document.documentElement.style.setProperty("--nav-time", "0.1s");
};

export { toTitleCase, getCookie, setCookie, setPage };
