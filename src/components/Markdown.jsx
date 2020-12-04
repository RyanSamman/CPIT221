import React from 'react';
import { Card } from 'react-bootstrap';
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
	return React.createElement('h' + props.level, {id: slug}, props.children)
  }  

const Markdown = ({ width, md, style }) => (	
	<Card border="primary" style={{ width, border: "none", ...style }} className="mx-auto" >
		<Card.Body className="markdown-body">
			<ReactMarkdown plugins={[gfm]} renderers={{ heading: HeadingRenderer }} children={md} allowDangerousHtml />
		</Card.Body>
	</Card >
);

export default Markdown;
