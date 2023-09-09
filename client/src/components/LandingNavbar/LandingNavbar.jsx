import React from 'react';
import './LandingNavbar.css';
import '../../base.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import Button from '../Button/Button';
import LogoSvg from '../../assets/logo.svg';

const LandingNavbar = () => {
	const handleRegisterButtonClick = () => {
		console.log('Register Button clicked!');
	};

	return (
		<div className="main-landing-navbar-container flex justify-between width-90 padding-l">
			<div className="left-landing-navbar-container flex align-center">
				<SvgIcon
					className="big-icon flex align-center"
					src={LogoSvg}
					alt="Logo icon"
				/>
			</div>
			<div className="right-landing-navbar-container flex align-center">
				<Button className="button button-m" onClick={handleRegisterButtonClick}>
					Register/Login
				</Button>
			</div>
		</div>
	);
};

export default LandingNavbar;
