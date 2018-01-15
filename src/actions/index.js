import * as types from './types';

export const getPosts = (category) => ({
  type: types.GET_POSTS,
  category
});

export const setPosts = (posts) => ({
  type: types.GET_POSTS_COMPLETE,
  posts
})

export const isLoading = () => ({
  type: types.IS_LOADING
});
