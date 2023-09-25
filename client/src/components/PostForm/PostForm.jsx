import React, { useState } from 'react';
import './PostForm.css';
import '../../base.css';
import Post from '../Post/Post';
import AUCCurve from '../../assets/aucCurve.jpg';
import Input from '../Input/Input';
import Button from '../Button/Button';

const PostForm = () => {
	const handleSubmitClick = () => {
		console.log('Share button clicked');
	};

	const postData = [
		{
			date: '2023-09-11',
			email: 'user1@example.com',
			model: 'Light-Gradient Boosting',
			sn: 0.85,
			sp: 0.92,
			acc: 0.88,
			mcc: 0.75,
			curve: <img src={AUCCurve} alt="Curve 1" />,
		},
	];

	return (
		<div className="main-post-form-container">
			<div className="post-template-main-container flex flex-col gap-m padding-m">
				<div className="post-template width-100 padding-s gap-m">
					{postData.map((data) => (
						<Post
							date={data.date}
							email={data.email}
							model={data.model}
							sn={data.sn}
							sp={data.sp}
							acc={data.acc}
							mcc={data.mcc}
							curve={data.curve}
						/>
					))}
				</div>
				<div className="post-submit-container flex justify-center width-100">
					<Button
						className="button button-m width-100"
						onClick={handleSubmitClick}
						linkTo="/community"
					>
						Share Post
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PostForm;
