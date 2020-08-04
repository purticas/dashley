import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import _ from './style.module.css';
import Icon_menu from '../../icons/menu.svg';
import Icon_home from '../../icons/home.svg';
import Icon_marker from '../../icons/marker.svg';
import Icon_receipt from '../../icons/receipt.svg';

export default () => {
	const [open, toggle] = React.useState(false);
	return (
		<nav className={`${_.nav} ${open ? _.navOpen : ''}`}>
			<button onClick={(e:any) => {e.stopPropagation();toggle(!open)}} className={open ? _.toggleOpen : ''}>
				<Icon_menu />
			</button>
			<ul>
				<li>
					<Link exact={true} to='/' data-tooltip='Insights'>
						<i><Icon_home /></i>
						<span>Dashboard</span>
					</Link>
				</li>
				<li>
					<Link exact={true} to='/orders' data-tooltip='Completed Orders'>
						<i><Icon_receipt /></i>
						<span>Completed Orders</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}