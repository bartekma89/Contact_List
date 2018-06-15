import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
	return (
		<div>
			<li>
				<strong>Name: {props.name}</strong>
				<br />
				Address: {props.address.street} {props.address.suite}{' '}
				{props.address.city}
				<br />
				Email: {props.email}
				<br />
				Website: {props.website}
				<br />
				Company: {props.company.name}
				<br />
				<button onClick={props.onDeleteUser.bind(this, props.id)}>
					Delete
				</button>
				<button>Details</button>
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
