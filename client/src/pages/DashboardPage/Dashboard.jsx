import React from 'react';
import '../../base.css';
import './Dashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';

const Dashboard = () => {
	const tableData = [
		{
			type: 'Type 1',
			date: '2023-09-11',
			state: 'Pending',
			download: 'Link 1',
			shareResult: 'Link 2',
		},
		{
			type: 'Type 2',
			date: '2023-09-12',
			state: 'Completed',
			download: 'Link 3',
			shareResult: 'Link 4',
		},
		{
			type: 'Type 1',
			date: '2023-09-11',
			state: 'Pending',
			download: 'Link 1',
			shareResult: 'Link 2',
		},
		{
			type: 'Type 2',
			date: '2023-09-12',
			state: 'Completed',
			download: 'Link 3',
			shareResult: 'Link 4',
		},
		{
			type: 'Type 1',
			date: '2023-09-11',
			state: 'Pending',
			download: 'Link 1',
			shareResult: 'Link 2',
		},
		{
			type: 'Type 2',
			date: '2023-09-12',
			state: 'Completed',
			download: 'Link 3',
			shareResult: 'Link 4',
		},
		{
			type: 'Type 1',
			date: '2023-09-11',
			state: 'Pending',
			download: 'Link 1',
			shareResult: 'Link 2',
		},
		{
			type: 'Type 2',
			date: '2023-09-12',
			state: 'Completed',
			download: 'Link 3',
			shareResult: 'Link 4',
		},
		{
			type: 'Type 1',
			date: '2023-09-11',
			state: 'Pending',
			download: 'Link 1',
			shareResult: 'Link 2',
		},
		{
			type: 'Type 2',
			date: '2023-09-12',
			state: 'Completed',
			download: 'Link 3',
			shareResult: 'Link 4',
		},
		{
			type: 'Type 1',
			date: '2023-09-11',
			state: 'Pending',
			download: 'Link 1',
			shareResult: 'Link 2',
		},
		{
			type: 'Type 2',
			date: '2023-09-12',
			state: 'Completed',
			download: 'Link 3',
			shareResult: 'Link 4',
		},
	];

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
						{tableData.map((rowData, index) => (
							<tr key={index} className="flex justify-between gap-s width-100">
								<td className="flex justify-start align-center width-100">
									{rowData.type}
								</td>
								<td className="flex justify-start align-center width-100">
									{rowData.date}
								</td>
								<td className="flex justify-start align-center width-100">
									{rowData.state}
								</td>
								<td className="flex justify-start align-center width-100">
									{rowData.download}
								</td>
								<td className="flex justify-start align-center width-100">
									{rowData.shareResult}
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
