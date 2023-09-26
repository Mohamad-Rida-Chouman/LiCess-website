import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../base.css';
import './Features.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import ReactSelectDropdown from '../../components/ReactSelectDropdown/ReactSelectDropdown';
import Instructions from '../../components/Instructions/Instructions';
import axios from 'axios';
import Papa from 'papaparse';
import Modal from '../../components/Modal/Modal';
import DemoSubsequences from '../../components/DemoSubsequences/DemoSubsequences';

const Features = () => {
	const [selectedFeatures, setSelectedFeatures] = useState([]);
	const [windowSize, setWindowSize] = useState();
	const [dataFileUploaded, setDataFileUploaded] = useState(false);

	const token = localStorage.getItem('token');

	const handleCallback = (childData) => {
		setSelectedFeatures(childData);
	};

	const optionList = [
		{ label: 'AAC', value: 'aac' },
		{ label: 'APAAC', value: 'apaac' },
		{ label: 'QSO', value: 'qso' },
		{ label: 'Binary', value: 'binary' },
		{ label: 'AAI', value: 'aai' },
	];

	const handleFileContentChange = (event) => {
		const file = event.target.files[0];
		setFileContent(file);
		setDataFileUploaded(true);
		Papa.parse(file, {
			header: true,
			skipEmptyLines: true,
			complete: function (results) {
				setWindowSize(results.data[0].window.length);
			},
		});
	};

	const API_URL = process.env.REACT_APP_API_URL;
	const BASE_URL = API_URL + '/api/featureExtract';

	const [fileContent, setFileContent] = useState();

	const inputFileContent = useRef(null);

	const location = useLocation();
	const handleFeaturesClick = async () => {
		console.log(selectedFeatures.length);
		if (selectedFeatures.length == 0 || fileContent == null) {
			setModalOpenEmptyParams(true);
		} else {
			setModalOpen(true);

			const selectedLabels = selectedFeatures.map((option) => option.value);

			setDataFileUploaded(false);
			document.getElementById('inputButton').value = null;
			const fileContentCopy = fileContent;
			setFileContent();
			await Promise.all(
				selectedLabels.map((feature) => {
					let formData = new FormData();
					formData.append('fileContent', fileContentCopy);
					formData.append('windowSize', windowSize);
					formData.append('feature', feature);
					return axios
						.post(BASE_URL, formData, {
							headers: {
								Authorization: `Bearer ${token}`,
							},
						})
						.then((res) => {
							console.log(res);
						});
				})
			);
		}
	};

	const [modalOpenEmptyParams, setModalOpenEmptyParams] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className="features-main-container width-100 flex flex-col gap-l padding-l">
			<div className="features-navbar-container">
				<Navbar />
			</div>
			<div className="features-title">
				<PageTitle title="Feature Extraction" />
			</div>
			<div className="features-content-container gap-s flex">
				<div className="features-content-left flex flex-col justify-between gap-s">
					<DemoSubsequences></DemoSubsequences>
					<div className="preprocess-instructions grey-background padding-s">
						<Instructions>
							<span className="bold">
								This is a brief instruction on how to extract features:
							</span>
							<br />
							<p>
								In order to start feature extraction, you can use the files
								previously obtained through the data preprocessing step, or use
								your own files if you already have preprocessed your data.
								<br />
								<br />
								The file to be uploaded here is the preprocessed data. Note that
								there is a certain structure for the file, so if you have
								preprocessed your data without using{' '}
								<span className="bold">LiCess</span>, kindly download the demo
								file from the <span className="bold">Download Demo Files</span>{' '}
								button above.
								<br />
								<br />
								After uploading the necessary files, choose your feature(s) of
								interest and click on{' '}
								<span className="bold">Extract Features</span> button.
							</p>
						</Instructions>
					</div>
				</div>

				<div className="features-content-mid flex flex-col justify-between">
					<div className="features-dropdown-button-container">
						<ReactSelectDropdown
							optionList={optionList}
							parentCallback={handleCallback}
							placeholder="Select Feature(s)"
						/>
					</div>
					<div className="features-button-container">
						<Button
							className="button button-m flex justify-center width-100"
							onClick={handleFeaturesClick}
						>
							Extract Features
						</Button>
						{modalOpenEmptyParams && (
							<Modal
								isOpen={modalOpenEmptyParams}
								onClose={() => setModalOpenEmptyParams(false)}
							>
								<h3>
									Please check the uploaded file and make sure to choose a at
									least one feature.
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
				<div className="features-content-right flex flex-col">
					<div className="data-upload-button-container">
						<Button
							className="button-dropdown button-s justify-center flex width-100"
							onClick={() => inputFileContent.current.click()}
						>
							Upload Preprocessed Data
						</Button>
						<input
							className="input-button"
							type="file"
							id="inputButton"
							onChange={handleFileContentChange}
							ref={inputFileContent}
							accept=".csv"
						/>
					</div>
					<div className="data-preview-container">
						<strong>Uploaded File:</strong>
						<span id="uploadedDataFileName">
							{fileContent ? fileContent.name : 'No file selected'}
						</span>
					</div>
				</div>
			</div>
			<div className="features-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Features;
