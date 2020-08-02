import React from 'react';
import _ from './style.module.css';
import {Select, Button} from '../Inputs';

export default () => (
	<section className={_.filters}>
		<Select label='Filter by store' options={['All','Chipotle', 'In-and-Out', 'Wendys', 'Shake Shack']} />
		<Select label='Time frame' options={['Last 7 days', 'Past month', 'Past 6 months', 'Past year']} />
		<Button label='Download' />
	</section>
);