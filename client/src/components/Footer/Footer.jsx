import React from 'react';
import './Footer.css';
import '../../base.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import GithubSvg from '../../assets/github.svg';
import EmailSvg from '../../assets/email.svg';
import LinkedInSvg from '../../assets/linkedin.svg';

const Footer = () => {
	return (
		<div className="main-footer-container flex align-center justify-around width-90 padding-l">
			<div className="left-footer-container flex">Copyrights</div>
			<div className="right-footer-container flex gap-s">
				<SvgIcon className="small-icon" src={EmailSvg} alt="email icon" />
				<SvgIcon className="small-icon" src={GithubSvg} alt="github icon" />
				<SvgIcon className="small-icon" src={LinkedInSvg} alt="linkedin icon" />
			</div>
		</div>
	);
};

export default Footer;
