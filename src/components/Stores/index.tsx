import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import _ from './style.module.css';
import Icon_store from '../../icons/store.svg';

const data = [
  {
    name: 'Wendys', total: 4000, time: 2400, amt: 2400,
  },
  {
    name: 'Chipotle', total: 3000, time: 1398, amt: 2210,
  },
  {
    name: 'Arbeys', total: 2000, time: 9800, amt: 2290,
  },
  {
    name: 'Shake Shack', total: 2780, time: 3908, amt: 2000,
  },
];

export default () => (
	<article className={_.stores}>
		<div className={_.head}>
			<h2><Icon_store />Stores</h2>
		</div>
		<div className={_.body} style={{height: 325}}>
			<ResponsiveContainer width="99%" aspect={3}>
				<AreaChart
					width={500}
					height={400}
					data={data}
					margin={{
						top: 10, right: 30, left: 0, bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Area type="monotone" dataKey="total" stackId="1" stroke="#616263" fill="#616263" />
					<Area type="monotone" dataKey="time" stackId="1" stroke="#8E8F90" fill="#8E8F90" />
					<Area type="monotone" dataKey="amt" stackId="1" stroke="#BBBCBC" fill="#BBBCBC" />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	</article>
);