import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers, findUser } from '../actions/details';
import NotFound from '../presentation/pageNotFound/NotFound';

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
		const { name, email, website, company, address } =
			this.props.user || {};
		const companyName = (company || {}).name;
		const street = (address || {}).street;
		const suite = (address || {}).suite;
		const city = (address || {}).city;

		if (
			this.props.detailsStore.users.length >=
			this.props.match.params.userId
		) {
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
					<Link to="/">Back</Link>
				</div>
			);
		} else {
			return <Route component={NotFound} />;
		}
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
		findUser: userId => dispatch(findUser(userId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
