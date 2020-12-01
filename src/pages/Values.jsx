import { TwitterTweetEmbed } from 'react-twitter-embed';

const tweets = [
	"1329655563987394561", // <- RAID0 SSDs
	"1329591890212171780",
	"1329197804896579589",
	"1330235111133114371",
	"1330247365886963712",
	"1329048742553661441",
	"1332254221203345408",
	"1330565962316337155",
	"1331602809280733184",
	"1330265888516403201",
	"1329837582029557760",
	"1329048742553661441",


]

const Values = ({ width }) => (
	<div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
		{tweets.map(id => <TwitterTweetEmbed tweetId={id} />)}
	</div>
);

export default Values;
