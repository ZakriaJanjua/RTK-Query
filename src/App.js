import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Home from './pages/Home/Home';
import RTKFetch from './pages/RTK-Fetch/RTK-Fetch';
import RTKFetchById from './pages/RTK-FetchById/RTK-FetchById';
import RTKLimit from './pages/RTK-Limit/RTK-Limit';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/rtk-fetch' element={<RTKFetch />} />
				<Route path='/rtk-fetch/:postId' element={<RTKFetchById />} />
				<Route path='/rtk-limit' element={<RTKLimit />} />
			</Routes>
		</>
	);
}

export default App;
