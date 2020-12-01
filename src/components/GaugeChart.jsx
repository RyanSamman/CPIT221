import { Card } from 'react-bootstrap';
import { LinearGauge } from 'reaviz';

export default function BarChart({ name, Y, N }) {
	const percentage = Math.round(100 * Y / (Y + N));

	return (
		<>
			<Card.Subtitle className="mb-2 mt-1">{`${name} - ${percentage}%`}</Card.Subtitle>
			<LinearGauge
				height={50}
				maxValue={Y + N}
				data={{ key: name, data: Y }}
			/>
			<br />
		</>
	)
}