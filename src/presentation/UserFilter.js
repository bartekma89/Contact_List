import React from 'react';
import PropTypes from 'prop-types';

const UserFilter = props => {
	return (
		<div className="User-filter">
			<input
				type="text"
				placeholder="Filter..."
				name="filter"
				onChange={props.onSearchUsers.bind(this)}
			/>
		</div>
	);
};

UserFilter.propTypes = {
	onSearchUsers: PropTypes.func.isRequired,
};

export default UserFilter;
