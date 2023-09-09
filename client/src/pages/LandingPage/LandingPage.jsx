import React from 'react';
import '../../base.css';
import './LandingPage.css';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';

const LandingPage = () => {
	return (
		<div className="main-landing-container">
			<div className="main-bg"></div>
			<div className="landing-content flex flex-col padding-l">
				<LandingNavbar />
			</div>
			<div className="landing-headline flex justify-center align-center">
				<h1>
					Unlocking Protein Secrets: AI-Powered S-Nitrosylation Site Prediction
					Unveiled!
				</h1>
			</div>
		</div>
	);
};

export default LandingPage;
