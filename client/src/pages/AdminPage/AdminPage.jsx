import React, { useEffect, useState } from 'react';
import PieChartComp from '../../components/PieChartComp/PieChartComp';
import './AdminPage.css';
import '../../base.css';
import LineChartComp from '../../components/LineChartComp/LineChartComp';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import axios from 'axios';

const AdminPage = () => {
	const [tasksWeekCount, setTasksWeekCount] = useState([]);
	const [tasksTypeCount, setTasksTypeCount] = useState([]);
	const [modelTypeCount, setModelTypeCount] = useState([]);
	// const token = localStorage.getItem('token');

	useEffect(() => {
		loadTasks();
	}, []);

	const API_URL = process.env.REACT_APP_API_URL;
	const URL = API_URL + '/api/tasks';

	async function loadTasks() {
		axios
			.get(
				URL
				// 	{
				// 	headers: {
				// 		Authorization: `Bearer ${token}`,
				// 	},
				// }
			)
			.then((response) => {
				const tasks = response.data;
				const currentDate = new Date();
				currentDate.setHours(0, 0, 0, 0);

				const startOfWeek = new Date(currentDate);
				startOfWeek.setDate(
					currentDate.getDate() - ((currentDate.getDay() + 2) % 7)
				);
				const endOfWeek = new Date(currentDate);
				endOfWeek.setDate(
					currentDate.getDate() - ((currentDate.getDay() + 5) % 7)
				);

				const dayCounts = {
					Monday: 0,
					Tuesday: 0,
					Wednesday: 0,
					Thursday: 0,
					Friday: 0,
					Saturday: 0,
					Sunday: 0,
				};
				tasks.forEach((task) => {
					const taskDate = new Date(task.date);
					taskDate.setHours(0, 0, 0, 0);
					if (taskDate >= startOfWeek && taskDate <= endOfWeek) {
						const dayOfWeek = taskDate.toLocaleDateString('en-US', {
							weekday: 'long',
						});
						dayCounts[dayOfWeek] += 1;
					}
				});
				setTasksWeekCount(dayCounts);

				const prefixes = [
					{ prefix: 'Preprocessed', category: 'Data Preprocessing' },
					{ prefix: 'Feature', category: 'Feature Extraction' },
					{ prefix: 'Model', category: 'Model Run' },
				];
				const taskNames = [
					{ taskName: 'Model: LGB', category: 'LGB' },
					{ taskName: 'Model: XGB', category: 'XGB' },
					{ taskName: 'Model: RF', category: 'RF' },
					{ taskName: 'Model: ENSEMBLE', category: 'Ensemble' }, // Note the uppercase here
				];

				const categoryCounts = {};
				const TaskCategoryCounts = {};
				tasks.forEach((task) => {
					const taskName = task.task_name;
					prefixes.forEach((taskNameObj) => {
						const { prefix, category } = taskNameObj;
						if (taskName.startsWith(prefix)) {
							categoryCounts[category] = (categoryCounts[category] || 0) + 1;
						}
					});
					taskNames.forEach((taskNameObj) => {
						const { taskName: targetTaskName, category } = taskNameObj;
						if (taskName.toUpperCase() === targetTaskName.toUpperCase()) {
							TaskCategoryCounts[category] =
								(TaskCategoryCounts[category] || 0) + 1;
						}
					});
				});
				const pieData1 = Object.entries(
					categoryCounts
				).map(([name, value]) => ({ name, value }));
				setTasksTypeCount(pieData1);
				const pieData2 = Object.entries(
					TaskCategoryCounts
				).map(([name, value]) => ({ name, value }));
				setModelTypeCount(pieData2);
			})
			.catch((error) => {
				return error;
			});
	}

	const pieData1 = [
		{ name: 'Data Preprocessing', value: 400 },
		{ name: 'Feature Extraction', value: 700 },
		{ name: 'Model Run', value: 200 },
	];
	const pieData2 = [
		{ name: 'LGB', value: 400 },
		{ name: 'XGB', value: 300 },
		{ name: 'RF', value: 50 },
		{ name: 'Ensemble', value: 500 },
	];
	const pieData3 = [
		{ name: 'AAC', value: 50 },
		{ name: 'AAI', value: 60 },
		{ name: 'Binary', value: 20 },
		{ name: 'QSO', value: 30 },
		{ name: 'APAAC', value: 40 },
	];

	const lineData1 = [
		{ name: 'Monday', tasks: 11 },
		{ name: 'Tuesday', tasks: 15 },
		{ name: 'Wednesday', tasks: 8 },
		{ name: 'Thursday', tasks: 8 },
		{ name: 'Friday', tasks: 5 },
		{ name: 'Saturday', tasks: 2 },
		{ name: 'Sunday', tasks: 0 },
	];
	return (
		<div className="admin-main-container flex flex-col gap-l padding-s width-90">
			<div className="flex">
				<PageTitle title="Admin Dashboard"></PageTitle>
				<Button className="button-dropdown button-s justify-center flex">
					Logout
				</Button>
			</div>
			<div className="piecharts-container flex justify-between align-center flex-wrap gap-s">
				<div className="piechart-container flex flex-col align-center justify-center">
					<h2>Tasks Usage</h2>
					<PieChartComp data={pieData1}></PieChartComp>
				</div>
				<div className="piechart-container flex flex-col align-center justify-center">
					<h2>Models Usage</h2>
					<PieChartComp data={pieData2}></PieChartComp>
				</div>
				<div className="piechart-container flex flex-col align-center justify-center">
					<h2>Features Extraction</h2>
					<PieChartComp data={pieData3}></PieChartComp>
				</div>
			</div>
			<div className="linecharts-container flex justify-center align-center flex-wrap padding-s">
				<h2>Recent Week Tasks Count</h2>
				<LineChartComp data={lineData1}></LineChartComp>
			</div>
		</div>
	);
};

export default AdminPage;
