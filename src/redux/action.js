import { ADD_TODO } from "./type";

export const addTodo = (data) => ({
  type: ADD_TODO,
  result: data,
});
