import React from 'react';
import './Footer.css';
import '../../base.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import GithubSvg from '../../assets/github.svg';
import EmailSvg from '../../assets/email.svg';
import LinkedInSvg from '../../assets/linkedin.svg';
import ToggleDN from '../ToggleDN/ToggleDN';

const Footer = () => {
	return (
		<div className="main-footer-container flex align-center justify-around width-100 padding-l">
			<div className="left-footer-container flex">Copyrights</div>
			<div className="right-footer-container flex gap-s">
				<a href="mailto:shumanmohammadrida@gmail.com">
					<SvgIcon className="small-icon" src={EmailSvg} alt="email icon" />
				</a>
				<a href="https://github.com/Mohamad-Rida-Chouman/">
					<SvgIcon className="small-icon" src={GithubSvg} alt="github icon" />
				</a>
				<a href="https://www.linkedin.com/in/mohamad-rida-chouman/">
					<SvgIcon
						className="small-icon"
						src={LinkedInSvg}
						alt="linkedin icon"
					/>
				</a>
			</div>
			<ToggleDN></ToggleDN>
		</div>
	);
};

export default Footer;
