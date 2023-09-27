import PieChartComp from '../../components/PieChartComp/PieChartComp';
import './AdminPage.css';
import '../../base.css';

const AdminPage = () => {
	const pieData1 = [
		{ name: 'name1', value: 400 },
		{ name: 'name2', value: 700 },
		{ name: 'name3', value: 200 },
		{ name: 'name4', value: 1000 },
	];
	return (
		<div className="pie-container flex justify-center align-center flex-wrap">
			<PieChartComp data={pieData1}></PieChartComp>
			<PieChartComp data={pieData1}></PieChartComp>
			<PieChartComp data={pieData1}></PieChartComp>
			<PieChartComp data={pieData1}></PieChartComp>
		</div>
	);
};

export default AdminPage;
