import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import users from '../data/users.json';

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
		};
	}

	componentDidMount() {
		const id = this.props.match.params.userId;
		let user = users.find(user => user.id === parseInt(id, 10));

		this.setState({
			user,
		});
	}

	render() {
		const { name, email, website, company, address } = this.state.user;
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

export default Details;
