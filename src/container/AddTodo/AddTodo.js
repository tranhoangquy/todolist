import React, { useCallback } from "react";
import AddTodoWrapper from "./Addtodo.style";
import { Formik } from "formik";
import FormUpdate from "../../components/Form";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/action";

const AddTodo = () => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    (values, actions) => {
      dispatch(addTodo(values));
    },
    [dispatch]
  );

  return (
    <AddTodoWrapper>
      <div className="App">
        <div className="container">
          <h1 className="header" style={{ textAlign: "center" }}>
            New Task
          </h1>
          <div>
            <Formik
              initialValues={{
                title: "",
                description: "",
                piority: "",
                dueDate: "",
                checked: false,
              }}
              onSubmit={handleSubmit}
            >
              {(props) => <FormUpdate {...props} />}
            </Formik>
          </div>
        </div>
      </div>
    </AddTodoWrapper>
  );
};

export default AddTodo;
