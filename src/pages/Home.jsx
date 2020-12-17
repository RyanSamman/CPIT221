import { useState } from 'react';

import Title from './../components/Title';
import blogWordCloud from './../wordCloud.png';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import MarkdownFile from '../components/MarkdownFile';
import homeMarkdown from './../markdown/Home.md';
import tweetMarkdown from './../markdown/Tweet.md';
import TableOfContents from './../markdown/TableOfContents.md';
import YoutubeVideo from './../components/YoutubeVideo';
import firstVideoMarkdown from './../markdown/FirstVideo.md';
import firstTaskMarkdown from './../markdown/FirstTask.md';
import ReportMistakesMarkdown from './../markdown/FindFixReport.md';
import ProposalMarkdown from './../markdown/Proposal.md';
import LaTeXMarkdown from './../markdown/LaTeX.md';
import FinalReportMarkdown from './../markdown/FinalReport.md';
import ConclusionMarkdown from './../markdown/Conclusion.md'

import { BlockMath } from 'react-katex';
import { Helmet } from 'react-helmet';
import Skeleton from 'react-loading-skeleton';


const Home = ({ width }) => {
	const [katex, setKatex] = useState("\\int_0^\\infty x^2 dx");

	return (
		<div>
			<Helmet>
				<title>CPIT221 - Home</title>
				<meta name="description" content="A Website Visualizing CPIT221 and describing my Experience with the course." />
			</Helmet>
			<center className="my-5">
				<h5>From Zero To Hero...</h5>
				<Title>My Experience with CPIT221</Title>
				<h5>Ryan Samman</h5>
				<br />
				<img alt="BlogWordCloud" src={blogWordCloud} width={width} />
			</center>
			<div style={{ border: "none" }}>
			</div>
			<MarkdownFile width={width} url={homeMarkdown} />
			<center>
				<TwitterTweetEmbed tweetId={"1330247365886963712"} placeholder={<Skeleton height={500} />} />
			</center>

			<MarkdownFile width={width} url={TableOfContents} />

			<MarkdownFile width={width} url={tweetMarkdown} />

			<center>
				<TwitterTweetEmbed tweetId={"1302887084252958721"} placeholder={<Skeleton height={500} />} />
			</center>
			<MarkdownFile width={width} url={firstVideoMarkdown} />

			<MarkdownFile width={width} url={firstTaskMarkdown} />
			<center>
				<YoutubeVideo width={width} id={"uor4oVz-WJc"} />
			</center>

			<MarkdownFile width={width} url={ReportMistakesMarkdown} />
			<MarkdownFile width={width} url={ProposalMarkdown} />
			<MarkdownFile width={width} url={LaTeXMarkdown} />
			{/* No chance for XSS here, don't try it c: */}
			<center>
				<input value={katex} onChange={(e) => setKatex(e.target.value)} />
			</center>
			<BlockMath math={katex}></BlockMath>
			<MarkdownFile width={width} url={FinalReportMarkdown} />
			<MarkdownFile width={width} url={ConclusionMarkdown} />
		</div>
	)
}

export default Home;
