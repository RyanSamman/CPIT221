import Skeleton from 'react-loading-skeleton';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import GaugeChart from './../components/GaugeChart';
import Markdown from './../components/Markdown';
import MarkdownFile from './../components/MarkdownFile';
import Card from './../components/Card';
import valueMarkdown from './../markdown/Values.md';
import valueTweets from './../valueTweets.json';
import { Helmet } from 'react-helmet';
import Title from './../components/Title';
import GPT2Markdown1 from './../markdown/GPT-2_1.md';
import GPT2Markdown2 from './../markdown/GPT-2_2.md';
import { ReactComponent as ValueCloud } from './../wordcloud.svg';

import FadeIn from './../components/FadeIn';

const Tweet = ({ id, width, name, description, major }) => {

	return (
		<div className="my-4">
			<h3>{name} {major ? `- ${major}` : ""}</h3>
			{!description ? null : <Markdown width={width} md={description}></Markdown>}
			<TwitterTweetEmbed tweetId={id} placeholder={<Skeleton height={500} />} />
		</div>

	)
}

const description2 = `
<center><h1>Twitter Data</h1></center>


[Retrieved by Khaled](https://twitter.com/KhaledMAlasmari), The figures *may* indicate the following: 

- A Majority of Students created a new twitter account for CPIT221.
- A Majority of Students either did not continue using Twitter, or have a seperate account for the tasks.
- More than half the students used smart phones to publish their tweets for CPIT221_Value.

Overall, a good portion of the students are not convinced in using Twitter outside the course. 
Showing incoming students the positive effects of using Twitter, through this website, or people who have benifitted from twitter may help convince them of the utility of social media!
`

const Values = ({ width }) => (
	<>
		<Helmet>
			<title>CPIT221 - Values</title>
			<meta name="description" content="The Last Weekly Writing for CPIT221" />
		</Helmet>
		<Title>What is Your Value?</Title>
		<MarkdownFile width={width} url={valueMarkdown} />
		<center>
			{valueTweets.map((tweetData, i) => <FadeIn height={500}><Tweet key={i} width={width} {...tweetData} /></FadeIn>)}
		</center>
		<FadeIn height={500}>
			<div id="telegram" >
				<Card style={{ width, textAlign: "right" }} className="mx-auto" title="Maan's Telegram Group">
					<h3>مجموعة @PcExperience</h3>

					<h4>!مجموعة الحاسِب الأولى والأكبر عربيًا على منصة التِلِجرام</h4>

					<h4>!انضموا إلينا وستجدون ما يسركم بإذن الله، ومع أكثر من 22000 عضو</h4>

					<a target="_blank" rel="noreferrer" href="https://t.me/joinchat/AAAAADw9wnIXGte2nS6IMQ"><h4>رابط المجموعة </h4></a>
				</Card>
			</div>
		</FadeIn>
		<br />
		<FadeIn height={500}>
			<Card className="mx-auto" title="Some Data on the Tweets" >
				<GaugeChart name="Created a new Twitter Account for CPIT221 " Y={147 - 44} N={147 - (147 - 44)} />
				<GaugeChart name="Have the Default Twitter Photo " Y={66} N={147 - 66} />
				<GaugeChart name="Have 5 or Less Tweets" Y={83} N={147 - 83} />
				<GaugeChart name="Used Mobile to Post #CPIT221_Value" Y={20 + 57} N={147 - (20 + 57)} />
			</Card>
		</FadeIn>
		<div id="data"></div>
		<FadeIn height={500}>
			<Markdown width={width} md={description2} />

			<Markdown width={width} md={"<center><h1>Scraping #CPIT221_Value</h1></center>"} />
			<ValueCloud viewBox="0 0 941 300" width={"100%"} />
		</FadeIn>
		<FadeIn height={500}>
			<center><p style={{ fontSize: 10 }}>Word Cloud of <a href="https://twitter.com/hashtag/CPIT221_Value">#CPIT_Value</a></p></center>
			<MarkdownFile width={width} url={GPT2Markdown1} />
			<center>
				<TwitterTweetEmbed tweetId="1330152458820128772" placeholder={<Skeleton height={500} />} />
			</center>
			<MarkdownFile width={width} url={GPT2Markdown2} />
			<center>
				<TwitterTweetEmbed tweetId="1331566216784318467" placeholder={<Skeleton height={500} />} />
			</center>
		</FadeIn>

	</>
);

export default Values;
