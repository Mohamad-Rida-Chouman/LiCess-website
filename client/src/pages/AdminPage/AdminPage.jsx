import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PieChartComp from '../../components/PieChartComp/PieChartComp';
import './AdminPage.css';
import '../../base.css';
import LineChartComp from '../../components/LineChartComp/LineChartComp';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import axios from 'axios';

const AdminPage = () => {
	const API_URL = process.env.REACT_APP_API_URL;
	const [tasksWeekCount, setTasksWeekCount] = useState([]);
	const [tasksTypeCount, setTasksTypeCount] = useState([]);
	const [modelTypeCount, setModelTypeCount] = useState([]);
	const [featuresCount, setFeaturesCount] = useState([]);
	const [token, setToken] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
			checkTokenExpired();
		}
		loadTasks();
		CHECK_Auth();
	}, []);

	const CHECK_AUTH_URL = API_URL + '/api/auth/check-authority';

	async function CHECK_Auth() {
		axios
			.get(CHECK_AUTH_URL, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			.then((response) => {
				if (!response.data) {
					console.log('Unauthorized User');
					navigate('/');
				}
			})
			.catch((error) => {
				return error;
			});
	}

	const TASKS_URL = API_URL + '/api/tasks';

	async function loadTasks() {
		axios
			.get(
				TASKS_URL
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
				const today = currentDate.toLocaleDateString('en-US', {
					weekday: 'long',
				});
				const daysOfWeek = [
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
					'Sunday',
				];
				const reorderedDays = [
					...daysOfWeek.slice(daysOfWeek.indexOf(today)),
					...daysOfWeek.slice(0, daysOfWeek.indexOf(today)),
				];
				const lineData = reorderedDays.map((day) => ({
					name: day,
					tasks: dayCounts[day],
				}));

				setTasksWeekCount(lineData);

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
				const substrings = [
					{ substring: 'AAC', category: 'AAC' },
					{ substring: 'AAI', category: 'AAI' },
					{ substring: 'Binary', category: 'Binary' },
					{ substring: 'QSO', category: 'QSO' },
					{ substring: 'APAAC', category: 'APAAC' },
				];

				const categoryCounts = {};
				const TaskCategoryCounts = {};
				const featureCounts = {};

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
					substrings.forEach((substringObj) => {
						const { substring, category } = substringObj;
						if (taskName.includes(substring)) {
							featureCounts[category] = (featureCounts[category] || 0) + 1;
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
				const pieData3 = Object.entries(featureCounts).map(([name, value]) => ({
					name,
					value,
				}));
				setFeaturesCount(pieData3);
			})
			.catch((error) => {
				return error;
			});
	}

	const LOGOUT_URL = API_URL + '/api/auth/logout';

	async function logout() {
		axios
			.get(LOGOUT_URL, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				localStorage.removeItem('token');
				localStorage.removeItem('tokenTime');
				setToken('');
				navigate('/');
			})
			.catch((error) => {
				localStorage.removeItem('token');
				localStorage.removeItem('tokenTime');
				setToken('');
				navigate('/');
				return error;
			});
	}

	const checkTokenExpired = () => {
		const savedDatetimeString = localStorage.getItem('tokenTime');
		if (savedDatetimeString) {
			const savedDatetime = new Date(savedDatetimeString);
			const currentDatetime = new Date();
			const timeDifference = currentDatetime - savedDatetime;
			const secondsPassed = Math.floor(timeDifference / 1000);
			if (secondsPassed > 3600) {
				console.log(secondsPassed);
				logout();
			}
		}
	};

	return (
		<div className="admin-main-container flex flex-col gap-l padding-s width-90">
			<div className="flex">
				<PageTitle title="Admin Dashboard"></PageTitle>
				<Button
					className="button-dropdown button-s justify-center flex"
					onClick={logout}
				>
					Logout
				</Button>
			</div>
			<div className="piecharts-container flex justify-between align-center flex-wrap gap-s">
				{tasksTypeCount && (
					<div className="piechart-container flex flex-col align-center justify-center">
						<h2>Tasks Usage</h2>
						<PieChartComp data={tasksTypeCount}></PieChartComp>
					</div>
				)}
				{modelTypeCount && (
					<div className="piechart-container flex flex-col align-center justify-center">
						<h2>Models Usage</h2>
						<PieChartComp data={modelTypeCount}></PieChartComp>
					</div>
				)}
				{featuresCount && (
					<div className="piechart-container flex flex-col align-center justify-center">
						<h2>Features Extraction</h2>
						<PieChartComp data={featuresCount}></PieChartComp>
					</div>
				)}
			</div>
			{tasksWeekCount && (
				<div className="linecharts-container flex justify-center align-center flex-wrap padding-s">
					<h2>Recent Week Tasks Count</h2>
					<LineChartComp data={tasksWeekCount}></LineChartComp>
				</div>
			)}
		</div>
	);
};

export default AdminPage;
