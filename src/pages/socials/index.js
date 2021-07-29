import { setPage } from "../../components/functions"
import "./style.css";


export function Socials() {
	setPage("socials");

	return (
		<div className="center fullpage gradient">
			<div className="content">
				<h1 className="tx-center">Add my Socials</h1>
				<ul className="socials">
					<li>
						<a alt="instagram" target="_blank" rel="noreferrer" href="https://instagram.com/cammo1123">
							<i className="bx bxl-instagram"></i>
						</a>
					</li>
					<li>
						<a alt="instagram" target="_blank" rel="noreferrer" href="https://snapchat.com/add/cammo11233">
							<i className="bx bxl-snapchat"></i>
						</a>
					</li>
					<li>
						<a alt="instagram" target="_blank" rel="noreferrer" href="https://twitter.com/cammo1123">
							<i className="bx bxl-twitter"></i>
						</a>
					</li>
					<li>
						<a alt="instagram" target="_blank" rel="noreferrer" href="https://twitch.tv/cammo1123">
							<i className="bx bxl-twitch"></i>
						</a>
					</li>
					<li>
						<a alt="instagram" target="_blank" rel="noreferrer" href="https://discord.com/users/341833124361011200">
							<i className="bx bxl-discord"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}