import { useState } from 'react';

import blogWordCloud from './../wordCloud.png';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import MarkdownFile from '../components/MarkdownFile';
import homeMarkdown from './../markdown/Home.md';
import tweetMarkdown from './../markdown/Tweet.md';
import TableOfContents from './../markdown/TableOfContents.md';
import YoutubeVideo from './../components/YoutubeVideo';
import IntroYoutubeMarkdown from './../markdown/IntroYoutube.md';
import ReportMistakesMarkdown from './../markdown/FindFixReport.md';
import ProposalMarkdown from './../markdown/Proposal.md';
import LaTeXMarkdown from './../markdown/LaTeX.md';
import FinalReportMarkdown from './../markdown/FinalReport.md';
import ConclusionMarkdown from './../markdown/Conclusion.md'
import FadeIn from './../components/FadeIn';

import { BlockMath } from 'react-katex';
import { Helmet } from 'react-helmet';
import Skeleton from 'react-loading-skeleton';


const KaTeXDemo = () => {
	const [katex, setKatex] = useState("\\int_0^\\infty x^2 dx");

	return (
		<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
			<div className="my-auto">
				<input value={katex} onChange={(e) => setKatex(e.target.value)} />
			</div>
			<BlockMath math={katex}></BlockMath>
		</div>
	)
}

const Home = ({ width }) => {


	return (
		<div>
			<Helmet>
				<title>CPIT221 - Home</title>
				<meta name="description" content="A Website Visualizing CPIT221 and describing my Experience with the course." />
			</Helmet>

			<center className="py-5">
				<h5>From Zero To Hero...</h5>
				<center><h1>My Experience with CPIT221</h1></center>
				<h5>Ryan Samman</h5>
				<br />
				<img alt="BlogWordCloud" src={blogWordCloud} width={width} />
			</center>

			<MarkdownFile width={width} url={homeMarkdown} />

			<FadeIn width={1000}>
				<center>
					<TwitterTweetEmbed tweetId={"1330247365886963712"} placeholder={<Skeleton height={500} />} />
				</center>

				<MarkdownFile width={width} url={TableOfContents} />
			</FadeIn>

			<FadeIn width={500}>
				<MarkdownFile width={width} url={tweetMarkdown} />

				<center>
					<TwitterTweetEmbed tweetId={"1302887084252958721"} placeholder={<Skeleton height={500} />} />
				</center>
			</FadeIn>

			<FadeIn width={500}>
				<MarkdownFile width={width} url={IntroYoutubeMarkdown} />
				<center>
					<YoutubeVideo width={width} id={"uor4oVz-WJc"} />
				</center>
			</FadeIn>

			<FadeIn width={500}>
				<MarkdownFile width={width} url={ReportMistakesMarkdown} />
			</FadeIn>

			<FadeIn width={500}>
				<MarkdownFile width={width} url={ProposalMarkdown} />
			</FadeIn>

			<FadeIn width={500}>
				<MarkdownFile width={width} url={LaTeXMarkdown} />
			</FadeIn>

			<FadeIn width={500}>
				<KaTeXDemo />
			</FadeIn>

			<FadeIn width={500}>
				<MarkdownFile width={width} url={FinalReportMarkdown} />
			</FadeIn>

			<FadeIn width={500}>
				<MarkdownFile width={width} url={ConclusionMarkdown} />
			</FadeIn>
		</div>
	)
}

export default Home;
