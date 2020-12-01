import MarkdownFile from './../components/MarkdownFile';
import writingMarkdown from './../markdown/Writing.md';

const Writing = ({ width }) => (
	<MarkdownFile width={width} url={writingMarkdown} />
);

export default Writing;
