import MarkdownFile from './../components/MarkdownFile';
import YoutubeVideo from './../components/YoutubeVideo';
import ourProposalMarkdown from './../markdown/OurProposal.md';

const OurProposal = ({ width }) => (
	<>
		<MarkdownFile width={width} url={ourProposalMarkdown} />
		<center>
			<YoutubeVideo width={width} id={"1lalKs9CZtw"} />
		</center>
	</>
)

export default OurProposal;