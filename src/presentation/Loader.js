import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ hasErrored, isLoading, errorMessage, children }) => {
	if (hasErrored) {
		return <h2>{errorMessage}</h2>;
	}
	if (isLoading) {
		return <h1>Loading...</h1>;
	} else {
		return children;
	}
};

Loader.propTypes = {
	hasErrored: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired,
};

export default Loader;