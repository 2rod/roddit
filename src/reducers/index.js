import * as types from '../actions/types';

const defaultState = {
  posts: [],
  category: '',
  isLoading: false
};

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        category: action.category,
        isLoading: true
      }
      break;
    case types.GET_POSTS_COMPLETE:
      return {
        ...state,
        posts: action.posts,
        isLoading: false
      }
      break;
    default:
      return state;
  }
};

export default postsReducer;
