import { Helmet } from 'react-helmet';

const Page404 = () => (
	<>
		<Helmet>
			<title>CPIT221 - Proposal Rubric</title>
			<meta name="description" content="Rubric of the Proposal." />
		</Helmet>
		<div style={{ minHeight: "83vh" }}>
			<center>
				<h1>Page Not Found!</h1>
				<a href="/"><p>Go Back to the Homepage</p></a>
			</center>
		</div>
	</>
);


export default Page404;
