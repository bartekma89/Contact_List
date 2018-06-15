import React from 'react';
import User from './User';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
	users: PropTypes.array.isRequired,
	onClearUsers: PropTypes.func.isRequired,
};

export default ContactList;
