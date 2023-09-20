import React, { useRef, useState } from 'react';
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

	const handleUploadDataClick = () => {
		console.log('Upload button clicked');
	};
	const handleUploadFastaClick = () => {
		console.log('Upload button clicked');
	};

	const [dataFile, setDataFile] = useState([]);

	const [fastaFile, setFastaFile] = useState([]);

	const handleDataChange = (e) => {
		setDataFile([...dataFile, e.target.files[0]]);
	};

	const handleFastaChange = (e) => {
		setFastaFile([...fastaFile, e.target.files[0]]);
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
				<div className="preprocess-content-left flex flex-col">
					<div className="data-upload-container flex flex-col">
						<div className="data-upload-button-container">
							<Button
								className="button-dropdown button-s justify-center flex width-100"
								onClick={handleUploadDataClick}
							>
								Upload Sites Data
							</Button>
							<input
								className="input-button"
								type="file"
								onChange={handleDataChange}
							/>
						</div>
						<div className="data-preview-container">Data Preview</div>
					</div>
					<div className="fasta-upload-container flex flex-col">
						<div className="fasta-upload-button-container">
							<Button
								className="button-dropdown button-s justify-center flex width-100"
								onClick={handleUploadFastaClick}
							>
								Upload Fasta Data
							</Button>
							<input
								className="input-button"
								type="file"
								onChange={handleFastaChange}
							/>
						</div>
						<div className="fasta-preview-container">Fasta Preview</div>
					</div>
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
					<Instructions>
						This is a brief instruction on how to preprocess the data:
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
			<div className="preprocess-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Preprocess;
