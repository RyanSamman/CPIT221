import { TwitterTweetEmbed } from 'react-twitter-embed';
import GaugeChart from './../components/GaugeChart';
import Markdown from './../components/Markdown';
import MarkdownFile from './../components/MarkdownFile';
import Card from './../components/Card';
import valueMarkdown from './../markdown/Values.md';
import valueTweets from './../valueTweets.json';

const Tweet = ({ id, name, description, major }) => (
	<div className="my-2">
		<h3>{name} {major ? `- ${major}` : ""}</h3>
		<p>{description}</p>
		<TwitterTweetEmbed tweetId={id} placeholder={<div>Loading Tweet...</div>} />
	</div>
)

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
		<MarkdownFile width={width} url={valueMarkdown} />
		<center>
			{/*TODO: Loading Component*/}
			{valueTweets.map((tweetData, i) => <Tweet key={i} {...tweetData} />)}
		</center>
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
