import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Home from './components/Home/Home';
import RTKFetch from './components/RTK-Fetch/RTK-Fetch';
import RTKFetchById from './components/RTK-FetchById/RTK-FetchById';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/rtk-fetch' element={<RTKFetch />} />
				<Route path='/rtk-fetch/:postId' element={<RTKFetchById />} />
			</Routes>
		</>
	);
}

export default App;
