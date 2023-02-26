import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import cn from 'classnames';

import styles from './style.module.scss';

const propTypes = {
	setValue: PropTypes.func,
	className: PropTypes.string,
};

const KanonColorButton = ({ children, onClick, className }) => {
	return (
		<Button
			onClick={onClick}
			className={cn(styles.kanonColorButton, className)}
		>
			{children}
		</Button>
	);
}

KanonColorButton.propTypes = propTypes;

export default KanonColorButton;
