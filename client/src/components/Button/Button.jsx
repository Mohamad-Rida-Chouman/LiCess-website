import React from 'react';
import './Button.css';

const Button = ({ className, onClick, children, disabled }) => {
	const handleClick = () => {
		if (!disabled) {
			onClick();
		}
	};

	return (
		<button className={className} onClick={handleClick} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
