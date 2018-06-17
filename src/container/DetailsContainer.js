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
				<div className="Details">
					<h2 style={{ textAlign: 'center', padding: '20px' }}>
						User Profile
					</h2>
					<div className="card">
						<h1>
							<i className="fas fa-user" /> {name}
						</h1>
						<p>
							<i className="fas fa-home" /> {street} {suite}{' '}
							{city}
						</p>
						<p>
							<i className="fas fa-at" /> {email}
						</p>
						<p>
							<i className="fas fa-code" /> {website}
						</p>
						<p>
							<i className="fas fa-briefcase" /> {companyName}
						</p>
						<span className="btn-back">
							<i className="fas fa-arrow-left" />{' '}
							<Link to="/" style={{ color: '#fff' }}>
								Back
							</Link>
						</span>
					</div>
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
