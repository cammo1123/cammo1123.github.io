import { setPage } from "../../components/functions";
import { PageContent, PageSection } from "../../components/page";
import "./style.scss";

export default function Home() {
	setPage("home");
	return (
		<PageContent name="home">
			<PageSection name="message" class="gradient fullpage center">
				<h1>Cameron Youell</h1>
				<sub>18yo Software Engineering Student at Maquarie University</sub>
				<br />
				<sub>ITS Repair Center Technician</sub>
			</PageSection>
			<PageSection class="split">
				<h1>Portfolio</h1>
				<p>
					Welcome to my portfolio! I'm a software engineering student at Maquarie University, and I'm
					currently working as an ITS Repair Center Technician. I love to code, and I'm always looking for new
					projects to work on. I'm currently following/involved in the following projects:
				</p>
				<h3>SerenityOS</h3>
				<p>
					SerenityOS is a hobby operating system project, aiming to be a fully-featured Unix-like operating
					system. It is written from scratch, with a focus on clean code and good architecture. It is written
					in C++ and Assembly, and is built with a custom toolchain.
				</p>
				<h4>My Contributions</h4>
				<div>
					<a href="https://github.com/SerenityOS/serenity/pull/14019">LibGUI+Browser: Add Vertical Tabs</a>
					<p>
						In this PR, I added vertical tabs to the systems GUI library, and added them to the browser. My
						contribution was showcased in{" "}
						<a href="https://youtu.be/c5m1xE-_hJU?t=622">SerenityOS update (May 2022)</a>
					</p>
				</div>
			</PageSection>
		</PageContent>
	);
}
