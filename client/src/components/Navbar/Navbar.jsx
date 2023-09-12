import React from 'react';
import './Navbar.css';
import '../../base.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import Button from '../Button/Button';
import LogoSvg from '../../assets/logo.svg';
import Hamburger from '../../assets/hamburger.svg';
import { Link } from 'react-router-dom';

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
				<Link to="/">
					<SvgIcon
						className="small-icon flex align-center"
						src={LogoSvg}
						alt="Logo icon"
					/>
				</Link>
			</div>
			<div className="mid-navbar-container flex gap-s justify-center align-center">
				<Link to="/data_preprocess">
					<Button
						className="button-navbar button-s"
						onClick={handleDataButtonClick}
					>
						Preprocess Data
					</Button>
				</Link>
				<Link to="/feature_extraction">
					<Button
						className="button-navbar button-s"
						onClick={handleFeatureButtonClick}
					>
						Extract Features
					</Button>
				</Link>
				<Link to="/model_run">
					<Button
						className="button-navbar button-s"
						onClick={handleModelButtonClick}
					>
						Run Model
					</Button>
				</Link>
			</div>
			<div className="right-navbar-container flex align-center">
				<Button
					className="button-navbar button-s"
					onClick={handleRegisterButtonClick}
				>
					<SvgIcon
						className="small-icon flex align-center"
						src={Hamburger}
						alt="Hamburger icon"
					/>
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
