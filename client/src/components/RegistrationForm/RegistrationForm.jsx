import React, { useState } from 'react';
import './RegistrationForm.css';
import '../../base.css';
import Input from '../Input/Input';
import SvgIcon from '../SvgIcon/SvgIcon';
import Logo from '../../assets/logo.svg';

const RegistrationForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [verify, setVerify] = useState('');

	const handleNameChange = (value) => {
		setName(value);
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

	return (
		<div className="main-registration-container flex gap-m padding-l">
			<div className="left-registration-container flex align-center padding-l">
				<SvgIcon
					className="full-icon flex align-center"
					src={Logo}
					alt="Logo icon"
				/>
			</div>
			<div className="right-registration-form flex flex-col justify-center align-center gap-m padding-l">
				<h4>Welcome!</h4>
				<Input
					className="input-stroke padding-s"
					label="Username"
					type="text"
					value={name}
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
				<div className="switch-modal-page flex">
					<p>
						Already a member? <span className="switch-modal-word">Login</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default RegistrationForm;
