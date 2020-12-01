import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = ({ width }) => (
	<div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
		<TwitterTimelineEmbed
			sourceType="profile"
			screenName="Ryan_Samman_"
			options={{ width: width }}
			noHeader
			noFooter
		/>
	</div>
);

export default TwitterFeed;
