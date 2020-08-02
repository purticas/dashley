import React from 'react';
import _ from './style.module.css';
import {Select} from '../Inputs';
import Icon_search from '../../icons/search.svg';

export default () => (
	<section className={_.search}>
		<div className={_.field}>
			<Icon_search />
			<input type="search" placeholder='Search...' />
		</div>
		<Select label='Filter by status' options={['All', 'Undeliverable', 'Cancelled', 'Completed']} />
	</section>
)