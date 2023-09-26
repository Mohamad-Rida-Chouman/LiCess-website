import React, { useRef, useState } from 'react';
import '../../base.css';
import './Preprocess.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import Instructions from '../../components/Instructions/Instructions';
import ReactSelectDropdown from '../../components/ReactSelectDropdown/ReactSelectDropdown';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';
import DemoFasta from '../../components/DemoFasta/DemoFasta';

const Preprocess = () => {
	const [dataFileUploaded, setDataFileUploaded] = useState(false);
	const [fastaFileUploaded, setFastaFileUploaded] = useState(false);

	const [modalOpen, setModalOpen] = useState(false);
	const [modalOpenEmptyParams, setModalOpenEmptyParams] = useState(false);

	const [selectedWindows, setSelectedWindows] = useState([]);

	const token = localStorage.getItem('token');

	const handleCallback = (childData) => {
		setSelectedWindows(childData);
	};

	const optionList = [
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

	const API_URL = process.env.REACT_APP_API_URL;
	const URL = API_URL + '/api/preprocess';

	const [dataFile, setDataFile] = useState();

	const [fastaFile, setFastaFile] = useState();

	const handlePreprocessClick = async () => {
		if (selectedWindows.length === 0 || dataFile == null || fastaFile == null) {
			setModalOpenEmptyParams(true);
		} else {
			setModalOpen(true);
			const selectedLabels = selectedWindows.map((option) => option.label);
			const dataFileCopy = dataFile;
			const fastaFileCopy = fastaFile;
			setDataFile();
			setFastaFile();
			setDataFileUploaded(false);
			setFastaFileUploaded(false);
			document.getElementById('inputDataButton').value = null;
			document.getElementById('inputFastaButton').value = null;
			await Promise.all(
				selectedLabels.map((w) => {
					let formData = new FormData();
					formData.append('sitesCsv', dataFileCopy);
					formData.append('fasta', fastaFileCopy);
					formData.append('windowSize', w);
					return axios
						.post(URL, formData, {
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

	const handleDataChange = (e) => {
		const file = e.target.files[0];
		setDataFile(file);
		setDataFileUploaded(true);
	};

	const handleFastaChange = (e) => {
		const file = e.target.files[0];
		setFastaFile(file);
		setFastaFileUploaded(true);
	};

	const inputDataFile = useRef(null);
	const inputFastaFile = useRef(null);

	return (
		<div className="preprocess-main-container width-100 flex flex-col gap-l padding-l">
			<div className="preprocess-navbar-container">
				<Navbar />
			</div>
			<div className="preprocess-title">
				<PageTitle title="Data Pre-processing" />
			</div>

			<div className="preprocess-content-container gap-s flex">
				<div className="preprocess-content-left flex flex-col justify-between gap-s">
					<DemoFasta></DemoFasta>
					<div className="preprocess-instructions grey-background padding-s">
						<Instructions>
							<span className="bold">
								This is a brief instruction on how to preprocess data:
							</span>
							<br />
							<p>
								In order to start data preprocessing, you need to have data
								already downloaded from databases such as dbPTM, dbSNO, etc.
								<br />
								<br />
								The files to be uploaded are: <br />
								1- A CSV file, which should contain 2 columns: Protein IDs, and
								Sites. <br />
								2- A FASTA file, which should contain the proteins of interest.
								<br />
								<br />
								(For convenience, there are prepared demo files that can be
								downloaded using the{' '}
								<span className="bold">Download Demo Files</span> button right
								above the instructions. You're welcome!)
								<br /> <br />
								After uploading the necessary files, choose your window size(s)
								of interest and click on{' '}
								<span className="bold">Preprocess Data</span> button.
							</p>
						</Instructions>
					</div>
				</div>

				<div className="preprocess-content-mid flex flex-col justify-between">
					<div className="preprocess-dropdown-button-container">
						<ReactSelectDropdown
							optionList={optionList}
							parentCallback={handleCallback}
							placeholder="Select Window Size(s)"
						/>
					</div>
					<div className="preprocess-button-container">
						<Button
							className="button button-m flex justify-center width-100"
							onClick={handlePreprocessClick}
						>
							Preprocess Data
						</Button>
						{modalOpenEmptyParams && (
							<Modal
								isOpen={modalOpenEmptyParams}
								onClose={() => setModalOpenEmptyParams(false)}
							>
								<h3>
									Please check the uploaded files and make sure to choose a at
									least one window size.
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
				<div className="preprocess-content-right flex flex-col">
					<div className="data-upload-container flex flex-col">
						<div className="data-upload-button-container">
							<Button
								className="button-dropdown button-s justify-center flex width-100"
								onClick={() => inputDataFile.current.click()}
							>
								Upload Sites Data
							</Button>
							<input
								className="input-button"
								type="file"
								id="inputDataButton"
								onChange={handleDataChange}
								ref={inputDataFile}
								accept=".csv"
							/>
						</div>
						<div className="data-preview-container">
							<strong>Uploaded File:</strong>
							<span id="uploadedFileName">
								{dataFile ? dataFile.name : 'No file selected'}
							</span>
						</div>
					</div>
					<div className="fasta-upload-container flex flex-col">
						<div className="fasta-upload-button-container">
							<Button
								className="button-dropdown button-s justify-center flex width-100"
								onClick={() => inputFastaFile.current.click()}
							>
								Upload Fasta Data
							</Button>
							<input
								className="input-button"
								type="file"
								id="inputFastaButton"
								onChange={handleFastaChange}
								ref={inputFastaFile}
								accept=".fasta"
							/>
						</div>
						<div className="fasta-preview-container">
							<strong>Uploaded File:</strong>
							{fastaFile ? fastaFile.name : 'No file selected'}
						</div>
					</div>
				</div>
			</div>
			<div className="preprocess-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Preprocess;
