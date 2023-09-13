import React from 'react';
import './PostForm.css';
import '../../base.css';
import Post from '../Post/Post';

const PostForm = () => {
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
	];
	return (
		<div className="main-post-form-container">
			<div className="post-template-container">
				<div className="post-template">
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
		</div>
	);
};

export default PostForm;
