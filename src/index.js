import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.scss";

import { setCollapsed, setDark, setPage } from "./components/functions";
import { PageContent, PageSection } from "./components/page";
import { NavBar, NavItem } from "./components/navbar";

let arrowDir = setCollapsed(null, true);
export let LINK = Link;

const Socials = lazy(() => import("./pages/socials"));
const Home = lazy(() => import("./pages/home"));
const Projects = lazy(() => import("./pages/projects"));
const Blog = lazy(() => import("./pages/blog"));
const Portfolio = lazy(() => import("./pages/portfolio"));

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<NavBar arrowDir={arrowDir}>
				<NavItem id="home" iconName="bx-home" path="/" />
				<NavItem id="socials" iconName="bx-message" />
				<NavItem id="portfolio" iconName="bxs-report" />
				<NavItem id="projects" iconName="bx-git-repo-forked" />
			</NavBar>
			<Suspense
				fallback={
					<PageContent name="portfolio">
						<PageSection className="fullpage center">
							<div className="content">Loading...</div>
						</PageSection>
					</PageContent>
				}
			>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/socials" component={Socials} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/projects" component={Projects} />
					<Route path="/blog" component={Blog} />
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
	setDark(null, true);
});
