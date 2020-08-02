import React from 'react';
import _ from './style.module.css';
import Icon_plus from '../../icons/plus.svg';
import Icon_info from '../../icons/info.svg';
import Icon_arrow from '../../icons/arrow-down.svg';

export default () => (
	<header className={_.header}>
		<ul>
			<li>
				<a href="#">
					<Icon_plus />
					<span>Invite team member</span>
				</a>
			</li>
			<li>
				<a href="#">
					<Icon_info />
					<span>Help</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span>Johanne Marx</span>
					<Icon_arrow />
				</a>
			</li>
		</ul>
	</header>
);