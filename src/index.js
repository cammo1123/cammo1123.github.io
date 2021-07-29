import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";

import { setCollapsed, setDark, setPage } from "./components/functions";
import { NavCover, navItem } from "./components/navbar";

let chevron = setCollapsed(null, true);
setDark(null, true);

const Socials = lazy(() => import("./pages/socials"));
const Home = lazy(() => import("./pages/home"));
const Projects = lazy(() => import("./pages/projects"));

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<div>
				<nav>
					<NavCover />
					<ul>
						{navItem("home", "home", Link, "Home", "/")}
						{navItem("socials", "message", Link)}
						{navItem("projects", "grid", Link)}
					</ul>
					<button id="collapse" onClick={setCollapsed}>
						<i className={chevron}></i>
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
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/socials" component={Socials} />
						<Route path="/projects" component={Projects} />
					</Switch>
				</Suspense>
			</div>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

window.addEventListener("resize", () => {
	let path = window.location.pathname;
	let page = path.split("/").join("");
	setPage(page, false);
});

window.addEventListener("load", () => {
	let path = window.location.pathname;
	let page = path.split("/").join("");
	setPage(page, false);
});
