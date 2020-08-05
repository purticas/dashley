import React from "react";
import {
	BarChart,
	Bar,
	Legend,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import _ from "./style.module.css";
import Icon_receipt from '../../icons/receipt.svg';

const data = [
  {
    name: 'Wendys', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Chipotle', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Arbeys', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Shake Shack', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'In-and-Out', uv: 1890, pv: 4800, amt: 2181,
  },
];

export default () => (
	<article className={_.transactions}>
		<div className={_.head}>
			<h2>
				<Icon_receipt />
				Transactions
			</h2>
		</div>
		<div className={_.body} style={{ height: 355 }}>
			<ResponsiveContainer width="99%" aspect={3}>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{top: 5, right: 30, left: 20, bottom: 5,}}
					barSize={20}
				>
					<XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
					<YAxis /> 
					<Tooltip />
					<Legend />
					<CartesianGrid strokeDasharray="3 3" />
					<Bar dataKey="pv" fill="#616263" background={{ fill: '#eee' }} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	</article>
);
