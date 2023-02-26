import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { Button } from '@material-ui/core';
import { ThemeContext } from '../../utils/store';

const propTypes = {
	mode: PropTypes.bool.isRequired,
	setLightMode: PropTypes.func
};

const LightMode = ({ mode }) => {

	const [currentMode, setCurrentMode] = useState(mode);
	const { setTheme } = useContext(ThemeContext);

	const setMode = () => {
		setCurrentMode(!currentMode);
		setTheme(!currentMode);
	}

	return (
		<Button className={currentMode ? styles.lightModeDay : styles.lightModeNight} onClick={setMode}>
			<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.24951 14.0234C10.2026 14.0234 12.6841 12.4102 13.812 9.82617C13.9214 9.58691 13.9556 9.38867 13.9556 9.25195C13.9556 8.8623 13.6685 8.60938 13.3335 8.60938C13.1626 8.60938 12.9985 8.64355 12.7661 8.75293C12.2739 8.96484 11.4878 9.10156 10.729 9.10156C7.22217 9.10156 5.0415 7.00293 5.0415 3.6123C5.0415 2.66211 5.20557 1.79395 5.45166 1.30859C5.58154 1.06934 5.62939 0.898438 5.62939 0.713867C5.62939 0.365234 5.36279 0.0439453 4.95264 0.0439453C4.84326 0.0439453 4.66553 0.078125 4.43311 0.166992C1.82861 1.21973 0.0444336 3.89941 0.0444336 6.80469C0.0444336 10.9746 3.07959 14.0234 7.24951 14.0234Z" fill={currentMode ? "#2D61E5" : "#9C42F5"} />
			</svg>
		</Button >
	)
}

LightMode.propTypes = propTypes;

export default LightMode;
