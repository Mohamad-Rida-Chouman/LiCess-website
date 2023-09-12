import './Navbar.css';
import '../../base.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import Button from '../Button/Button';
import LogoSvg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';

const Navbar = () => {
	const handleDashboardButtonClick = () => {
		console.log('Dashboard Button clicked!');
	};

	const handleCommunityButtonClick = () => {
		console.log('Dashboard Button clicked!');
	};

	const handleLogoutButtonClick = () => {
		console.log('Dashboard Button clicked!');
	};

	const handleDataButtonClick = () => {
		console.log('Data Button clicked!');
	};

	const handleFeatureButtonClick = () => {
		console.log('Feature Button clicked!');
	};

	const handleModelButtonClick = () => {
		console.log('Model Button clicked!');
	};

	const options = [
		{
			label: 'Dashboard',
			value: 'dashboard',
			link: '/dashboard',
			click: handleDashboardButtonClick,
		},
		{
			label: 'Community',
			value: 'community',
			link: '/community',
			click: handleCommunityButtonClick,
		},
		{
			label: 'Logout',
			value: 'logout',
			link: '/',
			click: handleLogoutButtonClick,
		},
	];

	return (
		<div className="main-navbar-container flex justify-between width-100 padding-l">
			<div className="left-navbar-container flex align-center">
				<Link to="/">
					<SvgIcon
						className="small-icon flex align-center"
						src={LogoSvg}
						alt="Logo icon"
					/>
				</Link>
			</div>
			<div className="mid-navbar-container flex gap-s justify-center align-center">
				<Button
					className="button-navbar button-s"
					onClick={handleDataButtonClick}
					linkTo="/data_preprocess"
				>
					Preprocess Data
				</Button>
				<Button
					className="button-navbar button-s"
					onClick={handleFeatureButtonClick}
					linkTo="/feature_extraction"
				>
					Extract Features
				</Button>
				<Button
					className="button-navbar button-s"
					onClick={handleModelButtonClick}
					linkTo="/model_run"
				>
					Run Model
				</Button>
			</div>
			<div className="right-navbar-container flex align-center">
				<NavbarDropdown options={options} />
			</div>
		</div>
	);
};

export default Navbar;
