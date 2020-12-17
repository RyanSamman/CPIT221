import data from '../data.json';
import Markdown from './../components/Markdown';
import { PieChart } from 'reaviz';
import { Helmet } from 'react-helmet';
import Title from './../components/Title';

const markdown = `
The Majority of students have chosen CPCS202 as the target for their proposal, [including our group](/proposal/ours). 
`;

const markdown2 = `

However, what is suprised me the most is that nobody has chosen **STAT210**! 

While most of the proposals were directed to CPCS202, I believe that STAT210 needs the most improvement out of the courses we are taking.

<center><h3>Statistics is a logical and natural subject.</h3></center>

However, the way it is explained emphasizes memorization over understanding, not a strong understanding of statistics.
Furthermore, the official resources (like the slides) only give the facts, not how or why those concepts work. 
Suprisingly, the majority of the professors teach directly from the slides!
This leaves the students uninterested in the subject, and unprepared for using statistics in the future!
`

const CourseCard = ({ cardWidth }) => (
	<>
		<Helmet>
			<title>CPIT221 - Proposal Chosen Courses</title>
			<meta name="description" content="The Chosen Proposal for the courses." />
		</Helmet>
		<Title>Chosen Course for the Proposal</Title>
		<Markdown width={cardWidth} md={markdown} />
		<div className="mx-auto" style={{ width: "fit-content" }}>
			<PieChart
				height={cardWidth}
				width={cardWidth}
				data={data["Chosen Course"]}
			/>
		</div>
		<Markdown width={cardWidth} md={markdown2} />
	</>
)

export default CourseCard;
