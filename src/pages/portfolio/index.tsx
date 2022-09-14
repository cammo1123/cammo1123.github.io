import { setPage } from "../../components/functions";
import { PageContent, PageSection } from "../../components/page";
import { GithubCard } from "../../components/github";

import "./style.scss";

const Portfolio = () => {
	setPage("portfolio");

	return (
		<PageContent name="portfolio">
			<PageSection name="top-section" className="gradient">
				<h1>Welcome to my Personal Portfolio</h1>
				<sub>
					The purpose of React is to help aspiring and established developers to realize the true pain of web
					development
				</sub>
			</PageSection>
			<PageSection name="mid-section">
				<h1>Some of my Best Projects</h1>
				<div class="githubGrid">
					<GithubCard name="cammo1123/Plex-Player" url="https://github.com/cammo1123/Plex-Player" />
					<GithubCard name="cammo1123/QuickKeys-CPP" url="https://github.com/cammo1123/QuickKeys-CPP" />
				</div>
			</PageSection>
		</PageContent>
	);
};

export default Portfolio;
