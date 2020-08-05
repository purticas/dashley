import React from 'react';
import _ from './style.module.css';
import Welcome from '../Welcome';
import Instructions from '../Instructions';

export default () => (
	<section className={_.stats}>
		<Welcome />
		<Instructions />
	</section>
);