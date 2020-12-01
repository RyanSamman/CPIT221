import blogWordCloud from './../wordCloud.png';
import Markdown from '../components/Markdown';
import MarkdownFile from '../components/MarkdownFile';
import homeMarkdown from './../markdown/Home.md';

const Home = ({ width }) => (
	<>
		<MarkdownFile width={width} url={homeMarkdown}/>
	</>
)

export default Home;