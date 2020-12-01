import data from '../data.json';
import Card from '../components/Card';
import { BarChart } from 'reaviz';

const GradeCard = ({ cardWidth }) => (
	<Card title={"Grades"} className="mx-auto" style={{ width: "fit-content" }}>
		<BarChart
			width={cardWidth}
			height={cardWidth}
			data={data['Grades']}
		/>
		<br />
	</Card>
)

export default GradeCard;