import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ className, onClick, children, disabled, linkTo }) => {
	const handleClick = () => {
		if (!disabled) {
			onClick();
		}
	};

	return (
		<Link to={linkTo}>
			<button className={className} onClick={handleClick} disabled={disabled}>
				{children}
			</button>
		</Link>
	);
};

export default Button;
