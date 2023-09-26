import React from 'react';
import Button from '../Button/Button';
import '../../base.css';
import PreprocessedData from '../../assets/w_7_demo.csv';

const DemoSubsequences = () => {
	const downloadDemo = async () => {
		const link = document.createElement('a');
		link.download = 'w_7';
		link.href = PreprocessedData;
		link.click();
	};
	return (
		<div>
			<Button
				className="button-dropdown button-s justify-center flex width-100"
				onClick={downloadDemo}
			>
				Download Demo Files
			</Button>
		</div>
	);
};

export default DemoSubsequences;
