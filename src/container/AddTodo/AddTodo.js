import React, { useCallback } from "react";
import AddTodoWrapper from "./Addtodo.style";
import { Formik } from "formik";
import FormUpdate from "../../components/Form";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/action";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

const AddTodo = () => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    (values, { resetForm }) => {
      dispatch(addTodo({ ...values, id: uuidv4() }));
      resetForm();
      toast.success("Add Task Success");
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
      <Toaster />
    </AddTodoWrapper>
  );
};

export default AddTodo;
