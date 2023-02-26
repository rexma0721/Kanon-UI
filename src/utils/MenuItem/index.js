import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './style.module.scss';

const propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string,
};

const MenuItem = ({ title, link }) => {
	return (
		<Link smooth className={styles.menuItem} to={link}>
			{title}
		</Link>
	)
}

MenuItem.propTypes = propTypes;

export default MenuItem;
