import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsAPI = createApi({
	reducerPath: 'postsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	endpoints: (builder) => ({
		getAllPosts: builder.query({
			query: () => ({
				url: '/posts',
				method: 'GET',
			}),
		}),
		getPostById: builder.query({
			query: (id) => ({
				url: `/posts/${id}`,
				method: 'GET',
			}),
		}),
		getPostsByLimit: builder.query({
			query: (limit) => ({
				url: `posts?_limit=${limit}`,
				method: 'GET',
			}),
		}),
		deletePostById: builder.mutation({
			query: (id) => ({
				url: `/posts/${id}`,
				method: 'DELETE',
			}),
		}),
		createPost: builder.mutation({
			query: (newPost) => ({
				url: '/posts',
				method: 'POST',
				body: newPost,
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}),
		}),
	}),
});

export const {
	useGetAllPostsQuery,
	useGetPostByIdQuery,
	useGetPostsByLimitQuery,
	useDeletePostByIdMutation,
	useCreatePostMutation,
} = postsAPI;
