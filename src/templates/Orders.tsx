import React from 'react';
import Filters from '../components/Filters';
import Summary from '../components/Summary';
import Search from '../components/Search';
import Table from '../components/Table';

export default () => (
  <main>
		<h1>Completed Orders</h1>
		<Filters />
		<Summary />
		<Search />
		<Table />
  </main>
);