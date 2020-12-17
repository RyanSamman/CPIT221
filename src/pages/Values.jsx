import Skeleton from 'react-loading-skeleton';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import GaugeChart from './../components/GaugeChart';
import Markdown from './../components/Markdown';
import MarkdownFile from './../components/MarkdownFile';
import Card from './../components/Card';
import valueMarkdown from './../markdown/Values.md';
import valueTweets from './../valueTweets.json';
import { Helmet } from 'react-helmet';

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


[Retrieved by Khaled](https://twitter.com/KhaledMAlasmari), The figures indicate the following: 

- A Majority of Students created a new twitter account for CPIT221.
- A Majority of Students either did not continue using Twitter, or have a seperate account for the tasks.
- More than half the students used smart phones to publish their tweets for CPIT221_Value.

Overall, a good portion of the students seem to not be confident in using Twitter to market themselves.
`

const Values = ({ width }) => (
	<>
		<Helmet>
			<title>CPIT221 - Values</title>
			<meta name="description" content="The Last Weekly Writing for CPIT221" />
		</Helmet>
		<center>
			<h1> What is Your Value? </h1>
		</center>
		<MarkdownFile width={width} url={valueMarkdown} />
		<center>
			{valueTweets.map((tweetData, i) => <Tweet key={i} width={width} {...tweetData} />)}
		</center>
		<div id="telegram" >
			<Card style={{ width, textAlign: "right" }} className="mx-auto" title="Maan's Telegram Group">
				<h3>مجموعة @PcExperience</h3>

				<h4>!مجموعة الحاسِب الأولى والأكبر عربيًا على منصة التِلِجرام</h4>

				<h4>!انضموا إلينا وستجدون ما يسركم بإذن الله، ومع أكثر من 22000 عضو</h4>

				<a target="_blank" rel="noreferrer" href="https://t.me/joinchat/AAAAADw9wnIXGte2nS6IMQ"><h4>رابط المجموعة </h4></a>
			</Card>
		</div>
		<br />
		<Card className="mx-auto" title="Some Data on the Tweets" >
			<GaugeChart name="Created a new Twitter Account for CPIT221 " Y={147 - 44} N={147 - (147 - 44)} />
			<GaugeChart name="Have the Default Twitter Photo " Y={66} N={147 - 66} />
			<GaugeChart name="Have 5 or Less Tweets" Y={83} N={147 - 83} />
			<GaugeChart name="Used Mobile to Post #CPIT221_Value" Y={20 + 57} N={147 - (20 + 57)} />
		</Card>

		<Markdown width={width} md={description2} />
	</>
);

export default Values;
