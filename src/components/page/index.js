export function PageContent(props) {
	return <div className={props.name}>{props.children}</div>;
}

export function PageSection(props) {
	return (
		<section className={props.name + " " + props.className}>
			<div className="content">{props.children}</div>
		</section>
	);
}

export function LinkToNewSite(props) {
	return (
		<li>
			<a alt={props.icon} target="_blank" rel="noreferrer" href={props.url}>
				<i className={"bx bxl-" + props.icon}></i>
			</a>
		</li>
	);
}
