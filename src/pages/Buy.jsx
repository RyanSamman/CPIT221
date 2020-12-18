import { Card } from 'react-bootstrap';
import MarkdownFile from './../components/MarkdownFile';
import buyMarkdown from './../markdown/Buy.md';
import cs50Markdown from './../markdown/CS50.md';
import videos from './../videos.json';
import YoutubeVideo from './../components/YoutubeVideo';
import { Helmet } from 'react-helmet';
import Title from './../components/Title';

const Video = ({ width, id, name, description }) => {
	width *= 0.95;
	return (
		<div style={{ padding: 20 }}>
			<center>
				<h2>{name}</h2>
				<p>	{description}</p>
			</center>
			<div className="video mt-1 mb-3" >
				<YoutubeVideo width={width} id={id} />
			</div >
		</div>
	);
};


const Buy = ({ width }) => (
	<>
		<Helmet>
			<title>CPIT221 - Make Me Buy</title>
			<meta name="description" content="Make Me Buy Videos." />
		</Helmet>
		<Title>Make Me Buy</Title>
		<MarkdownFile width={width} url={buyMarkdown} />
		<div className="mx-auto" style={{ width: width }} >
			{videos.map((video, i) => <Video key={i} width={width} {...video} />)}
		</div>
		<MarkdownFile width={width} url={cs50Markdown} />
	</>
);

export default Buy;
