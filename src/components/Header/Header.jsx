import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
	return (
		<header className='header'>
			<Link to='/' className='link'>
				Home
			</Link>
			<Link className='link' to='/rtk-fetch'>
				RTK-Fetch
			</Link>
		</header>
	);
}
