import React from "react";
import _ from "./style.module.css";
import Icon_dots from '../../icons/dots.svg';
import Icon_arrow from '../../icons/arrow-down.svg';
import {Select} from '../Inputs';

interface Props {
	id: number;
	delivered: string;
	store: string;
	elapsed: number;
	total: string;
	status: string;
}

const Row = (props: Props) => (
	<tr>
		<td data-label='Order Id'><Icon_dots />{props.id}</td>
		<td data-label='Time delivered'>{props.delivered}</td>
		<td data-label='Store'>{props.store}</td>
		<td data-label='Time elapsed' className={`${props.elapsed > 29 ? _.warn : ''} ${props.elapsed > 59 ? _.err : ''}`}><span>{props.elapsed} mins</span></td>
		<td data-label='Total'>{props.total}</td>
		<td data-label='Status' className={props.status === 'Completed' ? _.success : ''}>{props.status}</td>
	</tr>
);

export default class Table extends React.Component {
	constructor(props: any) {
		super(props);
	}
	render() {
		return (
			<table className={_.table}>
				<thead>
					<tr>
						<th>Order Id</th>
						<th>Time delivered</th>
						<th>Store</th>
						<th>Time elapsed</th>
						<th>Total</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<Row id={123456} delivered='12 Aug 12:30' store='Arbeys' elapsed={20} total='$1200.00' status='Undeliverable' />
					<Row id={123456} delivered='12 Aug 12:30' store='Shake Shack' elapsed={24} total='$1030.00' status='Completed' />
					<Row id={123456} delivered='12 Aug 12:30' store='Wendys' elapsed={25} total='$1230.00' status='Completed' />
					<Row id={123456} delivered='12 Aug 12:30' store='Chipotle' elapsed={30} total='$1400.00' status='Undeliverable' />
					<Row id={123456} delivered='12 Aug 12:30' store='Chipotle' elapsed={60} total='$1100.00' status='Cancelled' />
					<Row id={123456} delivered='12 Aug 12:30' store='Arbeys' elapsed={20} total='$1300.00' status='Undeliverable' />
					<Row id={123456} delivered='12 Aug 12:30' store='Shake Shack' elapsed={24} total='$1500.00' status='Completed' />
					<Row id={123456} delivered='12 Aug 12:30' store='Wendys' elapsed={25} total='$1530.00' status='Completed' />
					<Row id={123456} delivered='12 Aug 12:30' store='Chipotle' elapsed={30} total='$1200.00' status='Undeliverable' />
					<Row id={123456} delivered='12 Aug 12:30' store='Chipotle' elapsed={60} total='$2100.00' status='Cancelled' />
				</tbody>
				<tfoot>
					<tr>
						<td>
							<b>20</b>out of <b>1000</b> orders
						</td>
						<td>
							<span>Rows per page:</span><Select options={['20', '40', '60', '80', '100']} />
						</td>
						<td>
							<a href="#"><span>First</span><Icon_arrow /></a>
							<ul>
								<li><b>1</b></li>
								<li>2</li>
								<li>3</li>
								<li>4</li>
								<li>5</li>
							</ul>
							<a href="#"><Icon_arrow /><span>Last</span></a>
						</td>
					</tr>
				</tfoot>
			</table>
		);
	}
}
