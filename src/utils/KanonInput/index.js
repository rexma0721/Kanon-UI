import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Input } from '@material-ui/core';

import styles from './style.module.scss';

const propTypes = {
	value: PropTypes.string,
	setValue: PropTypes.func,
	placeholder: PropTypes.string,
	className: PropTypes.object,
};

const KanonInput = ({ value, setValue, placeholder, className }) => {
	return (
		<div className={cn(styles.kanonInput, className)}>
			<Input className={styles.kanonInputText} value={value} onChange={setValue} placeholder={placeholder} />
		</div>
	);
}

KanonInput.propTypes = propTypes;

export default KanonInput;
