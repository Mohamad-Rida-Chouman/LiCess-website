import PieChartComp from '../../components/PieChartComp/PieChartComp';
import './AdminPage.css';
import '../../base.css';
import LineChartComp from '../../components/LineChartComp/LineChartComp';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';

const AdminPage = () => {
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
		{ name: 'AAC', value: 400 },
		{ name: 'AAI', value: 700 },
		{ name: 'Binary', value: 200 },
		{ name: 'QSO', value: 1000 },
		{ name: 'APAAC', value: 1000 },
	];

	const lineData1 = [
		{ name: 'Monday', value: 11 },
		{ name: 'Tuesday', value: 15 },
		{ name: 'Wednesday', value: 8 },
		{ name: 'Thursday', value: 8 },
		{ name: 'Friday', value: 5 },
		{ name: 'Saturday', value: 2 },
		{ name: 'Sunday', value: 0 },
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
