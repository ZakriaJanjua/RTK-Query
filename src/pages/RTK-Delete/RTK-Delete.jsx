import React from 'react';
import { useDeletePostByIdMutation } from '../../redux/api/postsAPI';

export default function RTKDelete() {
	const [deletePost, result] = useDeletePostByIdMutation();
	const handleDelete = () => {
		deletePost(1);
		console.log(result);
	};

	return (
		<section className='fetch-section'>
			<p className='heading'>RTK Delete</p>
			<button onClick={handleDelete}>Delete</button>
			{result.isLoading && <p>Loading...</p>}
			{result.isError && <p>{result.error.error}</p>}
			<p>{result.status}</p>
		</section>
	);
}
