import React from 'react';
import './SvgIcon.css';
import '../../base.css';

const SvgIcon = ({ className, src, alt }) => {
	return (
		<div className={className}>
			<img src={src} alt={alt} />
		</div>
	);
};

export default SvgIcon;
