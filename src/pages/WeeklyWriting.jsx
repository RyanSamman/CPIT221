import MarkdownFile from './../components/MarkdownFile';
import Markdown from './../components/Markdown';
import writingMarkdown from './../markdown/Writing.md'
import writingData from './../writing/writings';
import Card from './../components/Card';
import { Helmet } from 'react-helmet';

const monthNames = [null, "January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
];


const WritingPost = ({ name, url, date, description }) => (
	<>
		<h5><a href={"/writing/" + url}>{name}</a> - {monthNames[date.getMonth()]} {date.getDate()}</h5>
		<p>{description}</p>
	</>
);

const markdown = `
My goal for the weekly writing was to **develop my writing skills to be good enough to start a personal blog**. 
Therefore, I decided to dedicate a good amount of time to preparing and writing each week! 

Below are all the weekly writings I've written for the CPIT221 course, covering topics such as **Networking, Teamwork, Visual Design, and more**!
`

const OldWritings = ({ width }) => {
	return (
		<>
			<center><h1>My Weekly Writings</h1></center>
			<Markdown width={width} md={markdown}></Markdown>
			<Card style={{ border: "none" }} width={width} className="mx-auto">
				{Object.keys(writingData).map(w => <WritingPost key={w} url={w} {...writingData[w]} />)}
			</Card>
		</>
	)
}

const WeeklyWriting = ({ width }) => {


	return (
		<>
			<Helmet>
				<title>CPIT221 - Weekly Writing</title>
				<meta name="description" content="Describing my thinking behind the Weekly Writings I've done for the Course." />
			</Helmet>
			<OldWritings width={width} />
			<MarkdownFile width={width} url={writingMarkdown} />
		</>
	);
};

export default WeeklyWriting;
