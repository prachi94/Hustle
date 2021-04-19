import {
  LOADING_STORIES,
  STORIES_LOADED,
  REMOVE_STORY
} from '../actions/index'

const storyReducer = (state, action) => {
  switch (action.type) {
    case LOADING_STORIES:
      return { ...state, isLoading: true }
    case STORIES_LOADED:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits
        }
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      }
    default:
      return state;
  }
}
export default storyReducer
