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
			<Link className='link' to='/rtk-limit'>
				RTK-Limit
			</Link>
			<Link className='link' to='/rtk-delete'>
				RTK-Delete
			</Link>
			<Link className='link' to='/rtk-create'>
				RTK-Create
			</Link>
		</header>
	);
}
