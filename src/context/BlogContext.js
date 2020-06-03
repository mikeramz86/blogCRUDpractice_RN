import createDataContext from './createDataContext'
import { call } from 'react-native-reanimated'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
        // if (blogPost.id === action.pauyload.id) {
        //     return action.payload
        // } else {
        //     return blogPost
        // }
      })
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload)
    default:
      return state
  }
}

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    // response.data === [{},{},{},]
    //dispatch: react is gonig to take that object and auto call reducer
    dispatch({ type: 'get_blogposts', payload: response.data })
  }
}

const addBlogPost = () => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content })

    if (callback) {
      callback()
    }
  }
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({
      type: 'delete_blogpost',
      payload: id,
    })
  }
}

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    // {title, content} is the udpated title and content
    await jsonServer.put(`/blogposts/${id}`, { title, content })
    dispatch({
      type: 'edit_blogpost',
      payload: {
        id: id,
        title,
        content,
      },
    })
    if (callback) {
      callback()
    }
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },

  []
)
