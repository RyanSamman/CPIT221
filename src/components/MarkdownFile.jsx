import { useState, useEffect } from 'react';
import Markdown from './Markdown';

const retrieveMarkdownText = async (url) => {
	const res = await fetch(url);
	return await res.text();
}

const MarkdownFile = ({ width, url }) => {
	const [markdown, setMarkdown] = useState("Loading Markdown....");

	useEffect(() => {
		retrieveMarkdownText(url)
			.then((setMarkdown))
			.catch(() => setMarkdown("Error Retrieving the Markdown!"));
	}, [url, markdown]);

	return (
		<Markdown width={width} md={markdown} />
	);
}


export default MarkdownFile;