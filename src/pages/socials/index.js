import { setPage } from "../../components/functions";
import "./style.css";

export default function Socials() {
	setPage("socials");

	return (
		<div className="center fullpage gradient">
			<div className="content">
				<h1 className="tx-center">Add my Socials</h1>
				<ul className="socials">
					<LinkToNewSite icon="instagram" url="https://instagram.com/cammo1123" />
					<LinkToNewSite icon="snapchat" url="https://snapchat.com/add/cammo11233" />
					<LinkToNewSite icon="twitter" url="https://twitter.com/cammo1123" />
					<LinkToNewSite icon="twitch" url="https://twitch.tv/cammo1123" />
					<LinkToNewSite icon="discord" url="https://discord.com/users/341833124361011200" />
				</ul>
			</div>
		</div>
	);

	function LinkToNewSite(props) {
		return (
			<li>
				<a alt={props.icon} target="_blank" rel="noreferrer" href={props.url}>
					<i className={"bx bxl-" + props.icon}></i>
				</a>
			</li>
		);
	}
}
