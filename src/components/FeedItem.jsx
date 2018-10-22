// Exercise 2: Set It Up
	// write a functional component
	// make it a div with class name FeedItem
	// make an img element inside
	// import Likes, include it underneath img
	// export default the component!

// Exercise 3: Prop It Up
	// pass in props as params to the component
	// destructure what you need from the props
	// Hint: what do you need in order to get the image to display?
	// Hint: what do you need in order to get likes to display in the Likes component?

import React from 'react';
import Likes from './Likes.jsx';

const FeedItem = (props) => {
	const {photo} = props;
	const {url, likes} = photo;

	return (
		<div className="FeedItem">
			<img className="image" src={url} />
			<Likes totalLikes={likes} />
		</div>
	)
}

export default FeedItem;
