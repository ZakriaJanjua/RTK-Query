import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsAPI } from './api/postsAPI';

export const store = configureStore({
	reducer: {
		[postsAPI.reducerPath]: postsAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postsAPI.middleware),
});

setupListeners(store.dispatch);
