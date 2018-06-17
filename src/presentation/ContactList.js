import React from 'react';
import User from './User';
import PropTypes from 'prop-types';
import UserFilter from './UserFilter';

const ContactList = props => {
	return (
		<div>
			<UserFilter {...props} />
			<ul>
				{props.users.map(user => (
					<User key={user.id} {...user} {...props} />
				))}
			</ul>
		</div>
	);
};

ContactList.propTypes = {
	users: PropTypes.array.isRequired,
};

export default ContactList;
