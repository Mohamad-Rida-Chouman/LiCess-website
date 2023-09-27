import React, { useRef, useState } from 'react';
import './Model.css';
import '../../base.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import Instructions from '../../components/Instructions/Instructions';
import Radio from '../../components/Radio/Radio';
import Modal from '../../components/Modal/Modal';
import axios from 'axios';
import DemoFeatures from '../../components/DemoFeatures/DemoFeatures';

const Model = () => {
	// Functions related to "upload data" button:
	const [dataFile, setDataFile] = useState();
	const [dataFileUploaded, setDataFileUploaded] = useState(false);
	const dataFileContent = useRef(null);

	const handleDataUploadClick = (e) => {
		const file = e.target.files[0];
		setDataFile(file);
		setDataFileUploaded(true);
	};

	// Functions related to "upload features" button:
	const [featureFile, setFeatureFile] = useState([]);
	const [featureFileUploaded, setFeatureFileUploaded] = useState(false);
	const featureFilesContent = useRef(null);

	const handleFeaturesUploadClick = (e) => {
		const files = Array.from(e.target.files);
		setFeatureFile(files);
		setFeatureFileUploaded(true);
	};

	//Functions related to "model" radio button:
	const radioModelOptions = [
		{ value: 'lgbm', label: 'Light-Gradient Boosting' },
		{ value: 'xgb', label: 'Extreme-Gradient Boosting' },
		{ value: 'rf', label: 'Random Forest' },
		{ value: 'ensemble', label: 'Ensemble' },
	];

	const [selectedRadioModelOption, setSelectedRadioModelOption] = useState('');

	const handleRadioModelOptionChange = (label) => {
		setSelectedRadioModelOption(label);
	};

	//Functions related to "run type" radio button:
	const [selectedRadioRunOption, setSelectedRadioRunOption] = useState('');

	const handleRadioRunOptionChange = (label) => {
		setSelectedRadioRunOption(label);
	};

	// Optimization to be added later instead of test only
	// const radioRunOptions = [
	// 	{ value: 'trainTest', label: 'Train + Test' },
	// 	{ value: 'testOnly', label: 'Test Only' },
	// ];

	const API_URL = process.env.REACT_APP_API_URL;

	//Functions related to modal:
	const [modalOpenEmptyParams, setModalOpenEmptyParams] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const token = localStorage.getItem('token');

	const handleModelClick = async () => {
		if (
			selectedRadioModelOption == '' ||
			featureFile == [] ||
			dataFile == null
		) {
			setModalOpenEmptyParams(true);
		}

		let model = '';

		if (selectedRadioModelOption == 'Light-Gradient Boosting') {
			model = 'LGB';
		}
		if (selectedRadioModelOption == 'Extreme-Gradient Boosting') {
			model = 'XGB';
		}
		if (selectedRadioModelOption == 'Random Forest') {
			model = 'RF';
		}
		if (selectedRadioModelOption == 'Ensemble') {
			model = 'ENSEMBLE';
		}
		const URL = API_URL + '/api/model';
		setModalOpen(true);
		const dataFileCopy = dataFile;
		const featureFileCopy = featureFile;
		setDataFile();
		setFeatureFile([]);
		setDataFileUploaded(false);
		setFeatureFileUploaded(false);
		let formData = new FormData();
		featureFileCopy.forEach((file) => {
			formData.append('files[]', file);
		});
		formData.append('dataFile', dataFileCopy);
		formData.append('model', model);
		await axios
			.post(URL, formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log('Model Run Executed');
			});
	};

	return (
		<div className="model-main-container width-100 flex flex-col gap-l padding-l">
			<div className="model-navbar-container">
				<Navbar />
			</div>
			<div className="model-title">
				<PageTitle title="Models" />
			</div>
			<div className="model-content-container gap-s flex">
				<div className="model-content-left flex flex-col justify-between gap-s">
					<DemoFeatures></DemoFeatures>
					<div className="model-instructions grey-background padding-s">
						<Instructions>
							<span className="bold">
								This is a brief instruction on how to use the model:
							</span>
							<br />
							<p>
								In order to run the model, you will need:
								<br />
								1- Preprocessed data file, containing the protein subsequences
								and the sites.
								<br />
								2- Extracted feature(s) file(s), containing the extracted
								features related to the preprocessed data file.
								<br />
								<br />
								For more details on the structure of the files, please download
								the demo files using the above{' '}
								<span className="bold">Download Demo Files</span> button.
								<br />
								<br />
								After uploading the necessary files, you can choose a model from
								the list in the middle.
								<br />
								<br />
								Finally, click on the <span className="bold">
									Run Model
								</span>{' '}
								button to run the model of choice. The results will be available
								to download when the run finishes and can be shared to the
								community. Let's do something great!
							</p>
						</Instructions>
					</div>
				</div>

				<div className="model-content-mid flex flex-col justify-between">
					<div className="model-content-mid-upper">
						<div className="model-radio-container">
							<Radio
								className="radio"
								options={radioModelOptions}
								selectedOption={selectedRadioModelOption}
								onChange={handleRadioModelOptionChange}
								title="Model"
								name="model"
							/>
						</div>
					</div>
					<div className="model-content-mid-lower flex flex-col justify-between">
						{/* Optimization to be added later on instead of test only 
						<div className="model-train-test-container">
							<Radio
								className="radio"
								options={radioRunOptions}
								selectedOption={selectedRadioRunOption}
								onChange={handleRadioRunOptionChange}
								title="Run Type"
								name="runType"
							/>
						</div> */}
						<div className="model-button-container">
							<Button
								className="button button-m flex justify-center width-100"
								onClick={handleModelClick}
							>
								Run Model
							</Button>
							{modalOpenEmptyParams && (
								<Modal
									isOpen={modalOpenEmptyParams}
									onClose={() => setModalOpenEmptyParams(false)}
								>
									<h3>
										Please check the uploaded files and make sure to choose a
										model and run type.
									</h3>
								</Modal>
							)}
							{modalOpen && (
								<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
									<h3>
										This process might take a while. Please check the dashboard!
									</h3>
								</Modal>
							)}
						</div>
					</div>
				</div>
				<div className="model-content-right flex flex-col">
					<div className="model-data-upload-container">
						<Button
							className="button-dropdown button-s justify-center flex width-100"
							onClick={() => dataFileContent.current.click()}
						>
							Upload Preprocessed Data
						</Button>
						<input
							className="input-button"
							type="file"
							onChange={handleDataUploadClick}
							ref={dataFileContent}
							accept=".csv"
						/>
						<div className="data-preview-container">
							<strong>Uploaded File: </strong>
							<span id="uploadedFileName">
								{dataFile ? dataFile.name : 'No file selected'}
							</span>
						</div>
					</div>

					<div className="model-features-upload-container">
						<Button
							className="button-dropdown button-s justify-center flex width-100"
							onClick={() => featureFilesContent.current.click()}
						>
							Upload Extracted Features
						</Button>
						<input
							className="input-button"
							type="file"
							onChange={handleFeaturesUploadClick}
							ref={featureFilesContent}
							accept=".csv"
							multiple
						/>
						<div className="features-preview-container">
							<strong>Uploaded Files: </strong>
							{featureFile.length != 0 ? (
								<span>
									{featureFile.map((file, index) => (
										<React.Fragment key={index}>
											{file.name}
											{index !== featureFile.length - 1 ? ', ' : ''}
										</React.Fragment>
									))}
								</span>
							) : (
								<span>No files selected</span>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="model-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Model;
