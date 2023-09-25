import React from 'react';
import './CommunityPost.css';
import '../../base.css';
import Post from '../Post/Post';

const CommunityPost = ({
	date,
	email,
	model,
	sn,
	sp,
	acc,
	mcc,
	auc,
	fpr,
	tpr,
	comment,
}) => {
	return (
		<div className="whole-post-container border">
			<div className="user-comment-container flex flex-col width-100">
				<div className="post-owner notice-font"></div>
				<span className="user-comment-community width-100 padding-s">
					<span className="bold">{email}:&nbsp;</span>
					{comment}
				</span>
			</div>
			<Post
				date={date}
				email={email}
				model={model}
				sn={sn}
				sp={sp}
				acc={acc}
				mcc={mcc}
				auc={auc}
				fpr={fpr}
				tpr={tpr}
			/>
		</div>
	);
};

export default CommunityPost;
