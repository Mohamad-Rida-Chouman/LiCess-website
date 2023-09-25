import React from 'react';
import './Community.css';
import '../../base.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import CommunityPost from '../../components/CommunityPost/CommunityPost';

const Community = () => {
	const postData = [
		{
			date: '2023-09-11',
			email: 'user1@example.com',
			model: 'Light-Gradient Boosting',
			sn: 0.85,
			sp: 0.92,
			acc: 0.88,
			mcc: 0.75,
			comment: 'This model performed exceptionally well on the test dataset.',
			curve: <img src="path" alt="Curve 1" />,
		},
		{
			date: '2023-09-12',
			email: 'user2@example.com',
			model: 'Extreme-Gradient Boosting',
			sn: 0.78,
			sp: 0.95,
			acc: 0.91,
			mcc: 0.82,
			comment: 'The model achieved high accuracy and specificity.',
			curve: <img src="path" alt="Curve 2" />,
		},
		{
			date: '2023-09-13',
			email: 'user3@example.com',
			model: 'Random Forest',
			sn: 0.92,
			sp: 0.88,
			acc: 0.89,
			mcc: 0.79,
			comment: 'The sensitivity and accuracy are noteworthy.',
			curve: <img src="path" alt="Curve 3" />,
		},
	];
	return (
		<div className="community-main-container width-100 flex flex-col gap-l padding-l">
			<div className="community-navbar-container">
				<Navbar />
			</div>
			<div className="community-title">
				<PageTitle title="Community" />
			</div>
			<div className="community-content-container gap-m flex flex-col padding-l">
				{postData.map((data, index) => (
					<div className="community-content flex flex-col gap-m padding-s">
						<div className="community-post">
							<CommunityPost
								key={index}
								date={data.date}
								email={data.email}
								model={data.model}
								sn={data.sn}
								sp={data.sp}
								acc={data.acc}
								mcc={data.mcc}
								comment={data.comment}
								curve={data.curve}
							/>
						</div>
					</div>
				))}
			</div>
			<div className="community-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Community;
