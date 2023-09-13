import React from 'react';
import './Post.css';
import '../../base.css';

const Post = ({ date, email, model, sn, sp, acc, mcc, comment, curve }) => {
	return (
		<div className="main-post-container flex width-100 gap-m">
			<div className="left-post-container flex flex-col width-100 gap-m">
				<div className="post-info-container flex flex-col width-100">
					<div className="post-date">{date}</div>
					<div className="post-owner">{email}</div>
				</div>
				<div className="post-content-results">
					I would like to share with everyone the results I obtained after using
					the <span className="bold">{model}</span> model: <br />
					<span className="bold">Sensitivity:</span> {sn},{' '}
					<span className="bold">Specificity:</span> {sp},{' '}
					<span className="bold">Accuracy:</span> {acc},{' '}
					<span className="bold">MCC:</span> {mcc}.
				</div>
				<div className="user-comment">{comment}</div>
				<div className="post-footer">
					For any questions, please reach to me on my email!
				</div>
			</div>
			<div className="right-post-container flex justify-center align-center width-100">
				<div className="curve-container">{curve}</div>
			</div>
		</div>
	);
};

export default Post;
