import { render } from "solid-js/web";
import { Component, lazy, Suspense } from "solid-js";
import { Routes, Route, Router } from "@solidjs/router";
import { ContentPane, PageContent, PageSection } from "./components/page";
import { NavBar, NavItem } from "./components/navbar";

import "./index.scss";

const Home = lazy(() => import("./pages/home"));
const Socials = lazy(() => import("./pages/socials"));
const Projects = lazy(() => import("./pages/projects"));

const App: Component = () => (
	<Router>
		<NavBar>
			<NavItem id="home" iconName="bx-home" path="/" />
			<NavItem id="socials" iconName="bx-message" />
			<NavItem id="projects" iconName="bx-git-repo-forked" />
		</NavBar>
		<ContentPane>
			<Suspense
				fallback={
					<PageContent name="portfolio">
						<PageSection class="fullpage center">
							<div class="content">Loading...</div>
						</PageSection>
					</PageContent>
				}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/socials" element={<Socials />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</Suspense>
		</ContentPane>
	</Router>
);

render(() => <App />, document.getElementById("root") as HTMLElement);
