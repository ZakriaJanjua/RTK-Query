import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Home from './pages/Home/Home';
import RTKCreate from './pages/RTK-Create/RTK-Create';
import RTKDelete from './pages/RTK-Delete/RTK-Delete';
import RTKFetch from './pages/RTK-Fetch/RTK-Fetch';
import RTKFetchById from './pages/RTK-FetchById/RTK-FetchById';
import RTKLimit from './pages/RTK-Limit/RTK-Limit';
import RTKUpdate from './pages/RTK-Update/RTK-Update';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/rtk-fetch' element={<RTKFetch />} />
				<Route path='/rtk-fetch/:postId' element={<RTKFetchById />} />
				<Route path='/rtk-limit' element={<RTKLimit />} />
				<Route path='/rtk-delete' element={<RTKDelete />} />
				<Route path='/rtk-create' element={<RTKCreate />} />
				<Route path='/rtk-update' element={<RTKUpdate />} />
			</Routes>
		</>
	);
}

export default App;
