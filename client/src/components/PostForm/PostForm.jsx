import React, { useState } from 'react';
import './PostForm.css';
import '../../base.css';
import Post from '../Post/Post';
import AUCCurve from '../../assets/aucCurve.jpg';
import Input from '../Input/Input';
import Button from '../Button/Button';

const PostForm = () => {
	const [userComment, setUserComment] = useState('');

	const handleUserCommentChange = (value) => {
		setUserComment(value);
	};

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
			comment: (
				<Input
					className="input-form justify-start padding-s width-100"
					type="text"
					label="What are your thoughts on the results obtained?"
					value={userComment}
					onChange={handleUserCommentChange}
				/>
			),
			curve: <img src={AUCCurve} alt="Curve 1" />,
		},
	];

	return (
		<div className="main-post-form-container">
			<div className="post-template-main-container flex flex-col gap-m padding-m">
				<div className="post-template-title">
					<h3>Your post will look like this:</h3>
				</div>
				<div className="post-template-container">
					<div className="post-template width-100 border padding-s gap-m">
						{postData.map((data) => (
							<Post
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
						))}
					</div>
				</div>

				{/* <div className="user-comment flex flex-col gap-m width-100">
					<h4>What are your thoughts on the results obtained?</h4>
					<Input
						className="input-form justify-start padding-s width-100"
						type="text"
						label="Add a Comment"
						value={userComment}
						onChange={handleUserCommentChange}
					/>
				</div> */}
				<div className="post-submit-container flex width-100">
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
