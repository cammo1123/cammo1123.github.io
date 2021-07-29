import { setPage } from "../../components/functions";
import { GitHubSearch } from "../../components/github";

export function Projects() {
	setPage("projects");
	return (
		<div className="content">
			<GitHubSearch />
		</div>
	);
}
