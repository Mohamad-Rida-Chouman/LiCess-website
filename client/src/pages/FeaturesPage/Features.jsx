import React, { useRef, useState } from 'react';
import '../../base.css';
import './Features.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import ReactSelectDropdown from '../../components/ReactSelectDropdown/ReactSelectDropdown';
import Instructions from '../../components/Instructions/Instructions';
import axios from 'axios';

const Features = () => {
	const [selectedFeatures, setSelectedFeatures] = useState([]);

	const handleCallback = (childData) => {
		setSelectedFeatures(childData);
	};

	const optionList = [
		{ label: 'AAC', value: 'aac' },
		{ label: 'DPC', value: 'dpc' },
		{ label: 'APAAC', value: 'apaac' },
		{ label: 'QSO', value: 'qso' },
		{ label: 'CKSAAP-4', value: 'cksaap4' },
		{ label: 'CKSAAP-5', value: 'cksaap5' },
		{ label: 'Binary', value: 'binary' },
		{ label: 'AAI', value: 'aai' },
	];

	const BASE_URL = 'http://127.0.0.1:8000/api/';

	const [fileContent, setFileContent] = useState([]);

	const handleFeaturesClick = async () => {
		const selectedLabels = selectedFeatures.map((option) => option.value);

		selectedLabels.forEach((feature) => {
			console.log(feature);
		});

		if (fileContent[0].name.length < 8) {
			const window = fileContent[0].name.substring(2, 3);
			console.log(window);
		} else {
			const window = fileContent[0].name.substring(2, 4);
			console.log(window);
		}

		await Promise.all(
			selectedLabels.map((feature) => {
				let formData = new FormData();
				formData.append('fileContent', fileContent[0]);
				formData.append('windowSize', window);
				return axios.post(BASE_URL.feature, formData).then((res) => {
					console.log(res);
				});
			})
		);

		// const requests = selectedLabels.map((w) => {
		// 	const formData = new FormData();
		// 	formData.append('sitesCsv', dataFile[0]);
		// 	formData.append('fasta', fastaFile[0]);
		// 	formData.append('windowSize', w);
		// 	return axios({
		// 		method: 'post',
		// 		url: URL,
		// 		data: formData,
		// 		headers: { 'Content-Type': 'multipart/form-data' },
		// 	});
		// });

		// Promise.all(requests)
		// 	.then((responses) => {
		// 		console.log(responses);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	};

	const handleFileContentChange = (e) => {
		setFileContent([...fileContent, e.target.files[0]]);
	};

	const inputFileContent = useRef(null);

	return (
		<div className="features-main-container width-100 flex flex-col gap-l padding-l">
			<div className="features-navbar-container">
				<Navbar />
			</div>
			<div className="features-title">
				<PageTitle title="Feature Extraction" />
			</div>
			<div className="features-content-container gap-s flex">
				<div className="features-content-left flex flex-col">
					<Button
						className="button-dropdown button-s justify-center flex width-100"
						onClick={() => inputFileContent.current.click()}
					>
						Upload Preprocessed Data
					</Button>
					<input
						className="input-button"
						type="file"
						onChange={handleFileContentChange}
						ref={inputFileContent}
					/>
				</div>
				<div className="features-content-mid flex flex-col justify-between">
					<div className="features-dropdown-button-container">
						<ReactSelectDropdown
							optionList={optionList}
							parentCallback={handleCallback}
							placeholder="Select Feature(s)"
						/>
						{/* <Dropdown
							className="features-dropdown-container flex flex-col width-100"
							options={options}
							children="feature"
						/> */}
					</div>
					<div className="features-button-container">
						<Button
							className="button button-m flex justify-center width-100"
							onClick={handleFeaturesClick}
						>
							Extract Features
						</Button>
					</div>
				</div>
				<div className="features-content-right grey-background padding-s">
					<Instructions>
						This is a brief instruction on how to extract features:
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
			<div className="features-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Features;
