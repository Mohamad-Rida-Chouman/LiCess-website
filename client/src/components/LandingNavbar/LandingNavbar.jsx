import React, { useState, useEffect } from 'react';
import './LandingNavbar.css';
import '../../base.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import Button from '../Button/Button';
import LogoSvg from '../../assets/logo.svg';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import axios from 'axios';

const LandingNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showRegistrationModal, setShowRegistrationModal] = useState(false);
	const [token, setToken] = useState(null);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
			checkTokenExpired();
		}
	}, []);

	const checkTokenExpired = () => {
		const savedDatetimeString = localStorage.getItem('tokenTime');
		if (savedDatetimeString) {
			const savedDatetime = new Date(savedDatetimeString);
			const currentDatetime = new Date();
			const timeDifference = currentDatetime - savedDatetime;
			const secondsPassed = Math.floor(timeDifference / 1000);
			if (secondsPassed > 3600) {
				logout();
			}
		}
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const API_URL = process.env.REACT_APP_API_URL;
	const URL = API_URL + '/api/auth/logout';

	const logout = () => {
		axios
			.get(URL, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				localStorage.removeItem('token');
				localStorage.removeItem('tokenTime');
				setToken('');
			})
			.catch((error) => {
				return error;
			});
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
				{token && (
					<Button className="button button-m" onClick={logout}>
						Logout
					</Button>
				)}
				{!token && (
					<Button className="button button-m" onClick={openModal}>
						Get Started
					</Button>
				)}

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
