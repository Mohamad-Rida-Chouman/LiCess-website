import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const PieChartComp = (props) => {
	const COLORS = ['#8884d8', '#82ca9d', '#FFBB28', '#FF8042', '#AF19FF'];
	const pieData = props.data;
	return (
		<PieChart className="piechart" width={250} height={250}>
			<Pie
				data={pieData}
				color="#000000"
				dataKey="value"
				nameKey="name"
				// outerRadius={120}
				fill="green"
				label
			>
				{pieData.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
			<Legend />
		</PieChart>
	);
};

export default PieChartComp;
