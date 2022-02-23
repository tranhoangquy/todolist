import { ADD_TODO, CHANGE_STATUS_TODO, EDIT_TODO, REMOVE_TODO } from "./type";

const initState = {
  todos: [],
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action?.result],
      };
    }
    case EDIT_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action?.result?.id) {
            todo = {
              ...todo,
              title: action?.result?.title,
              description: action?.result?.description,
              piority: action?.result?.piority,
              dueDate: action?.result?.dueDate,
            };
          }
          return todo;
        }),
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.result?.id),
      };
    }
    case CHANGE_STATUS_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action?.result?.id) {
            todo = {
              ...todo,
              title: action?.result?.title,
              description: action?.result?.description,
              piority: action?.result?.piority,
              dueDate: action?.result?.dueDate,
              checked: action?.result?.checked,
            };
          }
          return todo;
        }),
      };
    }
    default:
      return state;
  }
}
