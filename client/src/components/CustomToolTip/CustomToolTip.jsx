import React from 'react';

const CustomTooltip = ({ active, payload, label }) => {
	if (active) {
		return (
			<div
				className="custom-tooltip"
				style={{
					backgroundColor: '#1d2d3b',
					padding: '5px',
					border: '1px solid #cccc',
				}}
			>
				<label>{`${payload[0].name} : ${payload[0].value}%`}</label>
			</div>
		);
	}
};

export default CustomTooltip;
