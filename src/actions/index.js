import * as types from './types';

export const setPosts = (posts, category) => ({
  type: types.SET_POSTS,
  posts,
  category
})

export const isLoading = () => ({
  type: types.IS_LOADING
});
