import React from 'react';
import './Post.css';
import '../../base.css';
import Input from '../Input/Input';

const Post = ({ date, email, model, sn, sp, acc, mcc, curve, comment }) => {
	return (
		<div className="whole-post-container border">
			<textarea
				name="comment"
				id="comment"
				wrap="soft"
				placeholder="Share your thoughts!"
				className="user-comment width-100 padding-s"
			></textarea>
			<div className="main-post-container flex width-100 gap-m padding-s">
				<div className="left-post-container flex flex-col width-100 gap-m">
					<div className="post-info-container flex flex-col width-100">
						<div className="post-date notice-font">{date}</div>
						<div className="post-owner notice-font">{email}</div>
					</div>
					<div className="post-content-results">
						I would like to share with everyone the results I obtained after
						using the <span className="bold">{model}</span> model: <br />
						<span className="bold">Sensitivity:</span> {sn},
						<span className="bold">Specificity:</span> {sp},
						<span className="bold">Accuracy:</span> {acc},
						<span className="bold">MCC:</span> {mcc}.
					</div>
					<div className="post-footer">
						For any questions, please reach to me on my email!
					</div>
				</div>
				<div className="right-post-container flex justify-center align-center">
					<div className="curve-container flex justify-center align-center">
						{curve}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
