import React from 'react';
import './Instructions.css';
import '../../base.css';

const Instructions = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export default Instructions;
