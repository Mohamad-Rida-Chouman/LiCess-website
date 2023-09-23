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

	const radioRunOptions = [
		{ value: 'trainTest', label: 'Train + Test' },
		{ value: 'testOnly', label: 'Test Only' },
	];

	//Functions related to modal:
	const [modalOpenEmptyParams, setModalOpenEmptyParams] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const handleModelClick = async () => {
		if (
			selectedRadioModelOption == '' ||
			selectedRadioRunOption == '' ||
			featureFile == [] ||
			dataFile == null
		) {
			setModalOpenEmptyParams(true);
		}
		if (
			selectedRadioModelOption == 'Light-Gradient Boosting' &&
			selectedRadioRunOption == 'Train + Test'
		) {
			const URL = 'http://127.0.0.1:8000/api/modelLGBM';
		}
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
				<div className="model-content-left flex flex-col">
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
							<strong>Uploaded File:</strong>
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
							<strong>Uploaded Files:</strong>
							{featureFile.length > 0 ? (
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
						<div className="model-train-test-container">
							<Radio
								className="radio"
								options={radioRunOptions}
								selectedOption={selectedRadioRunOption}
								onChange={handleRadioRunOptionChange}
								title="Run Type"
								name="runType"
							/>
						</div>
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
				<div className="model-content-right grey-background padding-s">
					<Instructions>
						This is a brief instruction on how to use model:
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque
						corrupti neque molestiae quod, possimus enim unde ab. Facilis
						exercitationem quaerat excepturi! Nam modi natus omnis earum sit
						deserunt minus. Deserunt vitae corporis atque ratione iure qui quia,
						ipsam perferendis rem, dolorem a! Praesentium tempore similique
						reiciendis unde, iste deleniti illum doloremque ab harum numquam
						totam, odio qui fugiat quia! Enim laudantium architecto praesentium
						labore quod iure pariatur asperiores minima molestias necessitatibus
						illum voluptatem porro, amet unde excepturi facere error nobis quasi
						magnam ab cupiditate et! Reprehenderit sequi facilis eaque? Facilis,
						explicabo. Ullam necessitatibus, debitis ab harum dignissimos dicta
						alias fugiat optio nam velit quibusdam distinctio quaerat vitae
						sunt, dolorem consequatur quam repudiandae et veritatis repellat
						rerum, ipsum ipsam officia. Sequi saepe beatae error ullam modi
						veritatis repellat optio culpa hic ipsum natus asperiores, dolores
						quia! Ad, recusandae atque odit, voluptate provident vel odio natus
						eveniet maxime quam dolor qui? Itaque soluta fugiat laborum officia
						modi veritatis esse facilis, repudiandae culpa quisquam totam
						architecto sint aut doloribus ipsum corporis cumque ea! Quaerat
						magnam perferendis ea debitis eos delectus quae incidunt. Dolores
						laboriosam quod dolorem praesentium nisi deserunt voluptates impedit
						quidem a quis voluptas soluta hic, ipsum laborum suscipit maiores
						doloremque, in cumque ea aliquam amet quos temporibus? Ad, numquam
						modi. Ab, consequuntur sapiente? Eaque ipsum est amet rem quas illo
						nam dolorem. A ex sapiente minima possimus debitis asperiores, illo
						fuga eveniet aperiam nesciunt quasi provident, non voluptatem iste
						rerum. Id corporis iusto, numquam corrupti nam obcaecati, expedita
						soluta aliquam, aperiam accusantium porro officiis non at maxime.
						Maiores laborum porro reiciendis quibusdam, quis, inventore qui
						facilis aperiam quas voluptas deleniti? Deserunt quas quos cum nobis
						voluptas, est temporibus eos nihil alias dignissimos in et ratione,
						tenetur amet placeat, id incidunt esse molestias. Maxime quis nam,
						nisi asperiores dolore voluptatem quos.
					</Instructions>
				</div>
			</div>
			<div className="model-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Model;
