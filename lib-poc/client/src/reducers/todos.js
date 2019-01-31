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
    case 'ADD_TODO':
      let newState = [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          author: action.author,
          completed: false
        }
      ];
      AllBooks = [...AllBooks,...[{
                                    id: action.id,
                                    name: action.name,
                                    description: action.description,
                                    author: action.author,
                                    completed: false
                                  }]];
      return newState;
    case 'EDIT_TODO': 
    debugger
      let edited_List = state.map(book=>{
        if(book.id === action.id){
          return {...book,...{
                                name: action.name,
                                description: action.description,
                                author: action.author,
                                completed: false
                              }}
        }
        else{
          return book;
        }
      });
      AllBooks = [...edited_List]
      return edited_List
    case 'SEARCH_TODO':
      let searchedBooks = AllBooks.filter(todo=> todo.name.toLowerCase().includes(action.name.toLowerCase()));
      return searchedBooks;
    case 'FETCH_ALL':
      let _state = [...state,...action.data];
      AllBooks = [...state,...action.data];
      return _state
    default:
      return state
  }
}

export default todos