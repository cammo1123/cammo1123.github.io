import './style.css'

export function githubCard(name, des, link) {
	return (
		<a alt={name} href={link} target="_blank" rel="noreferrer" className="githubCard">
			<div>
				<img alt="github avatar" src="https://avatars.githubusercontent.com/u/36214028" />
			</div>
			<div>
				<h1>cammo1123/{name}</h1>
				<p>{des}</p>
			</div>
		</a>
	);
}