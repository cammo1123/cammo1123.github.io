import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";

import { setCollapsed, setDark, setPage } from "./components/functions";
import { NavBar, NavItem } from "./components/navbar";

let arrowDir = setCollapsed(null, true);
export let LINK = Link;
setDark(null, true);

const Socials = lazy(() => import("./pages/socials"));
const Home = lazy(() => import("./pages/home"));
const Projects = lazy(() => import("./pages/projects"));
const Blog = lazy(() => import("./pages/blog"));
const Portfolio = lazy(() => import("./pages/portfolio"));

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<NavBar arrowDir={arrowDir}>
				<NavItem id="home" iconName="home" path="/" />
				<NavItem id="socials" iconName="message" />
				<NavItem id="projects" iconName="grid-alt" />
			</NavBar>
			<Suspense
				fallback={
					<div className="center fullscreen">
						<div className="content">Loading...</div>
					</div>
				}
			>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/socials" component={Socials} />
					<Route path="/projects" component={Projects} />
					<Route path="/blog" component={Blog} />
					<Route path="/portfolio" component={Portfolio} />
				</Switch>
			</Suspense>
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
