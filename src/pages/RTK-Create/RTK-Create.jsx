import React from 'react';
import { useCreatePostMutation } from '../../redux/api/postsAPI';

export default function RTKCreate() {
	const [form, setForm] = React.useState({ title: '', body: '', userId: '' });
	const [createPost, result] = useCreatePostMutation();

	const handleSubmit = (e) => {
		e.preventDefault();
		createPost(form);
		console.log(result);
	};

	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					id='title'
					name='title'
					value={form.title}
					onChange={(e) =>
						setForm((prev) => ({ ...prev, title: e.target.value }))
					}
				/>
				<br />
				<label htmlFor='body'>body</label>
				<input
					type='text'
					id='body'
					name='body'
					value={form.body}
					onChange={(e) =>
						setForm((prev) => ({ ...prev, body: e.target.value }))
					}
				/>
				<br />
				<label htmlFor='userId'>User Id</label>
				<input
					type='text'
					id='userId'
					name='userId'
					value={form.userId}
					onChange={(e) =>
						setForm((prev) => ({ ...prev, userId: e.target.value }))
					}
				/>
				<br />
				<input type='submit' value='Submit' />
			</form>
			{result.isLoading && <p>Loading...</p>}
			{result.isError && <p>{result.error.error}</p>}
			<p>{result.status}</p>
		</>
	);
}
