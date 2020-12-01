import data from '../data.json';
import Card from '../components/Card';
import { PieChart } from 'reaviz';
import Value from '../components/Value';

const CourseCard = ({ cardWidth }) => (
	<Card title={"Chosen Course"} className="mx-auto" style={{ width: "fit-content" }}>
		<PieChart
			height={cardWidth}
			width={cardWidth}
			data={data["Chosen Course"]}
		/>
	</Card>
)

export default CourseCard;
