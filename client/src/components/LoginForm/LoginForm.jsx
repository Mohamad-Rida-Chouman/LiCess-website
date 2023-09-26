import React, { useState } from 'react';
import './LoginForm.css';
import '../../base.css';
import Input from '../Input/Input';
import SvgIcon from '../SvgIcon/SvgIcon';
import Logo from '../../assets/logo.svg';
import Button from '../Button/Button';

const LoginForm = ({ switchToRegister }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [alert, setAlert] = useState(false);

	const handleEmailChange = (value) => {
		setEmail(value);
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
	};

	const handleClick = () => {
		console.log('Login button clicked');
	};

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
					<Button
						className="button button-s width-100"
						onClick={handleClick}
						linkTo="/dashboard"
					>
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
