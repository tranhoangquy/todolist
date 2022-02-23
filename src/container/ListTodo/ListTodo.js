import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import ListTodoWrapper from "./ListTodo.style";
import FormUpdate from "../../components/Form";

const ListTodo = () => {
  const requesting = useSelector((state) => state);
  const [update, setUpdate] = useState(null);

  console.log(requesting);
  const UpdateItem = (item) => {
    setUpdate(item?.id);
  };

  const handleSubmit = useCallback((values, actions) => {
    console.log(values);
  }, []);
  return (
    <ListTodoWrapper>
      <div className="App">
        <div className="container">
          <h1 className="header" style={{ textAlign: "center" }}>
            To Do List
          </h1>
          <div className="search">
            <input className="input-search" placeholder="Search..." />
          </div>
          <div className="container-body">
            {requesting.todos.map((todo, index) => (
              <div className="item-wrap" key={index}>
                <div className="item">
                  <div className="checked">
                    <input type="checkbox" checked={todo?.checked} />
                  </div>
                  <p className="item-title">{todo?.Title} </p>
                  <div className="item-btn-function">
                    <button
                      className="btn-detail"
                      onClick={() => UpdateItem(todo)}
                    >
                      Detail
                    </button>
                    <button className="btn-remove"> Remove</button>
                  </div>
                </div>
                {todo?.id === update && (
                  <Formik
                    initialValues={{
                      title: todo?.Title,
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
              <button className="btn-rmv">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </ListTodoWrapper>
  );
};

export default ListTodo;
