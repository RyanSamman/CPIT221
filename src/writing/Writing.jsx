import MarkdownFile from '../components/MarkdownFile';
import writings from './writings';
import { DiscussionEmbed } from 'disqus-react';
import { Helmet } from 'react-helmet';

const monthNames = [null, "January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
];

const Header = ({ width, name, date }) => {
	return (
		<center>
			<h1>{name}</h1>
			<p>{monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
		</center>
	);
}


const Writing = ({ width, id }) => {
	if (!writings[id]) {
		return (
			<p>
				No Writing Found
			</p>
		);
	}
	console.log(window.location.href)
	return (
		<>
			<Helmet>
				<title>CPIT221 - {writings[id].name}</title>
				<meta name="description" content="The Last Weekly Writing for CPIT221" />
			</Helmet>
			<Header width={width} {...writings[id]} />
			<MarkdownFile width={width} url={writings[id].path} />
			<br />
			<DiscussionEmbed
				shortname="CPIT221Visualization"
				config={
					{
						url: window.location.href,
						identifier: writings[id].name + "_0",
						title: writings[id].name,
					}
				}
			/>
		</>
	);
};

export default Writing;
