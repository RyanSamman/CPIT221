import Markdown from '../components/Markdown';
import MarkdownFile from '../components/MarkdownFile';
import writings from './writings';
import { DiscussionEmbed } from 'disqus-react';

const Header = ({ width, name, date, description }) => {
	return (
		<center>
			<h1>{name}</h1>
			<p>{date.toLocaleString()}</p>
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
			<Header width={width} {...writings[id]} />
			<MarkdownFile width={width} url={writings[id].path} />
			<br />
			<DiscussionEmbed
				className="mx-5"
				shortname="CPIT221Visualization"
				config={
					{
						url: window.location.href,
						identifier: writings[id].name + "_0",
						title: writings[id].name,
						// language: 'zh_TW' //e.g. for Traditional Chinese (Taiwan)	
					}
				}
			/>
		</>
	);
};

export default Writing;
