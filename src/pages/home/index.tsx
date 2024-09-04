import { LinkToNewSite, PageContent, PageSection } from "../../components/page";
import "./style.scss";

export default function Home() {
	return (
		<PageContent name="home">
			<PageSection name="message" class="gradient fullpage center">
				<h1>Cameron Youell</h1>
				<sub>20yo Software Engineering Student at Maquarie University</sub>
				<br />
				<sub>ITS Repair Center Technician</sub>
			</PageSection>
			<PageSection class="split">
				<h1>A Bit About Me</h1>
				<p>
					I'm a software engineering student at Maquarie University, and I'm currently working as an ITS
					Repair Center Technician. I love to code, and I'm always looking for new projects to work on.
				</p>
			</PageSection>
			<PageSection class="split">
				<h1 class="tx-center">Where You Can Find Me</h1>
				<ul class="socialLinks">
					<LinkToNewSite icon="linkedin" url="https://linkedin.com/in/cammo1123" />
					<LinkToNewSite icon="instagram" url="https://instagram.com/cammo1123" />
					<LinkToNewSite icon="github" url="https://github.com/cammo11233" />
					<LinkToNewSite icon="discord" url="https://discord.com/users/341833124361011200" />
				</ul>
			</PageSection>
		</PageContent>
	);
}
