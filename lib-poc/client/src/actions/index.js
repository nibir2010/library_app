import axios from 'axios';

let nextTodoId = 4

export const fetchAllBooks = () =>{
  const request = axios.get('/getBookList');
  return (dispatch)=>{
    return request.then(response=>{
      dispatch({
        type: 'FETCH_ALL',
        data: response.data
      })
    })
  }
}

export const addTodo = (name,description,author) =>{
  const request = axios.post('/addNewBook', {
    name,
    description,
    author
  });
  return (dispatch)=>{
    return request.then(response=>{
        dispatch({
          type: 'FETCH_ALL',
          data: response.data
      })
    })
  }
}

export const editTodo = (name,description,author,id) =>{
  const request = axios.post('/editBook', {
    id,
    name,
    description,
    author
  });
  return (dispatch)=>{
    return request.then(response=>{
        dispatch({
          type: 'FETCH_ALL',
          data: response.data
      })
    })
  }
}

// export const editTodo = (name,description,author,id) => ({
//   type: 'EDIT_TODO',
//   id,
//   name,
//   description,
//   author
// })

export const searchTodo = name => ({
  type: 'SEARCH_TODO',
  name
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = ({id,name,description,author}) => ({
  type: 'TOGGLE_TODO',
  id,
  name,
  description,
  author
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}