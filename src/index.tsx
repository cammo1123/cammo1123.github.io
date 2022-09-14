import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";

import { setCollapsed, setDark, setPage } from "./components/functions";
import { PageContent, PageSection } from "./components/page";
import { NavBar, NavItem } from "./components/navbar";

let arrowDir = setCollapsed(null, true);

const Home = lazy(() => import("./pages/home"));
const Socials = lazy(() => import("./pages/socials"));
const Projects = lazy(() => import("./pages/projects"));
const Portfolio = lazy(() => import("./pages/portfolio"));

const App = () => {
	return <React.StrictMode>
		<BrowserRouter>
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
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/socials" element={<Socials />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
}

const rootElement = document.getElementById("root");;
if (rootElement) {
	const root = createRoot(rootElement);
	root.render(<App />);
}

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
