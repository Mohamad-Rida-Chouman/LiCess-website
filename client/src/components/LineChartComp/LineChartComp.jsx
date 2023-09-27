import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from 'recharts';

const LineChartComp = (props) => {
	const pdata = props.data;
	return (
		<ResponsiveContainer aspect={5}>
			<LineChart data={pdata}>
				<CartesianGrid />
				<XAxis dataKey="name" interval={'preserveStartEnd'} />
				<YAxis></YAxis>
				<Legend />
				<Tooltip />
				<Line dataKey="value" stroke="#ffbb28" activeDot={{ r: 8 }} />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default LineChartComp;
