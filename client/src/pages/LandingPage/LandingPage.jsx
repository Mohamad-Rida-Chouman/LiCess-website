import React, { useRef, useState, useEffect } from 'react';
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
import Modal from '../../components/Modal/Modal';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import LoginForm from '../../components/LoginForm/LoginForm';

const LandingPage = () => {
	useEffect(() => {
		document.body.style.backgroundColor = '#020d17';
		document.body.style.color = 'white';
	}, []);

	const token = localStorage.getItem('token');
	const [isOpen, setIsOpen] = useState(false);
	const [showRegistrationModal, setShowRegistrationModal] = useState(false);

	const closeModal = () => {
		setIsOpen(false);
		setShowRegistrationModal(false);
	};
	const openRegistrationModal = () => {
		setShowRegistrationModal(true);
	};

	const openLoginModal = () => {
		setShowRegistrationModal(false);
		setIsOpen(true);
	};

	const handleDataButtonClick = () => {
		if (!token) {
			setIsOpen(true);
		}
	};

	const handleFeatureButtonClick = () => {
		if (!token) {
			setIsOpen(true);
		}
	};

	const handleModelButtonClick = () => {
		if (!token) {
			setIsOpen(true);
		}
	};

	const passFunction = () => {
		console.log('navigated');
	};

	const ref = useRef(null);

	const handleScrollClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="main-landing-container width-100">
			<div className="hero-landing-container width-100">
				<div className="main-bg width-100"></div>
				<div className="hero-landing-content flex flex-col justify-between width-100">
					<div className="landing-navbar padding-l">
						<LandingNavbar />
					</div>
					<div className="landing-headline-container flex flex-col align-center padding-l">
						<h1 className="landing-headline flex justify-center align-center width-50">
							Unlocking Protein Secrets:
						</h1>
						<h3 className="landing-subheadline flex justify-center align-center width-50">
							AI-Powered S-Nitrosylation Site Prediction Unveiled!
						</h3>
					</div>
					<div className="landing-scroll-down flex flex-col align-center padding-l">
						<p>Scroll Down</p>
						<SvgIcon
							className="small-icon pointer"
							src={ScrollDown}
							alt="scroll down icon"
							onClick={handleScrollClick}
						/>
					</div>
				</div>
			</div>
			<div className="landing-mid-container flex flex-col">
				<div className="mid-bg width-100"></div>
				<div
					ref={ref}
					className="briefing-landing-container flex flex-col padding-xl gap-xl"
				>
					<div className="briefing-title-container flex justify-center align-center gap-s">
						<div className="briefing-title border-underline flex align-center justify-center gap-s">
							<h2>LiCess</h2>
							<SvgIcon className="arrow-icon" src={Arrow} alt="Arrow icon" />
							<p className="font-24">
								<span className="bold">Li</span>ght Pro
								<span className="bold">Cess</span>
							</p>
						</div>
					</div>
					<div className="briefings-container flex flex-col align-center padding-s gap-xl">
						<div className="briefing-container flex justify-center align-center gap-m">
							<SvgIcon className="big-icon" src={Chip} alt="Chip icon" />
							<p className="briefing-text">
								LiCess aims to make the process of researching on
								S-Nitrosylation site prediction easier using AI.
							</p>
						</div>
						<div className="briefing-container flex justify-center align-center gap-m">
							<SvgIcon className="big-icon" src={Dna} alt="DNA icon" />
							<p className="briefing-text">
								Predicting S-Nitrosylation sites in proteins helps in
								understanding the behaviour of certain diseases and thus
								designing effective drugs.
							</p>
						</div>
					</div>
				</div>
				<div className="key-features-landing-container flex flex-col align-center padding-xl">
					<div className="key-features-title-container">
						<h2 className="key-features-title border-underline">
							What We Provide
						</h2>
					</div>
					{token ? (
						<div className="key-features-container flex justify-center wrap gap-m padding-l">
							<div className="key-feature-container">
								<KeyFeatureCard
									title="Data Preprocessing"
									body="Split data into different window sizes of interest."
									buttonText="Preprocess Data"
									onButtonClick={passFunction}
									linkTo="/data_preprocess"
								/>
							</div>

							<div className="key-feature-container">
								<KeyFeatureCard
									title="Features Extraction"
									body="Extract features which are most common between AI models for different Post-Translational Modifications prediction."
									buttonText="Extract Features"
									onButtonClick={passFunction}
									linkTo="/feature_extraction"
								/>
							</div>

							<div className="key-feature-container">
								<KeyFeatureCard
									title="S-Nitrosylation Site Prediction"
									body="Predict S-Nitrosylation sites in proteins using machine learning models such as Light-Gradient Boosting, Extreme-Gradient Boosting, etc."
									buttonText="Run Model"
									onButtonClick={passFunction}
									linkTo="/model_run"
								/>
							</div>
						</div>
					) : (
						<div className="key-features-container flex justify-center wrap gap-m padding-l">
							<div className="key-feature-container">
								<KeyFeatureCard
									title="Data Preprocessing"
									body="Split data into different window sizes of interest."
									buttonText="Preprocess Data"
									onButtonClick={handleDataButtonClick}
								/>
							</div>

							<div className="key-feature-container">
								<KeyFeatureCard
									title="Features Extraction"
									body="Extract features which are most common between AI models for different Post-Translational Modifications prediction."
									buttonText="Extract Features"
									onButtonClick={handleFeatureButtonClick}
								/>
							</div>

							<div className="key-feature-container">
								<KeyFeatureCard
									title="S-Nitrosylation Site Prediction"
									body="Predict S-Nitrosylation sites in proteins using machine learning models such as Light-Gradient Boosting, Extreme-Gradient Boosting, etc."
									buttonText="Run Model"
									onButtonClick={handleModelButtonClick}
								/>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="footer-landing-container">
				<div className="footer-bg width-100"></div>
				<div className="footer-landing-content flex flex-col justify-around width-100 padding-l">
					<div className="footer-title flex flex-col align-center padding-l">
						<h1>Where to find me?</h1>
					</div>
					<div className="footer-icons flex justify-center gap-m">
						<a href="mailto:shumanmohammadrida@gmail.com">
							<SvgIcon className="big-icon" src={Email} alt="email icon" />
						</a>
						<a href="https://www.linkedin.com/in/mohamad-rida-chouman/">
							<SvgIcon
								className="big-icon"
								src={LinkedIn}
								alt="linkedin icon"
							/>
						</a>
					</div>
				</div>
			</div>
			<Modal isOpen={isOpen} onClose={closeModal}>
				{showRegistrationModal ? (
					<RegistrationForm switchToLogin={openLoginModal} />
				) : (
					<LoginForm switchToRegister={openRegistrationModal} />
				)}
			</Modal>
		</div>
	);
};

export default LandingPage;
