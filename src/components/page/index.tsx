export function PageContent(props: { name: string, children: any }) {
	return <div className={props.name}>{props.children}</div>;
}

export function PageSection(props: { name?: string, className?: string, children: any }) {
	return (
		<section className={props.name + " " + props.className}>
			<div className="content">{props.children}</div>
		</section>
	);
}

export function LinkToNewSite(props: { icon: string, url: string }) {
	return (
		<li>
			<a target="_blank" rel="noreferrer" href={props.url}>
				<i className={"bx bxl-" + props.icon}></i>
			</a>
		</li>
	);
}
