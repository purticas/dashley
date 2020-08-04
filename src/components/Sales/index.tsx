import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import _ from "./style.module.css";
import Icon_sales from '../../icons/sales.svg';

const data = [
	{
		name: "Jan",
		Total: 2400,
	},
	{
		name: "Feb",
		Total: 2210,
	},
	{
		name: "Mar",
		Total: 1200,
	},
	{
		name: "Apr",
		Total: 2000,
	},
	{
		name: "May",
		Total: 2181,
	},
	{
		name: "Jun",
		Total: 2500,
	},
	{
		name: "Jul",
		Total: 1500,
	},
	{
		name: "Aug",
		Total: 2000,
	},
	{
		name: "Sept",
		Total: 3000,
	},
	{
		name: "Oct",
		Total: 1900,
	},
	{
		name: "Nov",
		Total: 2300,
	},
	{
		name: "Dec",
		Total: 2400,
	}
];

export default () => (
	<section className={_.sales}>
		<div className={_.head}>
			<h2><Icon_sales />Monthly Sales</h2>
		</div>
		<div className={_.body} style={{width: '100%', height: 300}}>
			<ResponsiveContainer>
				<AreaChart
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}} >
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Area type="monotone" dataKey="Total" stroke="#1D2021" fill="#1D2021" />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	</section>
);
