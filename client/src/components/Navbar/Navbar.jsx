import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '../../base.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import Button from '../Button/Button';
import LogoSvg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showRegistrationModal, setShowRegistrationModal] = useState(false);
	const [token, setToken] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
			console.log(localStorage.getItem('token'));
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
				handleLogoutButtonClick();
			}
		}
	};

	const API_URL = process.env.REACT_APP_API_URL;
	const URL = API_URL + '/api/auth/logout';

	const handleLogoutButtonClick = () => {
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
				navigate('/');
			})
			.catch((error) => {
				localStorage.removeItem('token');
				localStorage.removeItem('tokenTime');
				setToken('');
				navigate('/');
				return error;
			});
	};

	const passOnClick = () => {
		console.log('Button clicked!');
	};

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

	const userOptions = [
		{
			label: 'Preprocess Data',
			value: 'preprocessData',
			link: '/data_preprocess',
			click: passOnClick,
		},
		{
			label: 'Extract Features',
			value: 'extractFeatures',
			link: '/feature_extraction',
			click: passOnClick,
		},
		{
			label: 'Run Model',
			value: 'runModel',
			link: '/model_run',
			click: passOnClick,
		},
		{
			label: 'Dashboard',
			value: 'dashboard',
			link: '/dashboard',
			click: passOnClick,
		},
		{
			label: 'Community',
			value: 'community',
			link: '/community',
			click: passOnClick,
		},
		{
			label: 'Logout',
			value: 'logout',
			click: handleLogoutButtonClick,
		},
	];
	const guestOptions = [
		{
			label: 'Community',
			value: 'community',
			link: '/community',
			click: passOnClick,
		},
		{
			label: 'Login',
			value: 'login',
			click: openModal,
		},
	];

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
			<div className="mid-navbar-container flex justify-center align-center">
				{token && (
					<div className="flex justify-center align-center">
						<Button
							className="button-navbar button-s"
							onClick={passOnClick}
							linkTo="/data_preprocess"
						>
							Preprocess Data
						</Button>
						<Button
							className="button-navbar button-s"
							onClick={passOnClick}
							linkTo="/feature_extraction"
						>
							Extract Features
						</Button>
						<Button
							className="button-navbar button-s"
							onClick={passOnClick}
							linkTo="/model_run"
						>
							Run Model
						</Button>
						<Button
							className="button-navbar button-s width-100"
							onClick={passOnClick}
							linkTo="/dashboard"
						>
							Dashboard
						</Button>
					</div>
				)}
				<Button
					className="button-navbar button-s width-100"
					onClick={passOnClick}
					linkTo="/community"
				>
					Community
				</Button>
				{token && (
					<Button
						className="button-navbar button-s width-100"
						onClick={handleLogoutButtonClick}
					>
						Logout
					</Button>
				)}
				{!token && (
					<Button
						className="button-navbar button-s width-100"
						onClick={openModal}
					>
						Login
					</Button>
				)}
			</div>

			<div className="right-navbar-container flex align-center">
				{token && <NavbarDropdown options={userOptions} />}
				{!token && <NavbarDropdown options={guestOptions} />}
			</div>
			<Modal isOpen={isOpen} onClose={closeModal}>
				{showRegistrationModal ? (
					<RegistrationForm switchToLogin={openLoginModal} />
				) : (
					<LoginForm switchToRegister={openRegistrationModal} />
				)}
			</Modal>
		</div>
	);
};

export default Navbar;
