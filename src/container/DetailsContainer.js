import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers, findUser } from '../actions/details';

class Details extends Component {
	componentDidMount() {
		this.props.getUsers();
	}

	componentDidUpdate() {
		if (this.props.detailsStore.shouldUpdate) {
			const id = this.props.match.params.userId;
			this.props.findUser(id);
		}
	}

	render() {
		const { name, email, website, company, address } = this.props.user;
		const companyName = (company || {}).name;
		const street = (address || {}).street;
		const suite = (address || {}).suite;
		const city = (address || {}).city;

		return (
			<div>
				<strong>Name:</strong> {name}
				<br />
				<strong>Address:</strong> {street} {suite} {city}
				<br />
				<strong>Email:</strong> {email}
				<br />
				<strong>Website:</strong> {website}
				<br />
				<strong>Company:</strong> {companyName}
				<br />
				<Link to="">Back</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state,
		user: state.detailsStore.user,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getUsers: () => dispatch(getUsers()),
		findUser: id => dispatch(findUser(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
