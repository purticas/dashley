import React from 'react';
import {Link} from 'react-router-dom';
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
					<Link to='/' data-tooltip='Dashboard'>
						<i><Icon_home /></i>
						<span>Dashboard</span>
					</Link>
				</li>
				<li>
					<Link to='/track-order' data-tooltip='Track Order'>
						<i><Icon_marker /></i>
						<span>Track Order</span>
					</Link>
				</li>
				<li>
					<Link to='/orders' className={_.active} data-tooltip='Completed Orders'>
						<i><Icon_receipt /></i>
						<span>Completed Orders</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}