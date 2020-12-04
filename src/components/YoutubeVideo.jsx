
const YoutubeVideo = ({ id, width }) => (

	<div className="video mt-1 mb-3" >
		<iframe
			title={id}
			width={width}
			height={width * 0.5625}
			src={`https://www.youtube.com/embed/${id}`}
			frameBorder="0"
		/>
	</div >
)

export default YoutubeVideo;