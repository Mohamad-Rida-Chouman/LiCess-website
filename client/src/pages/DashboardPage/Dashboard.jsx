import React, { useEffect, useState } from 'react';
import '../../base.css';
import './Dashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import axios from 'axios';
import Button from '../../components/Button/Button';

const Dashboard = () => {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		loadTasks();
	}, []);

	const URL = 'http://127.0.0.1:8000/api/taskByUser';

	async function loadTasks() {
		try {
			const response = await axios.get(URL);
			if (response) {
				const tasks_array = response.data.map((task) => ({
					task_id: task.id,
					task_name: task.task_name,
					date: task.date,
					state: task.state,
				}));
				tasks_array.sort((a, b) => new Date(b.date) - new Date(a.date));
				setTasks(tasks_array);
			}
		} catch {
			console.log('failed to load tasks');
		}
	}

	const handleDownloadClick = (task_id) => {
		console.log('Download pressed on task: ', task_id);
	};
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
										<Button className="button button-s">Share Results</Button>
									) : rowData.task_name.startsWith('Model') &&
									  rowData.state !== 'Pending' ? (
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
			</div>
			<div className="dashboard-footer-container width-100">
				<Footer />
			</div>
		</div>
	);
};

export default Dashboard;
