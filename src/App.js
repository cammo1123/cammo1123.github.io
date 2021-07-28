import "./App.css";
import React from "react";
import "./styles/boxicons-2.0.9/css/boxicons.min.css";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

setCollapsed(null, true);
setDark(null, true);



export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<div className="cover">
						<div id="top_fill"></div>
						<div className="active_cover" id="active_cover">
							<div className="child"></div>
							<div className="child2"></div>
						</div>
						<div id="bottom_fill"></div>
					</div>
					<ul>
						{navItem("home", "home", "Home", "/")}
						{navItem("socials", "message")}
						{navItem("projects", "grid")}
					</ul>
					<button id="collapse" onClick={setCollapsed}>
						<i className="bx bxs-chevron-right"></i>
					</button>
					<span id="copyright">
						Copyright (c) Cameron Youell
						<br />
						2021, All Rights Reserved
					</span>
					<button id="adjust" onClick={setDark}>
						<i className="bx bx-adjust"></i>
					</button>
				</nav>

				<Switch>
					<Route path="/socials">
						<Socials />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function navItem(id, iconName, name = toTitleCase(id), path = "/" + id) {
	return (
		<div id={id}>
			<li>
				<Link to={path}>
					<i className={"bx bx-" + iconName}></i>
					<span>{name}</span>
				</Link>
			</li>
		</div>
	);
}

setCollapsed(null, true);

function addAnimations() {
	document.documentElement.style.setProperty("--nav-time", "0.1s");
}

function removeAnimations() {
	document.documentElement.style.setProperty("--nav-time", "0s");
}

let prevID = "";

function setCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/; Secure";
}

function setDark(NULL, dontInvert = false) {
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

function setCollapsed(NULL, dontInvert = false) {
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

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === " ") c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

function setPage(page, animations = true) {
	if (!animations) {removeAnimations()};
	page = page === "" ? "#home" : "#" + page;
	let pos = $(page).offset();

	if (pos !== undefined) {
		if (prevID !== "") {
			$(prevID).removeClass("active");
		}

		$(page).addClass("active");

		let my_pos = $("#active_cover");

		let my_pos_height = my_pos.height() + 24;

		$("#top_fill").css("bottom", window.innerHeight - (pos.top - my_pos.height() + 24) - 14 + window.pageYOffset);
		$("#bottom_fill").css("top", my_pos_height + (pos.top - my_pos.height() + 24) + 14 - window.pageYOffset);
		$("#active_cover").css("top", pos.top - my_pos.height() + 24 + 14 - window.pageYOffset);
		prevID = page.slice(1);
	} 
	if (!animations) {addAnimations()};
}

function Home() {
	setPage("home");
	return (
		<div className="center fullpage gradient">
			<div className="content message">
				<h1>Cameron</h1>
				<sub>I'm Pretty Cool (I Think)</sub>
			</div>
		</div>
	);
}

window.addEventListener("resize", () => {
	setPage(prevID, false);
});

window.addEventListener("load", () => {
	let path = window.location.pathname;
	let page = path.split("/").join("");
	setPage(page, false);
});

function Socials() {
	setPage("socials");
	return (
		<div className="center fullpage gradient">
			<div className="content">
				<h1 className="tx-center">Add my Socials</h1>
				<ul className="socials">
					<li>
						<a alt="instagram" target="_blank" rel="noreferrer" href="https://instagram.com/cammo1123">
							<i className="bx bxl-instagram"></i>
						</a>
					</li>
					<li>
						<a alt="instagram" target="_blank" rel="noreferrer" href="https://snapchat.com/add/cammo11233">
							<i className="bx bxl-snapchat"></i>
						</a>
					</li>
					<li>
						<a alt="instagram" target="_blank" rel="noreferrer" href="https://twitter.com/cammo1123">
							<i className="bx bxl-twitter"></i>
						</a>
					</li>
					<li>
						<a alt="instagram" target="_blank" rel="noreferrer" href="https://twitch.tv/cammo1123">
							<i className="bx bxl-twitch"></i>
						</a>
					</li>
					<li>
						<a alt="instagram" target="_blank" rel="noreferrer" href="https://discord.com/users/341833124361011200">
							<i className="bx bxl-discord"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

function Projects() {
	setPage("projects");
	return (
		
		<div className="content">
			<h1> Current Projects </h1>
			<div className="githubGrid">
				{githubCard("PlexPlayer", "A simple player for non Plex premium users", "https://github.com/cammo1123/Plex-Player")}
				{githubCard("Sentral_Companion", "ARCHIVED - A Companion app for https://web2.schoolName.schools.nsw.edu.au/portal ", "https://github.com/cammo1123/sentral_companion")}

			</div>
		</div>
	);
}

function githubCard(name, des, link) {
	return (
		<a alt={name} href={link} target="_blank" rel="noreferrer" className="githubCard">
			<div><img alt="github avatar" src="https://avatars.githubusercontent.com/u/36214028" /></div>
			<div>
				<h1>cammo1123/{name}</h1>
				<p>{des}</p>
			</div>
		</a>
	);
}

