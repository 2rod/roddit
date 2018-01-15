import * as types from '../actions/types';

const defaultState = {
  posts: [],
  isLoading: false
};

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_POSTS:
      return {
        ...state,
        posts: action.posts,
        isLoading: false
      }
      break;
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
      break;
    default:
      return state;
  }
};

export default postsReducer;
