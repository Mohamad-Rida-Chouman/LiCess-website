import React from 'react';
import './Post.css';
import '../../base.css';

const Post = ({ date, email, sn, sp, acc, mcc, comment, curve }) => {
	return (
		<div className="main-post-container flex width-100 gap-m">
			<div className="left-post-container flex flex-col width-100 gap-s">
				<div className="post-info-container flex flex-col width-100">
					<div className="post-date">{date}</div>
					<div className="post-owner">{email}</div>
				</div>
				<div className="post-content-results">
					I would like to share with everyone the results I obtained after using
					the light-gradient boosting model: <br />
					Sensitivity: {sn}, Specificity: {sp}, Accuracy: {acc}, MCC: {mcc}.
				</div>
				<div className="user-comment">{comment}</div>
			</div>
			<div className="right-post-container flex justify-center align-center width-100">
				{curve}
			</div>
		</div>
	);
};

export default Post;
