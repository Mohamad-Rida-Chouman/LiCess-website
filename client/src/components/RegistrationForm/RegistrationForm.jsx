import React, { useState } from 'react';
import './RegistrationForm.css';
import '../../base.css';
import Input from '../Input/Input';
import SvgIcon from '../SvgIcon/SvgIcon';
import Logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import axios from 'axios';
import LoginForm from '../LoginForm/LoginForm';

const RegistrationForm = ({ switchToLogin }) => {
	const [username, setUserame] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [verify, setVerify] = useState('');
	const [alert, setAlert] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);

	const handleNameChange = (value) => {
		setUserame(value);
	};
	const handleEmailChange = (value) => {
		setEmail(value);
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
	};
	const handleVerifyChange = (value) => {
		setVerify(value);
	};

	const API_URL = process.env.REACT_APP_API_URL;
	const URL_REGISTER = API_URL + '/api/auth/register';

	async function handleClick() {
		if (username == '' || email == '' || password == '' || verify == '') {
			setAlert(true);
		} else {
			const bodyFormData = new FormData();
			bodyFormData.append('username', username);
			bodyFormData.append('email', email);
			bodyFormData.append('password', password);
			bodyFormData.append('password_confirmation', verify);
			axios({
				method: 'post',
				url: URL_REGISTER,
				data: bodyFormData,
				headers: { 'Content-Type': 'multipart/form-data' },
			})
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					return error;
				});
		}
	}

	return (
		<div className="main-registration-container flex gap-s padding-l">
			<div className="left-registration-container flex flex-col align-center justify-center gap-m padding-s">
				<SvgIcon
					className="full-icon flex align-center justify-center width-100"
					src={Logo}
					alt="Logo icon"
				/>
				<h1 className="flex justify-center">LiCess</h1>
			</div>
			<div className="right-registration-form flex flex-col justify-center align-center gap-m padding-s">
				<h4>Welcome!</h4>
				<Input
					className="input-stroke padding-s"
					label="Username"
					type="text"
					value={username}
					onChange={handleNameChange}
				/>
				<Input
					className="input-stroke padding-s"
					label="Email"
					type="email"
					value={email}
					onChange={handleEmailChange}
				/>
				<Input
					className="input-stroke padding-s"
					label="Password"
					type="password"
					value={password}
					onChange={handlePasswordChange}
				/>
				<Input
					className="input-stroke padding-s"
					label="Re-enter Password"
					type="password"
					value={verify}
					onChange={handleVerifyChange}
				/>

				<div className="width-100">
					<Button
						className="button button-s width-100"
						onClick={handleClick}
						linkTo="/login"
					>
						Register
					</Button>
				</div>
				<div className="switch-modal-page flex">
					<p>
						Already a member?&nbsp;
						<span className="switch-modal-word" onClick={switchToLogin}>
							Login
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default RegistrationForm;
