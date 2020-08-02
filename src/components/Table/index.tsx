import React from "react";
import _ from "./style.module.css";

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
		<td data-label='Order Id'>{props.id}</td>
		<td data-label='Time delivered'>{props.delivered}</td>
		<td data-label='Store'>{props.store}</td>
		<td data-label='Time elapsed'>{props.delivered}</td>
		<td data-label='Total'>{props.total}</td>
		<td data-label='Status'>{props.status}</td>
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
					<Row id={123456} delivered='12 Aug 12:30' store='Arbeys' elapsed={20} total='R 1200.00' status='Underliverable' />
					<Row id={123456} delivered='12 Aug 12:30' store='Shake Shack' elapsed={24} total='R 1200.00' status='Completed' />
					<Row id={123456} delivered='12 Aug 12:30' store='Wendys' elapsed={25} total='R 1200.00' status='Completed' />
					<Row id={123456} delivered='12 Aug 12:30' store='Chipotle' elapsed={30} total='R 1200.00' status='Underliverable' />
					<Row id={123456} delivered='12 Aug 12:30' store='Chipotle' elapsed={60} total='R 1200.00' status='Cancelled' />
					<Row id={123456} delivered='12 Aug 12:30' store='Arbeys' elapsed={20} total='R 1200.00' status='Underliverable' />
					<Row id={123456} delivered='12 Aug 12:30' store='Shake Shack' elapsed={24} total='R 1200.00' status='Completed' />
					<Row id={123456} delivered='12 Aug 12:30' store='Wendys' elapsed={25} total='R 1200.00' status='Completed' />
					<Row id={123456} delivered='12 Aug 12:30' store='Chipotle' elapsed={30} total='R 1200.00' status='Underliverable' />
					<Row id={123456} delivered='12 Aug 12:30' store='Chipotle' elapsed={60} total='R 1200.00' status='Cancelled' />
				</tbody>
				<tfoot></tfoot>
			</table>
		);
	}
}
