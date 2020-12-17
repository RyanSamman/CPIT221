import Card from '../components/Card';
import Markdown from './../components/Markdown';
import data from '../data.json';
import GaugeChart from '../components/GaugeChart';
import { Helmet } from 'react-helmet';

const markdown = `


<center><h1>Proposal Grading Rubric</h1></center>

There are some points which nearly all the groups failed to implement, and hopefully the next batch of students would see these charts, and know to what they need to focus on!

Ideally, this visualization would ideally help the professors tailor their teaching, and emphasize more on the areas which a significant amount of students have missed.
`

const markdown2 = `
<center><h1>Grading the Proposal</h1></center>

Ultimately, a good proposal isn't measured by whether or not it has covered certain points in the rubric.
While the rubric covers the layout of the proposal, it doesn't reflect the quality of contents of the proposal, the level of convincing, and the recipient's feedback. 
However, it is understandable for the grading scheme to stay as is, as there is no concrete way of measuring those aspects, and is a massive time sink.


`

const RubricCards = ({ cardWidth = "" }) => (
	<>
		<Helmet>
			<title>CPIT221 - Proposal Rubric</title>
			<meta name="description" content="Rubric of the Proposal." />
		</Helmet>
		<Markdown width={cardWidth} md={markdown} />
		<div style={{ display: "flex", flexDirection: "row", flexFlow: "wrap", justifyContent: "center", alignContent: "flex-start"}}>
		{Object.entries(data["Bar Plot"]).map(([category, catData]) => (
			<>
				<Card className="m-2" key={category} title={category} >
					{Object.entries(catData).map(([category, { Y, N }]) => (
						<GaugeChart key={category} name={category} Y={Y} N={N} />
					))}
				</Card>

				<br />
			</>
		))}
		</div>
		<Markdown width={cardWidth} md={markdown2}/>
	</>
)

export default RubricCards;
