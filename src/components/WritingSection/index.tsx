import { Component, For } from "solid-js";
import "./style.scss";

export interface Post {
	title: string;
	date?: Date;
	author?: string;
	content: string;
	disclaimer?: string;
}

interface WritingSectionProps {
	posts: Post[];
	date_options?: Intl.DateTimeFormatOptions;
}

export const WritingSection: Component<WritingSectionProps> = (props) => {
	const date_options = props.date_options ?? {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	return (
		<div>
			<For each={props.posts}>
				{(post) => {
					const formatted_date_string = post.date?.toLocaleDateString(undefined, date_options);

					return (
						<section class="writing_section">
							<h2>{post.title}</h2>
							<div class="information">
								{post.date !== undefined ? <p class="date">{formatted_date_string}</p> : <></>}
								{post.author !== undefined ? <p class="author">By {post.author}</p> : <></>}
							</div>
							<p innerHTML={post.content} />
							{post.disclaimer !== undefined ? <p class="disclaimer">{post.disclaimer}</p> : <></>}
						</section>
					);
				}}
			</For>
		</div>
	);
};
