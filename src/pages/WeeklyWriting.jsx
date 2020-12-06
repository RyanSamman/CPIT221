import MarkdownFile from './../components/MarkdownFile';
import writingMarkdown from './../markdown/Writing.md'
import writingData from './../writing/writings';
import Card from './../components/Card';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


const WritingPost = ({ name, url, path, date, description }) => (
	<>
		<h5><a href={"/writing/" + url}>{name}</a> - {monthNames[date.getMonth()]} {date.getDate()}</h5>
		<p>{description}</p>
	</>
);

const OldWritings = ({ width }) => {
	return (
		<>
			<center><h1>Old Writings</h1></center>
			<Card style={{ border: "none" }} width={width} className="mx-auto">		
					{Object.keys(writingData).map(w => <WritingPost url={w} {...writingData[w]} />)}
			</Card>
		</>
	)
}

const WeeklyWriting = ({ width }) => {


	return (
		<>
			<OldWritings width={width} />
			<MarkdownFile width={width} url={writingMarkdown} />
		</>
	);
};

export default WeeklyWriting;
