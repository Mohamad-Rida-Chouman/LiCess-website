import React, { useState, useEffect } from 'react';
import './Community.css';
import '../../base.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import CommunityPost from '../../components/CommunityPost/CommunityPost';
import axios from 'axios';

const Community = () => {
	useEffect(() => {
		loadPosts();
	}, []);

	const API_URL = process.env.REACT_APP_API_URL;
	const URL = API_URL + '/api/posts';

	const [posts, setPosts] = useState([]);

	async function loadPosts() {
		axios
			.get(URL)
			.then((response) => {
				const posts_array = response.data.map((post) => ({
					date: post.date,
					email: post.user_email,
					model: post.model,
					sn: post.sensitivity,
					sp: post.specificity,
					acc: post.accuracy,
					mcc: post.mcc,
					auc: post.auc,
					fpr: post.fpr,
					tpr: post.tpr,
					comment: post.comment,
				}));
				setPosts(posts_array);
			})
			.catch((error) => {
				return error;
			});
	}

	return (
		<div className="community-main-container width-100 flex flex-col gap-l padding-l">
			<div className="community-navbar-container">
				<Navbar />
			</div>
			<div className="community-title">
				<PageTitle title="Community" />
			</div>
			<div className="community-content-container gap-m flex flex-col padding-l">
				{posts.map((data, index) => (
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
								auc={data.auc}
								fpr={data.fpr}
								tpr={data.tpr}
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
