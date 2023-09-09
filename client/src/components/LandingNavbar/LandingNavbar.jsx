import React, { useState } from 'react';
import './LandingNavbar.css';
import '../../base.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import Button from '../Button/Button';
import LogoSvg from '../../assets/logo.svg';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const LandingNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className="main-landing-navbar-container flex justify-between width-100 padding-l">
			<div className="left-landing-navbar-container flex align-center">
				<SvgIcon
					className="big-icon flex align-center"
					src={LogoSvg}
					alt="Logo icon"
				/>
			</div>
			<div className="right-landing-navbar-container flex align-center">
				<Button className="button button-s" onClick={openModal}>
					Register / Login
				</Button>
				<Modal isOpen={isOpen} onClose={closeModal}>
					<RegistrationForm />
				</Modal>
			</div>
		</div>
	);
};

export default LandingNavbar;
