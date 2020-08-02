import React from 'react';
import _ from './style.module.css';
import Icon_analytics from '../../icons/analytics.svg';

interface Props {
	count: number,
	label: string,
	description: string,
	completed?: boolean
}

const Stat = (props:Props) => (
	<div className={_.stat}>
		<div>{props.count}</div>
		<span className={props.completed ? _.completed : ''}>{props.label}</span>
		<span>{props.description}</span>
	</div>
)

export default () => (
	<section className={_.summary}>
		<div className={_.head}>
			<h2><Icon_analytics />Summary of completed orders</h2>
			<time>Last updated 12:30</time>
		</div>
		<div className={_.body}>
			<Stat
				count={2}
				label='Cancelled Orders'
				description='Manual refund to be processed' />
			<Stat
				count={45}
				label='Undeliverable Orders'
				description='Driver could not deliver' />
			<Stat
				count={468}
				label='Completed Orders'
				description='Customers received order' completed />
		</div>
	</section>
);