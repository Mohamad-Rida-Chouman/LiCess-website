import React, { useState } from 'react';
import './LandingNavbar.css';
import '../../base.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import Button from '../Button/Button';
import LogoSvg from '../../assets/logo.svg';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';

const LandingNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showRegistrationModal, setShowRegistrationModal] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setShowRegistrationModal(false);
	};
	const openRegistrationModal = () => {
		setShowRegistrationModal(true);
	};

	const openLoginModal = () => {
		setShowRegistrationModal(false);
		setIsOpen(true);
	};

	return (
		<div className="main-landing-navbar-container flex justify-between width-100 padding-l">
			<div className="left-landing-navbar-container flex align-center">
				<SvgIcon
					className="big-icon flex align-center"
					src={LogoSvg}
					alt="Logo icon"
				/>
				<h3>LiCess</h3>
			</div>
			<div className="right-landing-navbar-container flex align-center">
				<Button className="button button-m" onClick={openModal}>
					Get Started
				</Button>
				<Modal isOpen={isOpen} onClose={closeModal}>
					{showRegistrationModal ? (
						<RegistrationForm switchToLogin={openLoginModal} />
					) : (
						<LoginForm switchToRegister={openRegistrationModal} />
					)}
				</Modal>
			</div>
		</div>
	);
};

export default LandingNavbar;
