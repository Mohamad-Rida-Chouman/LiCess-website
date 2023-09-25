import React, { useEffect, useState } from 'react';
import './PostForm.css';
import '../../base.css';
import Post from '../Post/Post';
import Button from '../Button/Button';
import axios from 'axios';
import { createRoutesFromChildren } from 'react-router';

const PostForm = (props) => {
	const task_id = props.taskId;
	useEffect(() => {
		console.log('task id is: ' + task_id);
		loadShareableResults();
	}, []);

	const API_URL = process.env.REACT_APP_API_URL;

	const [resultsToShare, setResultsToShare] = useState();

	const URL_Posts = API_URL + '/api/posts';

	async function handleSubmitClick() {
		console.log(document.getElementById('comment').value);
		const bodyFormData = new FormData();
		bodyFormData.append('date', resultsToShare.date);
		bodyFormData.append('user_email', resultsToShare.email);
		bodyFormData.append('model', resultsToShare.model);
		bodyFormData.append(
			'sensitivity',
			parseFloat(resultsToShare.data[2]).toFixed(2)
		);
		bodyFormData.append(
			'specificity',
			parseFloat(resultsToShare.data[3]).toFixed(2)
		);
		bodyFormData.append(
			'accuracy',
			parseFloat(resultsToShare.data[1]).toFixed(2)
		);
		bodyFormData.append('mcc', parseFloat(resultsToShare.data[4]).toFixed(2));
		bodyFormData.append('auc', parseFloat(resultsToShare.data[5]).toFixed(2));
		bodyFormData.append('fpr', resultsToShare.data[6]);
		bodyFormData.append('tpr', resultsToShare.data[7]);
		bodyFormData.append('comment', document.getElementById('comment').value);

		axios({
			method: 'post',
			url: URL_Posts,
			data: bodyFormData,
			headers: { 'Content-Type': 'multipart/form-data' },
		})
			.then((response) => {
				console.log('hii');
			})
			.catch((error) => {
				return error;
			});
	}

	const URL_ShareableResults = API_URL + '/api/shareableResult/' + task_id;

	const loadShareableResults = async () => {
		try {
			const response = await axios.get(URL_ShareableResults);
			if (response) {
				const result = {
					email: response.data[0].email,
					date: response.data[0].date,
					model: response.data[0].model,
					data: response.data[0].data,
				};
				const results_data = result.data.split('|').slice(0, 8);
				result.data = results_data;
				setResultsToShare(result);
			}
		} catch {
			console.log('Failed');
		}
	};

	return (
		<div className="main-post-form-container">
			<div className="post-template-main-container flex flex-col gap-m padding-m">
				<div className="post-template width-100 padding-s gap-m">
					<div className="whole-post-container border">
						<textarea
							name="comment"
							id="comment"
							wrap="soft"
							placeholder="Share your thoughts!"
							className="user-comment width-100 padding-s"
						></textarea>
						{resultsToShare && (
							<Post
								date={resultsToShare.date}
								email={resultsToShare.email}
								model={resultsToShare.model}
								sn={resultsToShare.data[2]}
								sp={resultsToShare.data[3]}
								acc={resultsToShare.data[1]}
								mcc={resultsToShare.data[4]}
								auc={resultsToShare.data[5]}
								fpr={resultsToShare.data[6]}
								tpr={resultsToShare.data[7]}
							/>
						)}
					</div>
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
