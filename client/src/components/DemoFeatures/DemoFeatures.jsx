import React from 'react';
import Button from '../Button/Button';
import '../../base.css';
import PreprocessedData from '../../assets/w_7_demo.csv';
import aai from '../../assets/aai_7_demo.csv';
import aac from '../../assets/aac_7_demo.csv';
import apaac from '../../assets/apaac_7_demo.csv';
import qso from '../../assets/qso_7_demo.csv';
import binary from '../../assets/binary_7_demo.csv';

const DemoFeatures = () => {
	const downloadDemo = async () => {
		let link = document.createElement('a');
		link.download = 'aai_7';
		link.href = aai;
		link.click();
		link.download = 'aac_7';
		link.href = aac;
		link.click();
		link.download = 'apaac_7';
		link.href = apaac;
		link.click();
		link.download = 'qso_7';
		link.href = qso;
		link.click();
		link.download = 'binary_7';
		link.href = binary;
		link.click();
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

export default DemoFeatures;
