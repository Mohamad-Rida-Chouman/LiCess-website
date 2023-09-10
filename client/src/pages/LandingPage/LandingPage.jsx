import React from 'react';
import '../../base.css';
import './LandingPage.css';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';
import SvgIcon from '../../components/SvgIcon/SvgIcon';
import ScrollDown from '../../assets/scrolldown.svg';
import Chip from '../../assets/chip.svg';
import Dna from '../../assets/dna.svg';
import Arrow from '../../assets/arrow.svg';
import Email from '../../assets/email.svg';
import Github from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';
import KeyFeatureCard from '../../components/KeyFeatureCard/KeyFeatureCard';

const LandingPage = () => {
	const handleDataButtonClick = () => {
		console.log('Data Button clicked!');
	};

	const handleFeatureButtonClick = () => {
		console.log('Feature Button clicked!');
	};

	const handleModelButtonClick = () => {
		console.log('Model Button clicked!');
	};

	return (
		<div className="main-landing-container width-100">
			<div className="hero-landing-container width-100">
				<div className="main-bg width-100"></div>
				<div className="hero-landing-content flex flex-col justify-between width-100">
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
			<div className="briefing-landing-container flex flex-col padding-xl gap-xl">
				<div className="briefing-title-container flex justify-center align-center gap-s">
					<h2 className="briefing-title">LiCess</h2>
					<SvgIcon className="arrow-icon" src={Arrow} alt="Arrow icon" />
					<p className="font-24">
						<span className="bold">Li</span>ght Pro
						<span className="bold">Cess</span>
					</p>
				</div>
				<div className="briefings-container flex flex-col align-center padding-s gap-xl">
					<div className="briefing-container flex justify-center align-center gap-m">
						<SvgIcon className="big-icon" src={Chip} alt="Chip icon" />
						<p className="briefing-text">
							LiCess aims to make the process of researching on S-Nitrosylation
							site prediction easier using AI
						</p>
					</div>
					<div className="briefing-container flex justify-center align-center gap-m">
						<SvgIcon className="big-icon" src={Dna} alt="DNA icon" />
						<p className="briefing-text">
							Predicting S-Nitrosylation sites in proteins helps in
							understanding the behaviour of certain diseases and thus designing
							effective drugs
						</p>
					</div>
				</div>
			</div>
			<div className="key-features-landing-container flex flex-col align-center padding-xl">
				<div className="key-features-title-container">
					<h2 className="key-features-title">What We Provide</h2>
				</div>
				<div className="key-features-container flex justify-center align-center wrap gap-m padding-l">
					<KeyFeatureCard
						title="Data Preprocessing"
						body="Split data into different window sizes of interest"
						buttonText="Preprocess Data"
						onButtonClick={handleDataButtonClick}
					/>
					<KeyFeatureCard
						title="Features Extraction"
						body="Extract features which are most common between AI models for different Post-Translational Modifications prediction"
						buttonText="Extract Features"
						onButtonClick={handleFeatureButtonClick}
					/>
					<KeyFeatureCard
						title="S-Nitrosylation Site Prediction"
						body="Predict S-Nitrosylation sites in proteins using machine learning models such as Light-Gradient Boosting, Extreme-Gradient Boosting..."
						buttonText="Run Model"
						onButtonClick={handleModelButtonClick}
					/>
				</div>
			</div>
			<div className="footer-landing-container">
				<div className="footer-bg width-100"></div>
				<div className="footer-landing-content flex flex-col justify-around width-100 padding-l">
					<div className="footer-title flex flex-col align-center padding-l">
						<h1>Where to find me?</h1>
					</div>
					<div className="footer-icons flex justify-center gap-m">
						<SvgIcon className="big-icon" src={Email} alt="email icon" />
						<SvgIcon className="big-icon" src={Github} alt="github icon" />
						<SvgIcon className="big-icon" src={LinkedIn} alt="linkedin icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
