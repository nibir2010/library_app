const showEdit = (state = {}, action) => {
debugger
  switch (action.type) {  
    case 'TOGGLE_TODO':
      return action
    case 'EDIT_TODO':
      return {}
    default:
      return state
  }
}

export default showEdit