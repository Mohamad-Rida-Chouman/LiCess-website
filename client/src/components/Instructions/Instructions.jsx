import React from 'react';
import './Instructions.css';
import '../../base.css';

const Instructions = ({ children }) => {
	return (
		<div className="instructions-container flex width-100 justify-start grey-background">
			{children}
		</div>
	);
};

export default Instructions;
