import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import '../../base.css';
import Input from '../Input/Input';
import SvgIcon from '../SvgIcon/SvgIcon';
import Logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import axios from 'axios';

const LoginForm = ({ switchToRegister }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [alert, setAlert] = useState(false);

	const navigate = useNavigate();

	const handleEmailChange = (value) => {
		setEmail(value);
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
	};

	const API_URL = process.env.REACT_APP_API_URL;
	const URL_REGISTER = API_URL + '/api/auth/login';

	async function handleClick() {
		if (email == '' || password == '') {
			setAlert(true);
		} else {
			const bodyFormData = new FormData();
			bodyFormData.append('email', email);
			bodyFormData.append('password', password);
			axios({
				method: 'post',
				url: URL_REGISTER,
				data: bodyFormData,
				headers: { 'Content-Type': 'multipart/form-data' },
			})
				.then((response) => {
					localStorage.setItem('token', response.data.access_token);
					const currentDatetime = new Date();
					localStorage.setItem('tokenTime', currentDatetime.toISOString());
					if (response.data.user.role == 'user') {
						navigate('/dashboard');
					} else {
						navigate('/admin_dashboard');
					}
				})
				.catch((error) => {
					return error;
				});
		}
	}

	return (
		<div className="main-login-container flex gap-s padding-l">
			<div className="left-registration-container flex flex-col align-center justify-center gap-m padding-s">
				<SvgIcon
					className="full-icon flex align-center justify-center width-100"
					src={Logo}
					alt="Logo icon"
				/>
				<h1 className="flex justify-center">LiCess</h1>
			</div>
			<div className="right-login-form flex flex-col justify-center align-center gap-m padding-s">
				<h4>Welcome Back!</h4>
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
				{alert && (
					<span className="alert red-text">* Please Enter All Fields.</span>
				)}
				<div className="width-100">
					<Button className="button button-s width-100" onClick={handleClick}>
						Login
					</Button>
				</div>
				<div className="switch-modal-page flex">
					<p>
						Not a member?&nbsp;
						<span className="switch-modal-word" onClick={switchToRegister}>
							Register
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
