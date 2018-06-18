import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from '../presentation/ContactList';
import {
	clearUsers,
	deleteUser,
	getUsers,
	searchUsers,
} from '../actions/users';
import Loader from '../presentation/Loader';
import UserFilter from '../presentation/UserFilter';

class Contacts extends Component {
	componentDidMount() {
		this.props.getUsers();
	}

	onClearUsers() {
		this.props.clearUsers();
	}

	onDeleteUser(id) {
		this.props.deleteUser(id);
	}

	onSearchUsers(event) {
		const user = event.target.value;
		this.props.searchUsers(user);
	}

	render() {
		return (
			<Loader
				isLoading={this.props.isLoading}
				hasErrored={this.props.hasErrored}
				errorMessage={this.props.errorMessage}
			>
				<UserFilter onSearchUsers={this.onSearchUsers.bind(this)} />
				<ContactList
					onDeleteUser={this.onDeleteUser.bind(this)}
					users={this.props.filterUsers}
				/>
			</Loader>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.usersStore.users,
		filterUsers: state.usersStore.filterUsers,
		isLoading: state.usersStore.isLoading,
		hasErrored: state.usersStore.isError,
		errorMessage: state.usersStore.errorMessage,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		clearUsers: () => dispatch(clearUsers()),
		deleteUser: userId => dispatch(deleteUser(userId)),
		getUsers: () => dispatch(getUsers()),
		searchUsers: userName => dispatch(searchUsers(userName)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
