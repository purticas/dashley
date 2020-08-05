import React from 'react';
import _ from './style.module.css';
import Icon_store from '../../icons/store.svg';

export default () => (
	<article className={_.welcome}>
		<div className={_.head}>
			<h2><Icon_store />Welcome</h2>
		</div>
		<div className={_.body} style={{height: 325}}>
			<p>Welcome to the React & Typescript assesment task. This is demo project to demonstrate my skills with React & Responsive Design. You are now on the Dahsboard, which is called <em>Insights</em>. Here you can view a dummy chart using <b>Recharts</b>.</p>
			<p>In the menu on the left, is a link to the <em>Completed Orders</em> route. There you will find a few custom form elements demonstrating the use of React's state, and a fully responsive table.</p>
		</div>
	</article>
);