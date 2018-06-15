import React from 'react';
import User from './User';

const ContactList = props => {
	return (
		<div>
			<ul>
				{props.users.map(user => (
					<User key={user.id} {...user} {...props} />
				))}
			</ul>
			<button onClick={props.onClearUsers}>Clear</button>
		</div>
	);
};

export default ContactList;
