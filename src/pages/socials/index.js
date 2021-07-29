import { setPage } from "../../components/functions"
import "./style.css";


export default function Socials() {
	setPage("socials");

	return (
		<div className="center fullpage gradient">
			<div className="content">
				<h1 className="tx-center">Add my Socials</h1>
				<ul className="socials">
					{linkToNewSite("instagram", "https://instagram.com/cammo1123")}
					{linkToNewSite("snapchat", "https://snapchat.com/add/cammo11233")}
					{linkToNewSite("twitter", "https://twitter.com/cammo1123")}
					{linkToNewSite("twitch", "https://twitch.tv/cammo1123")}
					{linkToNewSite("discord", "https://discord.com/users/341833124361011200")}
				</ul>
			</div>
		</div>
	);

	function linkToNewSite(icon, url) {
		return <li>
			<a alt={icon} target="_blank" rel="noreferrer" href={url}>
				<i className={"bx bxl-" + icon}></i>
			</a>
		</li>;
	}
}