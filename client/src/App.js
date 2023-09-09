import React, { useState } from 'react';
import './App.css';
import './base.css';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import Dropdown from './components/Dropdown/Dropdown';
import Input from './components/Input/Input';
import Radio from './components/Radio/Radio';
import KeyFeatureCard from './components/KeyFeatureCard/KeyFeatureCard';
import githubsvg from './assets/logo.svg';
import SvgIcon from './components/SvgIcon/SvgIcon';
import Navbar from './components/Navbar/Navbar';
import PageTitle from './components/PageTitle/PageTitle';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
	// button related function(s)
	const handleClick = () => {
		console.log('Button clicked');
	};

	// checkbox related function(s)
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = (checked) => {
		setIsChecked(checked);
	};

	// dropdown related function(s)
	const options = [
		{ label: '7', value: 'window7' },
		{ label: '9', value: 'window9' },
		{ label: '11', value: 'window11' },
	];

	// input related function(s)
	const [email, setEmail] = useState('');

	const handleEmailChange = (value) => {
		setEmail(value);
	};

	// radio related function(s)
	const [selectedRadioOption, setSelectedRadioOption] = useState('');

	const handleRadioOptionChange = (label) => {
		setSelectedRadioOption(label);
	};

	const radioOptions = [
		{ value: 'model1', label: 'Model 1' },
		{ value: 'model2', label: 'Model 2' },
		{ value: 'model3', label: 'Model 3' },
	];

	// key feature card related function(s)
	const handleDataButtonClick = () => {
		console.log('Data Button clicked!');
	};

	const handleModelButtonClick = () => {
		console.log('Model Button clicked!');
	};

	// modal related function(s)
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className="App flex flex-col align-center gap-m">
			<h1>Hello, World!</h1>

			<h3>This is the Navbar component</h3>
			<Navbar />

			<h3>This is the Button component</h3>
			<div className="buttons-container">
				<Button className="button button-s" onClick={handleClick}>
					small
				</Button>
				<Button className="button button-m" onClick={handleClick}>
					big
				</Button>
				<Button className="button-stroke button-m" onClick={handleClick}>
					stroked
				</Button>
				<Button
					className="button-disabled button-m"
					onClick={handleClick}
					disabled
				>
					disabled
				</Button>
				<Button className="button-navbar button-m" onClick={handleClick}>
					navbar-related
				</Button>
				<Button className="button-dropdown button-m" onClick={handleClick}>
					dropdown
				</Button>
			</div>

			<h3>This is the Checkbox component</h3>
			<Checkbox checked={isChecked} onChange={handleCheckboxChange}>
				Check this box!
			</Checkbox>

			<h3>This is the Dropdown component</h3>
			<Dropdown options={options} children="window size" />

			<h3>This is the Input component</h3>
			<Input
				className="input-stroke padding-s"
				label="Email"
				type="email"
				value={email}
				onChange={handleEmailChange}
			/>

			<h3>This is the Radio component</h3>
			<Radio
				className="radio"
				options={radioOptions}
				selectedOption={selectedRadioOption}
				onChange={handleRadioOptionChange}
			/>

			<h3>This is the Key Feature Card component</h3>
			<KeyFeatureCard
				title="Data Preprocessing"
				body="Split data into different window sizes of interest"
				buttonText="Preprocess Data"
				onButtonClick={handleDataButtonClick}
			/>
			<KeyFeatureCard
				title="S-Nitrosylation Site Prediction"
				body="Predict S-Nitrosylation sites in proteins using machine learning models such as Light-Gradient Boosting, Extreme-Gradient Boosting..."
				buttonText="Run Model"
				onButtonClick={handleModelButtonClick}
			/>

			<h3>This is the Svg Icon component (big icon, small icon)</h3>
			<div className="flex gap-l align-center padding-l">
				<SvgIcon className="big-icon" src={githubsvg} alt="github icon" />
				<SvgIcon className="small-icon" src={githubsvg} alt="github icon" />
			</div>

			<h3>This is the Page Title component</h3>
			<PageTitle title="Model Page" />

			<h3>This is the Footer component</h3>
			<Footer />

			<h3>This is the Modal + Registration Form component</h3>
			<Button className="button-navbar button-s" onClick={openModal}>
				Register/Login
			</Button>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<RegistrationForm />
			</Modal>
		</div>
	);
}

export default App;
