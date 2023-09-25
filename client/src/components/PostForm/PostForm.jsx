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

	const [resultsToShare, setResultsToShare] = useState();

	const handleSubmitClick = () => {
		console.log('Share button clicked');
	};

	const API_URL = process.env.REACT_APP_API_URL;
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
