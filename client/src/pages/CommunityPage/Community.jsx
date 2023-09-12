import React from 'react';
import './Community.css';
import '../../base.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';

const Community = () => {
	return (
		<div className="community-main-container width-100 flex flex-col gap-l padding-l">
			<div className="community-navbar-container">
				<Navbar />
			</div>
			<div className="community-title">
				<PageTitle title="Community" />
			</div>
			<div className="community-content-container gap-s flex flex-col"></div>
			<div className="community-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Community;
