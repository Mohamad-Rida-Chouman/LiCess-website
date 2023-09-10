import React from 'react';
import '../../base.css';
import './Dashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';

const Dashboard = () => {
	return (
		<div className="dashboard-main-container width-100 flex flex-col gap-l padding-l">
			<div className="dashboard-navbar-container">
				<Navbar />
			</div>
			<div className="dashboard-title">
				<PageTitle title="Dashboard" />
			</div>
			<div className="dashboard-subtitle">
				<h4>Running Tasks</h4>
			</div>
			<div className="dashboard-content flex flex-col width-100">
				<div className="dashboard-content-headers justify-around flex width-100 padding-s">
					<h5>Type</h5>
					<h5>Date</h5>
					<h5>State</h5>
					<h5>Download</h5>
					<h5>Share Result</h5>
				</div>
			</div>
			<div className="dashboard-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Dashboard;
