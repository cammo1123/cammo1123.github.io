import { SiteTitle } from "../../components/page";
import { WritingSection, Post } from "../../components/WritingSection";

import "./style.scss";

const posts: Post[] = [
	{
		title: "Writing drafts",
		date: new Date(Date.parse("October 11, 2023")),
		author: "Cameron Youell",
		content: `Writing is rarely completed without a number of drafts – be it a document for work,
        such as a report, or an assignment at university. You need to revise your first draft, as
        your first version may often be a "brain-dump" of information.
        <br/><br/>
        As writers, we need to understand the four key steps of planning, drafting, editing,
        and proofreading. However, drafting and editing are linked, and some view this as revising
        document versions.`,
	},
	{
		title: "Another Post",
		date: new Date(Date.parse("October 11, 2023")),
		content: `Drafting involves a lot of thought and planning. You must be ready to revisit ideas
        multiple times to ensure clarity and precision in your message.`,
	},
];

export default function ACOM1001() {
	return (
		<>
			<SiteTitle>ACOM1001</SiteTitle>
			<div class="acom1001">
				<div class="head">
					<div class="island">
						<h1>Cameron Youell - Academic Writing Portfolio</h1>
						<hr />
						<p>This is my ACOM1001 webpage, made completely from scratch, by me!</p>
					</div>
				</div>
				<div class="body">
					<WritingSection posts={posts} />
				</div>
			</div>
		</>
	);
}
