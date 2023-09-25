import React from 'react';
import './Post.css';
import '../../base.css';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const Post = ({ date, email, model, sn, sp, acc, mcc, auc, fpr, tpr }) => {
	const accuracy = Math.round(acc * 100) / 100;
	const sensitivity = Math.round(sn * 100) / 100;
	const Specificity = Math.round(sp * 100) / 100;
	const MCC = Math.round(mcc * 100) / 100;
	const AUC = Math.round(auc * 100) / 100;
	const FPR = JSON.parse(fpr);
	const TPR = JSON.parse(tpr);

	const data = {
		FPR,
		datasets: [
			{
				label: 'ROC',
				data: TPR.map((_, index) => ({ x: FPR[index], y: TPR[index] })),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
			},
		},
		scales: {
			x: {
				type: 'linear',
				title: {
					display: true,
					text: 'False Positive Rate (FPR)',
				},
			},
			y: {
				title: {
					display: true,
					text: 'True Positive Rate (TPR)',
				},
			},
		},
	};

	return (
		<div className="main-post-container flex width-100 gap-m padding-s">
			<div className="left-post-container flex flex-col width-100 gap-m">
				<div className="post-info-container flex flex-col width-100">
					<div className="post-date notice-font">{date}</div>
					<div className="post-owner notice-font">{email}</div>
				</div>
				<div className="post-content-results">
					I would like to share with everyone the results I obtained after using
					the <span className="bold">{model}</span> model: <br />
					<span className="bold">Accuracy:</span> {accuracy},<br />
					<span className="bold">Sensitivity:</span> {sensitivity},<br />
					<span className="bold">Specificity:</span> {Specificity},<br />
					<span className="bold">AUC:</span> {AUC},<br />
					<span className="bold">MCC:</span> {MCC}.
				</div>
				<div className="post-footer">
					For any questions, please reach to me on my email!
				</div>
			</div>
			<div className="right-post-container flex justify-center align-center">
				<div className="curve-container flex justify-center align-center">
					<Line options={options} data={data} />
				</div>
			</div>
		</div>
	);
};

export default Post;
