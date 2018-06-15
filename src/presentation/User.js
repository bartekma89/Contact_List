import React from 'react';

const User = props => {
	return (
		<div>
			<li>
				<strong>{props.name}</strong>
				<br />
				{props.email}
				<br />
				{props.website}
				<br />
				{props.company.name}
				<br />
				<button onClick={props.onDeleteUser.bind(this, props.id)}>
					Delete
				</button>
				<br />
				<br />
			</li>
		</div>
	);
};

export default User;
