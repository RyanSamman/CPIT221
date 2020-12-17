import { Card } from 'react-bootstrap';
import MarkdownFile from './../components/MarkdownFile';
import buyMarkdown from './../markdown/Buy.md';
import videos from './../videos.json';
import YoutubeVideo from './../components/YoutubeVideo';
import { Helmet } from 'react-helmet';

const Video = ({ width, id, name, description }) => {
	width *= 0.95;
	return (
		<Card.Body>
			<center>
				<h2>{name}</h2>
				<p>	{description}</p>
			</center>
			<div className="video mt-1 mb-3" >
				<YoutubeVideo width={width} id={id} />
			</div >
		</Card.Body>
	);
};


const Buy = ({ width }) => (
	<>
		<Helmet>
			<title>CPIT221 - Make Me Buy</title>
			<meta name="description" content="Make Me Buy Videos." />
		</Helmet>
		<center>
			<h1>
				Make Me Buy
			</h1>
		</center>
		<MarkdownFile width={width} url={buyMarkdown} />
		<Card border="primary" className="mx-auto" style={{ border: "none", width: width }} >
			{videos.map((video, i) => <Video key={i} width={width} {...video} />)}
		</Card>
	</>
);

export default Buy;
