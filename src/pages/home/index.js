import { setPage } from "../../components/functions";
import { PageContent, PageSection } from "../../components/page";
import "./style.scss";

export default function Home() {
	setPage("home");
	return (
		<PageContent name="home">
			<PageSection name="message" className="gradient fullpage center">
				<h1>Cameron</h1>
				<sub>I'm Pretty Cool (I Think)</sub>
			</PageSection>
		</PageContent>
	);
}
