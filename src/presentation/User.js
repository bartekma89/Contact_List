import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = props => {
	return (
		<div>
			<li>
				<strong>{props.name}</strong>
				<br />
				<button onClick={props.onDeleteUser.bind(this, props.id)}>
					Delete
				</button>
				<Link to={`/details/${props.id}`}>Details</Link>
				<br />
				<br />
			</li>
		</div>
	);
};

User.propTypes = {
	name: PropTypes.string.isRequired,
	address: PropTypes.object.isRequired,
	email: PropTypes.string.isRequired,
	website: PropTypes.string.isRequired,
	company: PropTypes.object.isRequired,
	onDeleteUser: PropTypes.func.isRequired,
};

export default User;
