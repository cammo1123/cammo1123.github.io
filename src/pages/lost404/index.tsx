import { SiteTitle } from "../../components/page";
import "./style.scss";

export default function LOST404() {
	return (
		<>
			<SiteTitle>404 Not Found</SiteTitle>
			<div class="lost-404">
				<h1>404</h1>
				<p>Oops! The page you're looking for can't be found.</p>
				<a href="/" class="home-link">
					Go back home
				</a>
			</div>
		</>
	);
}
