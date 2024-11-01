import { SiteTitle } from "../../components/page";
import { WritingSection, Post } from "../../components/WritingSection";

import "./style.scss";

export default function ACOM1001() {
	const posts: Post[] = [
		{
			title: "Preventative Cyber Hygiene Practices",
			date: new Date(Date.parse("29 May 2022")),
			author: "Cameron Youell",
			content: `
			An excellent way to reduce the leading cause of the 2021 Twitch leak would be to ensure that all configuration changes are tested internally before being deployed to production servers. An excellent potential system for this would be:
			<br>
			<br>
			<center>Propose changes → Implement changes on the test server → Pentest (2 weeks) → Deploy with heightened monitoring (4 weeks) → continue with normal monitoring</center>
			<br>
			This system should also be used alongside the principle of least privilege.  The principle of least privilege is where users/processes get the minimum amount of privilege to complete the task. So, for example, an employee who needs to modify users' emails would not get the ability to change all the user's information. Another example would be if an employee needs to read files/folders from a shared network drive (server), they would not be able to write/modify files/folders as that is not needed to read from the server.
			`
		},
		{
			title: "Twitch Cybersecurity Incident Response Plan",
			date: new Date(Date.parse("27 Apr 2022")),
			author: "Cameron Youell",
			content: `
			A productive and intelligent cyber security incident response plan could have facilitated a better response when related to the identification, response and mitigation of the impacts of the breach. Therefore, I will briefly go over some proactive steps that could have aided in the prevention/mitigation of the outcome.
			<h4>Using bare minimal privileges</h4>
			Bare minimal access is a method of proactive mitigation. It is where an administrator looks at the sort of information/services a user will need and gives them the bare minimum amount of privileges. This means that if the user gets hacked, the hacker is extremely limited in the amount of information/damage they can cause
			<h4>Monitoring access to high-risk data</h4>
			Monitoring high-risk data access would allow administrators to quickly tell if something had assessed data that was unexpected and set up methods for incidents to be automatically detected and then alert system administrators.
			<h4>Have an immediate template response for the media</h4>
			In the case of twitch, it would have been wise to have a template response for hacks and incidents like these. It would allow them to instantly get on top of speculation and prevent misinformed assumptions from impacting them as a business by creating internet-fueled mass panic.
			<h4>Inform users on how to minimise the impact</h4>
			Twitch should have also sent out emails to all its users, informing them to, as a precaution, change their passwords, and be on the lookout for unauthorised access to personal information. The communication between Twitch and its users would further reduce the impact on users and their businesses.
			`
		},
	]

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
};
