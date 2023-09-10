import React from 'react';
import './Navbar.css';
import '../../base.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import Button from '../Button/Button';
import LogoSvg from '../../assets/logo.svg';

const Navbar = () => {
	const handleRegisterButtonClick = () => {
		console.log('Register Button clicked!');
	};

	const handleDataButtonClick = () => {
		console.log('Data Button clicked!');
	};

	const handleFeatureButtonClick = () => {
		console.log('Feature Button clicked!');
	};

	const handleModelButtonClick = () => {
		console.log('Model Button clicked!');
	};

	return (
		<div className="main-navbar-container flex justify-between width-100 padding-l">
			<div className="left-navbar-container flex align-center">
				<SvgIcon
					className="small-icon flex align-center"
					src={LogoSvg}
					alt="Logo icon"
				/>
			</div>
			<div className="mid-navbar-container flex gap-s justify-center align-center">
				<Button
					className="button-navbar button-s"
					onClick={handleDataButtonClick}
				>
					Preprocess Data
				</Button>
				<Button
					className="button-navbar button-s"
					onClick={handleFeatureButtonClick}
				>
					Extract Features
				</Button>
				<Button
					className="button-navbar button-s"
					onClick={handleModelButtonClick}
				>
					Run Model
				</Button>
			</div>
			<div className="right-navbar-container flex align-center">
				<Button
					className="button-navbar button-s"
					onClick={handleRegisterButtonClick}
				>
					Your Profile
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
