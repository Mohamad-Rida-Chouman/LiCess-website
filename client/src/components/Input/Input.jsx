import { useState } from 'react';
import React from 'react';
import './Input.css';

const Input = ({ type, className, label, value, onChange }) => {
	const [showPlaceholder, setShowPlaceholder] = useState(true);

	const handleInputClick = () => {
		setShowPlaceholder(false);
	};

	const handleInputChange = (e) => {
		onChange(e.target.value);
	};

	const handleInputBlur = () => {
		if (value === '') {
			setShowPlaceholder(true);
		}
	};

	return (
		<div>
			<input
				type={type}
				className={className}
				placeholder={showPlaceholder ? label : ''}
				id={label}
				value={value}
				onChange={handleInputChange}
				onClick={handleInputClick}
				onBlur={handleInputBlur}
			/>
		</div>
	);
};

export default Input;
