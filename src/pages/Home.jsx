import { useState } from 'react';
import blogWordCloud from './../wordCloud.png';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import MarkdownFile from '../components/MarkdownFile';
import homeMarkdown from './../markdown/Home.md';
import tweetMarkdown from './../markdown/Tweet.md';
import TableOfContents from './../markdown/TableOfContents.md';
import YoutubeVideo from './../components/YoutubeVideo';
import firstVideoMarkdown from './../markdown/FirstVideo.md';
import firstTaskMarkdown from './../markdown/FirstTask.md';
import { InlineMath, BlockMath } from 'react-katex';
import Skeleton from 'react-loading-skeleton';


const Home = ({ width }) => {
	const [katex, setKatex] = useState("\\int_0^\\infty x^2 dx");

	return (
		<div>
			<center className="my-5">
				<h5>From Zero To Hero...</h5>
				<h1>My Experience with CPIT221</h1>
				<h5>Ryan Samman</h5>
				<br />
				<img alt="BlogWordCloud" src={blogWordCloud} width={width} />
			</center>
			<div style={{ border: "none" }}>
			</div>
			<MarkdownFile width={width} url={homeMarkdown} />
			<center>
				<TwitterTweetEmbed tweetId={"1330247365886963712"} placeholder={<Skeleton height={500}/>} />
			</center>

			<MarkdownFile width={width} url={TableOfContents} />

			<MarkdownFile width={width} url={tweetMarkdown} />

			<center>
				<TwitterTweetEmbed tweetId={"1302887084252958721"} placeholder={<Skeleton height={500}/>} />
			</center>
			<MarkdownFile width={width} url={firstVideoMarkdown} />

			<MarkdownFile width={width} url={firstTaskMarkdown} />
			<center>
				<YoutubeVideo width={width} id={"uor4oVz-WJc"} />
			</center>

			{/* No chance for XSS here, don't try it c: */}
			<center>
				<input value={katex} onChange={(e) => setKatex(e.target.value)} />
			</center>
			<BlockMath math={katex}></BlockMath>

			<center><h1>WIP - More coming soon :)</h1></center>
		</div>
	)
}

export default Home;
