const showEdit = (state = {}, action) => {
debugger
  switch (action.type) {  
    case 'TOGGLE_TODO':
      return action
    case 'FETCH_ALL':
      return {}
    default:
      return state
  }
}

export default showEdit