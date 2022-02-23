import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import ListTodoWrapper from "./ListTodo.style";
import FormUpdate from "../../components/Form";
import {
  changeStatusTodo,
  editTodo,
  removeAllTodo,
  removeTodo,
} from "../../redux/action";
import toast, { Toaster } from "react-hot-toast";

const ListTodo = () => {
  const {
    items: { todos },
  } = useSelector((state) => state);
  const [update, setUpdate] = useState(null);
  const [arrFilter, setArrFilter] = useState(null);

  const dispatch = useDispatch();
  const UpdateItem = (item) => {
    setUpdate(item?.id);
  };
  const handleSubmit = useCallback(
    (values, actions) => {
      dispatch(editTodo(values));
      toast.success("Update Task Success");
    },
    [dispatch]
  );
  const RemoveItem = useCallback(
    (item) => {
      dispatch(removeTodo(item));
    },
    [dispatch]
  );
  const ChangeStatusItem = useCallback(
    (item) => {
      dispatch(changeStatusTodo({ ...item, checked: !item?.checked }));
    },
    [dispatch]
  );

  const SearchTask = useCallback(
    (event) => {
      setArrFilter(
        todos.filter((todo) =>
          todo?.title.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    },
    [todos]
  );

  const RemoveAll = useCallback(() => {
    const arrRemove = todos.filter((todo) => todo.checked === true);
    dispatch(removeAllTodo(arrRemove));
  }, [dispatch, todos]);

  useEffect(() => {
    setArrFilter(todos);
  }, [todos]);

  return (
    <ListTodoWrapper>
      <div className="App">
        <div className="container">
          <h1 className="header" style={{ textAlign: "center" }}>
            To Do List
          </h1>
          <div className="search">
            <input
              className="input-search"
              placeholder="Search..."
              onChange={SearchTask}
            />
          </div>
          {arrFilter?.length === 0 ? (
            <h1 style={{ textAlign: "center" }}>No Task</h1>
          ) : (
            <>
              <div className="container-body">
                {arrFilter?.map((todo, index) => (
                  <div className="item-wrap" key={index}>
                    <div className="item">
                      <div className="checked">
                        <input
                          type="checkbox"
                          checked={todo?.checked}
                          onChange={() => ChangeStatusItem(todo)}
                        />
                      </div>
                      <p className={`item-title ${todo?.checked && "checked"}`}>
                        {todo?.title}{" "}
                      </p>
                      <div className="item-btn-function">
                        <button
                          className="btn-detail"
                          onClick={() => UpdateItem(todo)}
                        >
                          Detail
                        </button>
                        <button
                          className="btn-remove"
                          onClick={() => RemoveItem(todo)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    {todo?.id === update && (
                      <Formik
                        initialValues={{
                          title: todo?.title,
                          description: todo?.description,
                          piority: todo?.piority,
                          dueDate: todo?.dueDate,
                          id: todo?.id,
                        }}
                        onSubmit={handleSubmit}
                      >
                        {(props) => <FormUpdate todo={todo} {...props} />}
                      </Formik>
                    )}
                  </div>
                ))}
              </div>
              <div className="bulk-action">
                <div className="bulk-action-title">Bulk Action</div>
                <div>
                  <button className="btn-done">Done</button>
                  <button className="btn-rmv" onClick={RemoveAll}>
                    Remove
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Toaster />
    </ListTodoWrapper>
  );
};

export default ListTodo;
