import PieChartComp from '../../components/PieChartComp/PieChartComp';
import './AdminPage.css';
import '../../base.css';
import LineChartComp from '../../components/LineChartComp/LineChartComp';
import PageTitle from '../../components/PageTitle/PageTitle';

const AdminPage = () => {
	const pieData1 = [
		{ name: 'name1', value: 400 },
		{ name: 'name2', value: 700 },
		{ name: 'name3', value: 200 },
		{ name: 'name4', value: 1000 },
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
		<div className="admin-main-container flex flex-col gap-l padding-s">
			<div className="piecharts-container flex justify-center align-center flex-wrap gap-s">
				<div className="piechart-container">
					<PieChartComp data={pieData1}></PieChartComp>
				</div>
				<div className="piechart-container">
					<PieChartComp data={pieData1}></PieChartComp>
				</div>
				<div className="piechart-container">
					<PieChartComp data={pieData1}></PieChartComp>
				</div>
				<div className="piechart-container">
					<PieChartComp data={pieData1}></PieChartComp>
				</div>
			</div>
			<div className="linecharts-container flex justify-center align-center flex-wrap padding-s">
				<LineChartComp data={lineData1}></LineChartComp>
			</div>
		</div>
	);
};

export default AdminPage;
