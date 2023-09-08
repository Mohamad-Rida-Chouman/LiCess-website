import React from 'react';
import './Button.css';

const Button = ({ className, onClick, children, disabled }) => {
	return (
		<button className={className} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
