import React from 'react';

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

export default User;
