import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from '../presentation/ContactList';
import { clearUsers, deleteUser, getUsers } from '../actions/users';
import Loader from '../presentation/Loader';

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

	render() {
		return (
			<Loader
				isLoading={this.props.isLoading}
				hasErrored={this.props.hasErrored}
				errorMessage={this.props.errorMessage}
			>
				<ContactList
					onClearUsers={this.onClearUsers.bind(this)}
					onDeleteUser={this.onDeleteUser.bind(this)}
					users={this.props.users}
				/>
			</Loader>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.usersStore.users,
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
