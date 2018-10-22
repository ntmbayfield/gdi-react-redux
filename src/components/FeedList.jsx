// Exercise 2: Set It Up
	// write a functional component
	// make it a div with class name FeedList
	// import FeedItem and include it inside the div
	// export default the component!

// Exercise 3: Prop It Up
	// FeedList should accept props as params
	// destructure photos from props
	// iterate over the data and map each photo data to a FeedItem

import React from 'react';
import FeedItem from './FeedItem.jsx';

const FeedList = (props) => {
	console.log("this is props: ", props);
	const {photos} = props;

	return (
		<div className="FeedList">
      {
        photos.map((photo, i) =>
          <FeedItem photo={photo} key={i} />
        )
      }
		</div>
	)
}

export default FeedList;
