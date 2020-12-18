import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import LazyLoad from 'react-lazyload';

// Yoinked from here, I gave up doing animations in React
// https://www.freecodecamp.org/news/how-to-create-a-reusable-fade-in-animation-component-in-react-with-gsap/

const FadeInAnimation = ({ children, delay = 0, ...props }) => {
	let compRef = useRef(null);
	const distance = 200;
	let fadeDirection;
	fadeDirection = { y: distance };
	useEffect(() => {
		gsap.from(compRef.current, 1, {
			...fadeDirection,
			opacity: 0,
			delay
		});
	}, [compRef, fadeDirection, delay]);
	return (
		<div ref={compRef} {...props}>
			{children}
		</div>
	);
};


const FadeIn = ({ height, children }) => (

	<LazyLoad height={height} offset={150}>
		<FadeInAnimation>
			{children}
		</FadeInAnimation>
	</LazyLoad>
)

export default FadeIn;
