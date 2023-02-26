import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './style.module.scss';

const propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string,
};

const ToTopButton = () => {
	return (
		<Link smooth className={styles.toTopButton} to={'/#home'}>
		</Link>
	)
}

ToTopButton.propTypes = propTypes;

export default ToTopButton;
