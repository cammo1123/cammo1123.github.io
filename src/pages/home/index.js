import { setPage } from "../../components/functions"
import "./style.css"


export function Home() {
	setPage("home");
	return (
		<div className="center fullpage gradient">
			<div className="content message">
				<h1>Cameron</h1>
				<sub>I'm Pretty Cool (I Think)</sub>
			</div>
		</div>
	);
}
