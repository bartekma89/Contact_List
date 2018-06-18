import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	const style = {
		margin: '20px',
		fontSize: '25px',
	};

	return (
		<div>
			<Link style={style} to="">
				Home
			</Link>
			<h2 style={style}>404 page not found</h2>
		</div>
	);
};

export default NotFound;
