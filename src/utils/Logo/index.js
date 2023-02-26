import React from 'react';
import logo from '../../assets/logo.png';
import styles from './style.module.scss';

const propTypes = {};

const Logo = () => {

	return (
		<a href=" https://synesis.one" target="_blank" rel="noreferrer">
			<div className={styles.logo}>
				<img src={logo} alt="logo" className={styles.logoImage}/>
			</div>
		</a>
	)
}

Logo.propTypes = propTypes;

export default Logo;
