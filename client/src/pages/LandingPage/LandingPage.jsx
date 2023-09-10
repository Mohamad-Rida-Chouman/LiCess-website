import React from 'react';
import '../../base.css';
import './LandingPage.css';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';
import SvgIcon from '../../components/SvgIcon/SvgIcon';
import ScrollDown from '../../assets/scrolldown.svg';
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
			<div className="briefing-landing-container flex flex-col padding-xl gap-m">
				<div className="briefing-title-container">
					<h2 className="briefing-title">What is LiCess?</h2>
				</div>
				<div className="briefing-1-container flex"></div>
				<div className="briefing-2-container flex"></div>
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
			<div className="footer-landing-container"></div>
		</div>
	);
};

export default LandingPage;
