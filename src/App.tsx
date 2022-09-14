import { Component, lazy, Suspense } from "solid-js";
import { Routes, Route, Router } from "@solidjs/router";
import { ContentPane, PageContent, PageSection } from "./components/page";
import { NavBar, NavItem } from "./components/navbar";

const Home = lazy(() => import("./pages/home"));
const Socials = lazy(() => import("./pages/socials"));
const Projects = lazy(() => import("./pages/projects"));
const Portfolio = lazy(() => import("./pages/portfolio"));

const App: Component = () => (
	<Router>
		<NavBar>
			<NavItem id="home" iconName="bx-home" path="/" />
			<NavItem id="socials" iconName="bx-message" />
			<NavItem id="portfolio" iconName="bxs-report" />
			<NavItem id="projects" iconName="bx-git-repo-forked" />
		</NavBar>
		<ContentPane>
			<Suspense
				fallback={
					<PageContent name="portfolio">
						<PageSection className="fullpage center">
							<div class="content">Loading...</div>
						</PageSection>
					</PageContent>
				}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/socials" element={<Socials />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</Suspense>
		</ContentPane>
	</Router>
);

export default App;
