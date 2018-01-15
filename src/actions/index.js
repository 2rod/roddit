import * as types from './types';

export const setPosts = (posts) => ({
  type: types.SET_POSTS,
  posts
})

export const isLoading = () => ({
  type: types.IS_LOADING
});
