import Card from 'react-bootstrap/Card';

export default function CardTemplate({ title, children, className="", style={ width: '20rem' }, border="primary" }) {
	return (
		<>
			<Card border={border} style={style} className={className}>
				{title ? <Card.Header>{title}</Card.Header> : null}
				<Card.Body>
					{children}
				</Card.Body>
			</Card>
		</>
	)
}
