import React from 'react';
import './Checkbox.css';

const Checkbox = ({ checked, onChange, className, disabled, children }) => {
	const handleChange = () => {
		if (!disabled && onChange) {
			onChange(!checked);
		}
	};

	return (
		<label className={className}>
			<input
				type="checkbox"
				checked={checked}
				onChange={handleChange}
				disabled={disabled}
			/>
			{children}
		</label>
	);
};

export default Checkbox;
