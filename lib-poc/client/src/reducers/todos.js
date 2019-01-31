import axios from 'axios';
// const _state = [{
//           id: 1,
//           name: "Harry Potter",
//           description: "Harry Potter",
//           author: "JK",
//           completed: false
//         },{
//           id: 2,
//           name: "Bandit Queen",
//           description: "Bandit Queen",
//           author: "JK",
//           completed: false
//         },{
//           id: 3,
//           name: "Sherlock Homes",
//           description: "Sherlock Homes",
//           author: "JK",
//           completed: false
//         }];
let _state = []

let AllBooks = [];


const todos = (state = [], action) => {
  debugger
  switch (action.type) {
    case 'SEARCH_TODO':
    debugger
      let searchedBooks = AllBooks.filter(todo=> todo.name.toLowerCase().includes(action.name.toLowerCase()));
      return searchedBooks;
    case 'FETCH_ALL':
      let _state = [...action.data];
      AllBooks = [...action.data];
      return _state
    default:
      return state
  }
}

export default todos