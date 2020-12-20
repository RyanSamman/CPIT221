import { useState } from 'react';

import blogWordCloud from './../wordCloud.png';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import MarkdownFile from '../components/MarkdownFile';
import YoutubeVideo from './../components/YoutubeVideo';

import FadeIn from './../components/FadeIn';

import homeMarkdown from './../markdown/Home.md';
import tweetMarkdown from './../markdown/Tweet.md';
import TableOfContents from './../markdown/TableOfContents.md';
import IntroYoutubeMarkdown from './../markdown/IntroYoutube.md';
import OnlineConversationMarkdown from './../markdown/OnlineConversation.md';
import ReportMistakesMarkdown from './../markdown/FindFixReport.md';
import MakeMeBuyMarkdown from './../markdown/Homebuy.md';
import ProposalMarkdown from './../markdown/Proposal.md';
import LaTeXMarkdown from './../markdown/LaTeX.md';
import FinalReportMarkdown from './../markdown/FinalReport.md';
import FinalReportMarkdown2 from './../markdown/FinalReport2.md';
import ConclusionMarkdown from './../markdown/Conclusion.md'

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
			<MarkdownFile url={homeMarkdown} />

			<FadeIn height={500}>
				<center>
					<TwitterTweetEmbed tweetId={"1330247365886963712"} placeholder={<Skeleton height={500} />} />
				</center>
			</FadeIn>

			<FadeIn height={700}>
				<MarkdownFile url={TableOfContents} />
			</FadeIn>

			<div id="suprise" />
			<FadeIn height={300}>
				<MarkdownFile url={tweetMarkdown} />
			</FadeIn>
			<FadeIn height={500}>
				<center>
					<TwitterTweetEmbed tweetId={"1302887084252958721"} placeholder={<Skeleton height={500} />} />
				</center>
			</FadeIn>

			<div id="first-task" />
			<FadeIn height={1000}>
				<MarkdownFile url={IntroYoutubeMarkdown} />
			</FadeIn>

			<div id="online-conversation" />
			<FadeIn height={500}>
				<MarkdownFile url={OnlineConversationMarkdown} />
			</FadeIn>

			<div id="fix-report" />
			<FadeIn height={300}>
				<MarkdownFile url={ReportMistakesMarkdown} />
			</FadeIn>

			<div id="make-me-buy" />
			<FadeIn height={300}>
				<MarkdownFile url={MakeMeBuyMarkdown} />
			</FadeIn>

			<FadeIn height={500}>
				<YoutubeVideo width={width} id={"zigvhb_FRtU"} />
			</FadeIn>


			<div id="proposal1" />
			<FadeIn height={500}>
				<MarkdownFile url={ProposalMarkdown} />
			</FadeIn>

			<div id="latex" />
			<FadeIn height={500}>
				<MarkdownFile url={LaTeXMarkdown} />
			</FadeIn>

			<FadeIn height={100}>
				<KaTeXDemo />
			</FadeIn>

			<FadeIn height={500}>
				<center>
					<TwitterTweetEmbed tweetId="1336080342067916800" placeholder={<Skeleton height={500} />} />
				</center>
			</FadeIn>

			<div id="final-report" />
			<FadeIn height={500}>
				<MarkdownFile url={FinalReportMarkdown} />
			</FadeIn>

			<FadeIn height={800}>
				<center>
					<TwitterTweetEmbed tweetId="1332317775356973057" placeholder={<Skeleton height={500} />} />
				</center>
			</FadeIn>

			<FadeIn height={500}>
				<MarkdownFile url={FinalReportMarkdown2} />
			</FadeIn>

			<div id="end" />
			<FadeIn height={400}>
				<MarkdownFile url={ConclusionMarkdown} />
			</FadeIn>
		</div >
	)
}

export default Home;
