import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

// Add Ids for Anchors
// https://github.com/remarkjs/react-markdown/issues/69
function flatten(text, child) {
	return typeof child === 'string'
		? text + child
		: React.Children.toArray(child.props.children).reduce(flatten, text)
}

function HeadingRenderer(props) {
	var children = React.Children.toArray(props.children)
	var text = children.reduce(flatten, '')
	var slug = text.toLowerCase().replace(/\W/g, '-')
	return React.createElement('h' + props.level, { id: slug }, props.children)
}

const Markdown = ({ width, md, style }) => (
	<div style={{ width, ...style }} className="markdown-body mx-auto">
		<ReactMarkdown plugins={[gfm]} renderers={{ heading: HeadingRenderer }} children={md} allowDangerousHtml />
	</div>
);

export default Markdown;
