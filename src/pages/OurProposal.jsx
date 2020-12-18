import MarkdownFile from './../components/MarkdownFile';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import ourProposal1Markdown from './../markdown/OurProposal1.md';
import ourProposal2Markdown from './../markdown/OurProposal2.md';
import ourProposal3Markdown from './../markdown/OurProposal3.md';
import Skeleton from 'react-loading-skeleton';
import { Helmet } from 'react-helmet';
import Title from './../components/Title';
import FadeIn from './../components/FadeIn';

const OurProposal = ({ width }) => (
	<>
		<Helmet>
			<title>CPIT221 - Our Proposal</title>
			<meta name="description" content="Our Proposal for improving the CPIT221 Course" />
		</Helmet>

		<Title>Our Proposal <br /> Modernizing CPCS202</Title>

		<MarkdownFile width={width} url={ourProposal1Markdown} />
		<FadeIn height={500}>
			<center>
				<br />
				<TwitterTweetEmbed tweetId="1327417806917410818" placeholder={<Skeleton height={500} />} />
			</center>
		</FadeIn>
		<FadeIn height={500}>
			<MarkdownFile width={width} url={ourProposal2Markdown} />
			<center>
				<br />
				<TwitterTweetEmbed tweetId="1327445637915348994" placeholder={<Skeleton height={500} />} />
			</center>
		</FadeIn>
		<FadeIn height={500}>

			<MarkdownFile width={width} url={ourProposal3Markdown} />
		</FadeIn>
		<FadeIn height={500}>
			<center>
				<br />
				<TwitterTweetEmbed tweetId="1328294654371131392" placeholder={<Skeleton height={500} />} />
			</center>
		</FadeIn>

	</>

)

export default OurProposal;