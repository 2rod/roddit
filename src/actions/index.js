import * as types from './types';

export const getPosts = (category) => ({
  type: types.GET_POSTS,
  category
});

export const isLoading = () => ({
  type: types.IS_LOADING
});
