import { setPage } from "../../components/functions";
import { PageContent, PageSection } from "../../components/page";
import { GithubCard } from "../../components/github";

import "./style.css";

export default function Portfolio() {
	setPage("portfolio");
	return (
		<PageContent name="portfolio">
			<PageSection name="top-section" className="gradient">
				<h1>Welcome to my Personal Portfolio</h1>
				<sub>The purpose of React is to help aspiring and established developers to realise the true pain of web development</sub>
			</PageSection>
			<PageSection name="mid-section">
				<h1>Some of my Best Projects</h1>
				<div className="githubGrid">
					<GithubCard name="cammo1123/Plex-Player" forks="0" stars="1" url="https://github.com/cammo1123/Plex-Player"></GithubCard>
					<GithubCard name="cammo1123/cammo1123.github.io" forks="0" stars="1" url="https://github.com/cammo1123/cammo1123/github.io"></GithubCard>
				</div>
			</PageSection>
		</PageContent>
	);
}
