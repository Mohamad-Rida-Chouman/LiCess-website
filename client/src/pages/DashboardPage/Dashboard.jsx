import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../base.css';
import './Dashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import axios from 'axios';
import Button from '../../components/Button/Button';
import { saveAs } from 'file-saver';
import Modal from '../../components/Modal/Modal';
import PostForm from '../../components/PostForm/PostForm';

const Dashboard = () => {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		console.log('dashboard');
		loadTasks();
	}, []);

	const location = useLocation();
	const API_URL = process.env.REACT_APP_API_URL;
	const URL = API_URL + '/api/taskByUser';

	async function loadTasks() {
		console.log('loading tasks');
		axios
			.get(URL)
			.then((response) => {
				const tasks_array = response.data.map((task) => ({
					task_id: task.id,
					task_name: task.task_name,
					date: task.date,
					state: task.state,
				}));
				setTasks(tasks_array);
			})
			.catch((error) => {
				return error;
			});
	}

	const URL_SingleTask = API_URL + '/api/resultByTask/';

	const handleDownloadClick = async (task_id) => {
		try {
			const response = await axios.get(URL_SingleTask + task_id);
			if (response) {
				if (response.data.data_type == 'json') {
					const array = response.data.data.split('|').slice(0, 9);
					const resultsText =
						'Model: ' +
						array[0] +
						'\nAccuracy: ' +
						array[1] +
						'\nSensitifity: ' +
						array[2] +
						'\nSpecificity: ' +
						array[3] +
						'\nMCC: ' +
						array[4] +
						'\nAUC: ' +
						array[5] +
						'\nFPR: ' +
						array[6] +
						'\nTPR: ' +
						array[7] +
						'\nConfusion Matrix: ' +
						array[8];
					const blob = new Blob([resultsText], {
						type: 'text/plain;charset=utf-8',
					});
					saveAs(blob, array[0] + '.txt');
				} else {
					const data = response.data.data.match(/s:\d+:"(.*)"/)[1];
					const jsonData = JSON.parse(data);
					const columns = Object.keys(jsonData);
					let csvContent = columns.join(',') + '\n';
					const numRows = jsonData[columns[0]].length;
					for (let i = 0; i < numRows; i++) {
						let row = columns
							.map(function (column) {
								return jsonData[column][i];
							})
							.join(',');
						csvContent += row + '\n';
					}
					const blob = new Blob([csvContent], { type: 'text/csv' });
					saveAs(blob, response.data.label);
				}
			}
		} catch {
			console.log('failed to load tasks');
		}
	};

	const [shareableTaskId, setShareableTaskId] = useState();
	const handleShareClick = (task_id) => {
		setShareableTaskId(task_id);
		setShareModalOpen(true);
	};

	const [shareModalOpen, setShareModalOpen] = useState(false);

	return (
		<div className="dashboard-main-container width-100 flex flex-col gap-l padding-l">
			<div className="dashboard-navbar-container">
				<Navbar />
			</div>
			<div className="dashboard-title">
				<PageTitle title="Dashboard" />
			</div>
			<div className="dashboard-subtitle">
				<h4>Running Tasks</h4>
			</div>
			<div className="dashboard-content-table flex flex-col width-100">
				<table className="table-content flex flex-col width-100 gap-m padding-s">
					<thead className="width-100">
						<tr className="flex justify-between gap-s width-100 border-underline">
							<th className="flex justify-start width-100">Type</th>
							<th className="flex justify-start width-100">Date</th>
							<th className="flex justify-start width-100">State</th>
							<th className="flex justify-start width-100">Download</th>
							<th className="flex justify-start width-100">Share Result</th>
						</tr>
					</thead>
					<tbody className="table-data flex flex-col gap-m">
						{tasks.map((rowData, index) => (
							<tr key={index} className="flex justify-between gap-s width-100">
								<td className="flex justify-start align-center width-100">
									{rowData.task_name}
								</td>
								<td className="flex justify-start align-center width-100">
									{rowData.date}
								</td>
								<td className="flex justify-start align-center width-100">
									{rowData.state === 'Pending' ? (
										<span className="yellow-text">{rowData.state}</span>
									) : rowData.state === 'Completed' ? (
										<span className="green-text">{rowData.state}</span>
									) : (
										<span className="red-text">{rowData.state}</span>
									)}
								</td>
								<td className="flex justify-start align-center width-100">
									{rowData.state === 'Completed' ? (
										<Button
											className="button button-s"
											onClick={() => handleDownloadClick(rowData.task_id)}
										>
											Download
										</Button>
									) : (
										<Button
											className="button-disabled button-s"
											disabled
											onClick={handleDownloadClick}
										>
											Download
										</Button>
									)}
								</td>
								<td className="flex justify-start align-center width-100">
									{rowData.task_name.startsWith('Model') &&
									rowData.state === 'Completed' ? (
										<Button
											className="button button-s"
											onClick={() => handleShareClick(rowData.task_id)}
										>
											Share Results
										</Button>
									) : (rowData.task_name.startsWith('Model') &&
											rowData.state == 'Pending') ||
									  rowData.state == 'Failed' ? (
										<Button className="button-disabled button-s" disabled>
											Share Results
										</Button>
									) : (
										<Button className="button-stroke button-s" disabled>
											Not Shareable
										</Button>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{shareModalOpen && (
					<Modal
						isOpen={shareModalOpen}
						onClose={() => setShareModalOpen(false)}
					>
						<PostForm taskId={shareableTaskId} />
					</Modal>
				)}
			</div>
			<div className="dashboard-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Dashboard;
