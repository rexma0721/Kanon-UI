import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import cn from 'classnames';

import styles from './style.module.scss';

const propTypes = {
	setValue: PropTypes.func,
	className: PropTypes.string,
};

const KanonDefaultButton = ({ children, onClick, className }) => {
	return (
		<Button
			onClick={onClick}
			className={cn(styles.kanonDefaultButton, className)}
		>
			{children}
		</Button>
	);
}

KanonDefaultButton.propTypes = propTypes;

export default KanonDefaultButton;
