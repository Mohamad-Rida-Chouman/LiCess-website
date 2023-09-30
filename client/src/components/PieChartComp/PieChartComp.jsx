import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import CustomTooltip from '../CustomToolTip/CustomToolTip';

const PieChartComp = (props) => {
	const COLORS = ['#E0DEFF', '#BAEECD', '#FFDF9B', '#FF9D9D', '#E5B5FF'];
	const pieData = props.data;

	return (
		<PieChart className="piechart" width={250} height={250}>
			<Legend
				layout="vertical"
				align="left"
				verticalAlign="middle"
				wrapperStyle={{ width: 100, whiteSpace: 'break-spaces' }}
			/>
			<Pie
				data={pieData}
				color="#000000"
				dataKey="value"
				nameKey="name"
				fill="green"
				// label
			>
				{pieData.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
			<Tooltip content={<CustomTooltip />} />
		</PieChart>
	);
};

export default PieChartComp;
