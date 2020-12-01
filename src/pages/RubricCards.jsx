import Card from '../components/Card';
import data from '../data.json';
import GaugeChart from '../components/GaugeChart';

const RubricCards = ({ cardWidth = "" }) => (
	<>
		{
			Object.entries(data["Bar Plot"]).map(([category, catData]) => (
				<>
					<Card className="mx-auto" key={category} title={category} >
						{Object.entries(catData).map(([category, { Y, N }]) => (
							<GaugeChart key={category} name={category} Y={Y} N={N} />
						))}
					</Card>

					<br />
				</>
			))}
	</>
)

export default RubricCards;
