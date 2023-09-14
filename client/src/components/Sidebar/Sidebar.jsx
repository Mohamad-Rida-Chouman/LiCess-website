import React from 'react';
import './Sidebar.css';
import '../../base.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import Button from '../Button/Button';
import LogoSvg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const handleDataButtonClick = () => {
		console.log('Data Button clicked!');
	};

	const handleFeatureButtonClick = () => {
		console.log('Feature Button clicked!');
	};

	const handleModelButtonClick = () => {
		console.log('Model Button clicked!');
	};

	const handleDashboardButtonClick = () => {
		console.log('Dashboard Button clicked!');
	};

	const handleCommunityButtonClick = () => {
		console.log('Community Button clicked!');
	};

	const handleLogoutButtonClick = () => {
		console.log('Logout Button clicked!');
	};

	return (
		<div className="sidebar-main-container flex flex-col justify-center justify-between gap-m">
			<div className="sidebar-header flex justify-center align-center justify-around width-100">
				<Link to="/">
					<SvgIcon
						className="small-icon flex align-center"
						src={LogoSvg}
						alt="Logo icon"
					/>
				</Link>
				<span className="bold">LiCess</span>
			</div>
			<div className="sidebar-content flex flex-col gap-s width-100">
				<Button
					className="button-sidebar button-s width-100"
					onClick={handleDataButtonClick}
					linkTo="/data_preprocess"
				>
					Preprocess Data
				</Button>
				<Button
					className="button-sidebar button-s width-100"
					onClick={handleFeatureButtonClick}
					linkTo="/feature_extraction"
				>
					Extract Features
				</Button>
				<Button
					className="button-sidebar button-s width-100"
					onClick={handleModelButtonClick}
					linkTo="/model_run"
				>
					Run Model
				</Button>
				<Button
					className="button-sidebar button-s width-100"
					onClick={handleDashboardButtonClick}
					linkTo="/dashboard"
				>
					Dashboard
				</Button>
				<Button
					className="button-sidebar button-s width-100"
					onClick={handleCommunityButtonClick}
					linkTo="/community"
				>
					Community
				</Button>
			</div>
			<div className="sidebar-footer width-100">
				<Button
					className="button-sidebar button-s width-100"
					onClick={handleLogoutButtonClick}
					linkTo="/"
				>
					Logout
				</Button>
			</div>
		</div>
	);
};

export default Sidebar;
