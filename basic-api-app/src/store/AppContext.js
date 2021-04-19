import React, { useContext, useEffect, useReducer } from 'react'
import {ENDPOINT} from '../constants/constants'
import {
  LOADING_STORIES,
  STORIES_LOADED,
  REMOVE_STORY
} from '../actions/index'
import storyReducer from '../reducers/storyReducer'


const initialState = {
  isLoading: true,
  hits: []
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storyReducer, initialState)

  const fetchStories = async (url) => {
    dispatch({ type: LOADING_STORIES })
    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({
        type: STORIES_LOADED,
        payload: { hits: data.hits},
      })
    } catch (error) {
      console.log(error)
    }
  }

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id })
  }  
  useEffect(() => {
    fetchStories(`${ENDPOINT}`)
  },[])

  return (
    <AppContext.Provider
      value={{ ...state, removeStory }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
