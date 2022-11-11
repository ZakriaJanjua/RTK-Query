import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllPostsQuery } from '../../redux/api/postsAPI';
import './RTK-Fetch.css';

export default function RTKFetch() {
	const { data, error, isError, isLoading } = useGetAllPostsQuery();
	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>{error.error}</p>;
	return (
		<section className='fetch-section'>
			<p className='heading'>RTK-Fetch</p>
			{data.map((post) => (
				<p key={post.id}>
					<Link to={`/rtk-fetch/${post.id}`} className='link'>
						{post.title}
					</Link>
				</p>
			))}
		</section>
	);
}
