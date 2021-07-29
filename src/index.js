import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './index.css';
import "./components/boxicons";

import { setCollapsed, setDark, setPage } from "./components/functions";
import { NavCover, navItem } from "./components/navbar";

import { Home } from "./pages/home";
import { Socials } from "./pages/socials";
import { Projects } from "./pages/projects";

setCollapsed(null, true);
setDark(null, true);

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
  </React.StrictMode>,
  document.getElementById('root')
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