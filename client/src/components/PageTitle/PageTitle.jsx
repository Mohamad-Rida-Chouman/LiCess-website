import React from 'react';
import './PageTitle.css';
import '../../base.css';

const PageTitle = ({ title }) => {
	return (
		<div className="page-title-container flex width-90 justify-start align-center padding-l">
			<h2>{title}</h2>
		</div>
	);
};

export default PageTitle;
