import React, { useState } from 'react';
import './LoginForm.css';
import '../../base.css';
import Input from '../Input/Input';
import SvgIcon from '../SvgIcon/SvgIcon';
import Logo from '../../assets/logo.svg';
import Button from '../Button/Button';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [verify, setVerify] = useState('');

	const handleEmailChange = (value) => {
		setEmail(value);
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
	};
	const handleVerifyChange = (value) => {
		setVerify(value);
	};

	const handleClick = () => {
		console.log('Login button clicked');
	};

	return (
		<div className="main-login-container flex gap-s padding-l">
			<div className="left-login-container flex align-center padding-s">
				<SvgIcon
					className="full-icon flex align-center"
					src={Logo}
					alt="Logo icon"
				/>
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
				<Input
					className="input-stroke padding-s"
					label="Re-enter Password"
					type="password"
					value={verify}
					onChange={handleVerifyChange}
				/>
				<Button className="button button-s" onClick={handleClick}>
					Register
				</Button>
				<div className="switch-modal-page flex">
					<p>
						Not a member? <span className="switch-modal-word">Register</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
