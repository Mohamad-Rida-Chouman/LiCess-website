import React from 'react';
import Button from '../Button/Button';
import '../../base.css';

const DemoFasta = () => {
	const downloadDemo = async () => {
		console.log('download pressed');
	};
	return (
		<div>
			<Button onClick={downloadDemo} className="button button-m">
				Download Demo
			</Button>
		</div>
	);
};

export default DemoFasta;
