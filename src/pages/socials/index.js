import { setPage } from "../../components/functions";
import { PageContent, PageSection, LinkToNewSite } from "../../components/page";

import "./style.scss";

export default function Socials() {
	setPage("socials");

	return (
		<PageContent name="socials">
			<PageSection name="message" className="gradient fullpage center">
				<h1 className="tx-center">Add my Socials</h1>
				<ul className="socialLinks">
					<LinkToNewSite icon="instagram" url="https://instagram.com/cammo1123" />
					<LinkToNewSite icon="snapchat" url="https://snapchat.com/add/cammo11233" />
					<LinkToNewSite icon="twitter" url="https://twitter.com/cammo1123" />
					<LinkToNewSite icon="twitch" url="https://twitch.tv/cammo1123" />
					<LinkToNewSite icon="discord" url="https://discord.com/users/341833124361011200" />
				</ul>
			</PageSection>
		</PageContent>
	);
}
