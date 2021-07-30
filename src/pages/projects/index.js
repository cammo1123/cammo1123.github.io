import { setPage } from "../../components/functions";
import { GitHubSearch } from "../../components/github";
import { PageContent, PageSection } from "../../components/page";

import "./style.css";

export default function Projects() {
	setPage("projects");
	return (
		<PageContent name="projects">
			<PageSection>
				<GitHubSearch />
			</PageSection>
		</PageContent>
	);
}
