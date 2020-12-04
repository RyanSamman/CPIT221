import Markdown from './../components/Markdown';
import YoutubeVideo from './../components/YoutubeVideo';

const title = `
<center>
<h1>Our Proposal - Page Not Completed</h1>
</center>

[Google Drive Link to the Survey Data, Slides, and Full Proposal](https://drive.google.com/drive/folders/1fS-peh5vJn7GGoro9QvfD5v4QFuUaZeo)
`

const OurProposal = ({ width }) => (
	<>
		<Markdown width={width} md={title} />
		<center>
			<YoutubeVideo width={width} id={"1lalKs9CZtw"} />
		</center>
	</>
)

export default OurProposal;