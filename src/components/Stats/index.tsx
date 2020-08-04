import React from 'react';
import _ from './style.module.css';
import Stores from '../Stores';
import Transactions from '../Transactions';

export default () => (
	<section className={_.stats}>
		<Stores />
		<Transactions />
	</section>
);