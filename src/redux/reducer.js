import { combineReducers, createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import { ADD_TODO } from "./type";

const initState = {
  todos: [
    // {
    //   id: 0,
    //   Title: "Learn React",
    //   description: "abcbdbnadavsd",
    //   dueDate: "2022-02-24",
    //   piority: "low",
    //   checked: true,
    // },
    // {
    //   id: 1,
    //   Title: "Learn React1",
    //   description: "abcbdbnadavsd",
    //   dueDate: "2022-02-24",
    //   piority: "heigh",
    //   checked: true,
    // },
    // {
    //   id: 2,
    //   Title: "Learn React2",
    //   description: "abcbdbnadavsd",
    //   dueDate: "2022-02-24",
    //   piority: "low",
    //   checked: false,
    // },
  ],
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO: {
      console.log(action?.result);
      return {
        ...state,
        todos: [...state, action?.result],
      };
    }

    default:
      return state;
  }
}
