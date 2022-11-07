import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Home from './components/Home/Home';
import RTKFetch from './components/RTK-Fetch/RTK-Fetch';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/rtk-fetch' element={<RTKFetch />} />
			</Routes>
		</>
	);
}

export default App;
