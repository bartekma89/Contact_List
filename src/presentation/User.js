import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = props => {
	return (
		<div className="Contact-label" style={{ textAlign: 'center' }}>
			<li className="label">
				<h2>{props.name}</h2>
				<span className="btn-details">
					<Link to={`/details/${props.id}`}>
						{' '}
						<i className="fas fa-info-circle" />
					</Link>
				</span>
				<button
					className="btn-trash"
					onClick={props.onDeleteUser.bind(this, props.id)}
				>
					{' '}
					<i className="fas fa-trash-alt" />
				</button>
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
