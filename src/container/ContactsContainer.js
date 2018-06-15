import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from '../presentation/ContactList';
import { clearUsers, deleteUser } from '../actions/actions-users';

class Contacts extends Component {
	onClearUsers() {
		this.props.clearUsers();
	}

	onDeleteUser(id) {
		this.props.deleteUser(id);
	}

	render() {
		return (
			<ContactList
				onClearUsers={this.onClearUsers.bind(this)}
				onDeleteUser={this.onDeleteUser.bind(this)}
				users={this.props.usersStore.users}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		clearUsers: () => dispatch(clearUsers()),
		deleteUser: id => dispatch(deleteUser(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
