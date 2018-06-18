import React from 'react';
import User from './User';
import PropTypes from 'prop-types';

const ContactList = props => {
	if (props.users.length !== 0) {
		return (
			<div>
				<ul>
					{props.users.map(user => (
						<User key={user.id} {...user} {...props} />
					))}
				</ul>
			</div>
		);
	}
	return <p style={{ margin: '20px', fontSize: '22px' }}>No results!</p>;
};

ContactList.propTypes = {
	users: PropTypes.array.isRequired,
};

export default ContactList;
