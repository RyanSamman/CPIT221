import MarkdownFile from './../components/MarkdownFile';
import YoutubeVideo from './../components/YoutubeVideo';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import ourProposalMarkdown from './../markdown/OurProposal.md';
import Skeleton from 'react-loading-skeleton';
import { Helmet } from 'react-helmet';
import Title from './../components/Title';

const OurProposal = ({ width }) => (
	<>
		<Helmet>
			<title>CPIT221 - Our Proposal</title>
			<meta name="description" content="Our Proposal for improving the CPIT221 Course" />
		</Helmet>
		<Title>Our Proposal</Title>
		<MarkdownFile width={width} url={ourProposalMarkdown} />
		<center>
			<YoutubeVideo width={width} id={"1lalKs9CZtw"} />

			<TwitterTweetEmbed tweetId="1328294654371131392" placeholder={<Skeleton height={500} />} />
		</center>
	</>
)

export default OurProposal;