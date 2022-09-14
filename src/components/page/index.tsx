import { JSX } from "solid-js";

const PageContent = (props: { name: string; children: JSX.Element }) => {
	return <div class={props.name}>{props.children}</div>;
};

const PageSection = (props: { name?: string; className?: string; children: JSX.Element }) => {
	return (
		<section class={`${props.name ?? ""} ${props.className ?? ""}`}>
			<div class="content">{props.children}</div>
		</section>
	);
};

const ContentPane = (props: { children: JSX.Element }) => {
	return <div id="content">{props.children}</div>;
};

const LinkToNewSite = (props: { icon: string; url: string }) => {
	return (
		<li>
			<a aria-label={props.icon} target="_blank" rel="noreferrer" href={props.url}>
				<i class={"bx bxl-" + props.icon}></i>
			</a>
		</li>
	);
};

export { ContentPane, PageContent, PageSection, LinkToNewSite };
