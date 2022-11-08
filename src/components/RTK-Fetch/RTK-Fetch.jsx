import React from 'react';
import { useGetAllPostsQuery } from '../../redux/api/postsAPI';
import './RTK-Fetch.css';

export default function RTKFetch() {
	const { data, error, isError, isLoading } = useGetAllPostsQuery();
	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error: {error.message}</p>;
	return (
		<section className='fetch-section'>
			<p className='heading'>RTK-Fetch</p>
			{data.map((post) => (
				<p key={post.id}>{post.title}</p>
			))}
		</section>
	);
}
