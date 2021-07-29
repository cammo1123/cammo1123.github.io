import { setPage } from "../../components/functions"
import { githubCard } from "../../components/github"

export function Projects() {
	setPage("projects");
	return (
		<div className="content">
			<h1> Current Projects </h1>
			<div className="githubGrid">
				{githubCard("PlexPlayer", "A simple player for non Plex premium users", "https://github.com/cammo1123/Plex-Player")}
				{githubCard("Sentral_Companion", "ARCHIVED - A Companion app for https://web2.schoolName.schools.nsw.edu.au/portal ", "https://github.com/cammo1123/sentral_companion")}
				{githubCard("cammo1123.github.io", "This Website :^)", "https://github.com/cammo1123/cammo1123.github.io")}
			</div>
		</div>
	);
}