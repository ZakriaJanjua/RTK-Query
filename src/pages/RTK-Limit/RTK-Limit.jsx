import React from 'react';
import { Link } from 'react-router-dom';
import { useGetPostsByLimitQuery } from '../../redux/api/postsAPI';

export default function RTKLimit() {
	const { data, error, isError, isLoading } = useGetPostsByLimitQuery(5);

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>{error.error}</p>;
	return (
		<section className='fetch-section'>
			<p className='heading'>RTK-Limit</p>
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
