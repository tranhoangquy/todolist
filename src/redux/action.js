import { ADD_TODO, CHANGE_STATUS_TODO, EDIT_TODO, REMOVE_TODO } from "./type";

export const addTodo = (data) => ({
  type: ADD_TODO,
  result: data,
});

export const editTodo = (data) => ({
  type: EDIT_TODO,
  result: data,
});

export const removeTodo = (data) => ({
  type: REMOVE_TODO,
  result: data,
});

export const changeStatusTodo = (data) => ({
  type: CHANGE_STATUS_TODO,
  result: data,
});
