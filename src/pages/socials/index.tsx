import { setPage } from "../../components/functions";
import { PageContent, PageSection, LinkToNewSite } from "../../components/page";

import "./style.scss";

const Socials = () => {
	setPage("socials");

	return (
		<PageContent name="socials">
			<PageSection name="message" class="gradient fullpage center">
				<h1 class="tx-center">Add me on Social Media</h1>
				<ul class="socialLinks">
					<LinkToNewSite icon="instagram" url="https://instagram.com/cammo1123" />
					<LinkToNewSite icon="snapchat" url="https://snapchat.com/add/cammo11233" />
					<LinkToNewSite icon="twitter" url="https://twitter.com/cammo1123" />
					<LinkToNewSite icon="twitch" url="https://twitch.tv/cammo1123" />
					<LinkToNewSite icon="discord" url="https://discord.com/users/341833124361011200" />
				</ul>
			</PageSection>
		</PageContent>
	);
};

export default Socials;
