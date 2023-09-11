import React from 'react';
import '../../base.css';
import './Preprocess.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import Instructions from '../../components/Instructions/Instructions';

const Preprocess = () => {
	const options = [
		{ label: '7', value: 'window7' },
		{ label: '9', value: 'window9' },
		{ label: '11', value: 'window11' },
		{ label: '13', value: 'window13' },
		{ label: '15', value: 'window15' },
		{ label: '17', value: 'window17' },
		{ label: '19', value: 'window19' },
		{ label: '21', value: 'window21' },
		{ label: '23', value: 'window23' },
		{ label: '25', value: 'window25' },
		{ label: '27', value: 'window27' },
		{ label: '29', value: 'window29' },
		{ label: '31', value: 'window31' },
		{ label: '33', value: 'window33' },
		{ label: '35', value: 'window35' },
		{ label: '37', value: 'window37' },
		{ label: '39', value: 'window39' },
		{ label: '41', value: 'window41' },
	];

	const handlePreprocessClick = () => {
		console.log('Preprocess button clicked');
	};

	const handleUploadClick = () => {
		console.log('Upload button clicked');
	};

	return (
		<div className="preprocess-main-container width-100 flex flex-col gap-l padding-l">
			<div className="preprocess-navbar-container">
				<Navbar />
			</div>
			<div className="preprocess-title">
				<PageTitle title="Data Pre-processing" />
			</div>
			<div className="preprocess-content-container gap-s flex">
				<div className="preprocess-content-left flex flex-col">
					<Button
						className="button-dropdown button-s justify-center flex width-100"
						onClick={handleUploadClick}
					>
						Upload Data
					</Button>
				</div>
				<div className="preprocess-content-mid flex flex-col justify-between">
					<div className="preprocess-dropdown-button-container">
						<Dropdown
							className="preprocess-dropdown-container flex flex-col width-100"
							options={options}
							children="window size"
						/>
					</div>
					<div className="preprocess-button-container">
						<Button
							className="button button-m flex justify-center width-100"
							onClick={handlePreprocessClick}
						>
							Preprocess Data
						</Button>
					</div>
				</div>
				<div className="preprocess-content-right grey-background padding-s">
					<Instructions>These are the instructions</Instructions>
				</div>
			</div>
			<div className="preprocess-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Preprocess;
