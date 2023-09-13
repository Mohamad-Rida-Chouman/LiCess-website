import React from 'react';
import './SvgIcon.css';
import '../../base.css';

const SvgIcon = ({ className, src, alt, onClick }) => {
	return (
		<div className={className} onClick={onClick}>
			<img src={src} alt={alt} />
		</div>
	);
};

export default SvgIcon;
