import React from 'react';
import styles from './style.module.scss';

const propTypes = {};

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.text1}>© 2021 Synesis Metaverse, Inc. All Rights Reserved</div>
			<div className={styles.text2}>Privacy Policy</div>
			<div className={styles.text3}>Terms of use</div>
			<div className={styles.text4}>Made by<a href="https://roobinium.io">roobinium.io</a></div>
		</div>
	)
}

Footer.propTypes = propTypes;

export default Footer;
