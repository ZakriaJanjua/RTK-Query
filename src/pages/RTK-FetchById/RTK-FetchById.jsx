import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../redux/api/postsAPI';

export default function RTKFetchById() {
	const { postId } = useParams();
	const { data, error, isError, isLoading } = useGetPostByIdQuery(postId);
	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>{error.error}</p>;
	return (
		<>
			<p>RTK-FetchById - {postId}</p>
			<p>{data.title}</p>
			<p>{data.body}</p>
		</>
	);
}
