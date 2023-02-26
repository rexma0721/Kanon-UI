import React, { useState, useEffect, useContext } from 'react';
import {Fade} from '@material-ui/core';
import styles from './style.module.scss';
import { ThemeContext } from '../../../utils/store';

const propTypes = {};

const AboutSection = () => {

	const { theme } = useContext(ThemeContext);
	const [lightMode, setLightMode] = useState(theme);

	useEffect(() => {
		setLightMode(theme);
	}, [theme]);


	return (
		<div>
			<a id="about" href="#about" />
			<div className={styles.aboutSection}>
				<Fade in={true} style={{ transitionDelay: '1000ms' }}>
					<div>
						<div className={styles.logoImage} /> 
						<div className={styles.textDiv}>
							<div className={styles.title}>About Kanon</div>
							<div className={styles.contentText}>Synesis Metavers - a collection of NFT (Kanons) representing human language. Kanon is a semi - fungible token (NFT) representing an ontology primitive or a fractional unit of the Synesis Metaverse. Initially, this metaverse will be made up of the top 10,000 most frequently accessed words by the Mind AI engine</div>
						</div>
					</div>
				</Fade>
			</div>

		</div>
	);
}

AboutSection.propTypes = propTypes;

export default AboutSection;
