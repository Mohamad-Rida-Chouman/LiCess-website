import React from 'react';
import '../../base.css';
import './LandingPage.css';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';
import SvgIcon from '../../components/SvgIcon/SvgIcon';
import ScrollDown from '../../assets/scrolldown.svg';

const LandingPage = () => {
	return (
		<div className="main-landing-container">
			<div className="hero-landing-container">
				<div className="main-bg"></div>
				<div className="hero-landing-content flex flex-col justify-between">
					<div className="landing-navbar padding-l">
						<LandingNavbar />
					</div>
					<div className="landing-headline flex flex-col align-center padding-l">
						<h1 className="width-25">
							Unlocking Protein Secrets: AI-Powered S-Nitrosylation Site
							Prediction Unveiled!
						</h1>
					</div>
					<div className="landing-scroll-down flex flex-col align-center padding-l">
						<p>Scroll Down</p>
						<SvgIcon
							className="small-icon"
							src={ScrollDown}
							alt="scroll down icon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
