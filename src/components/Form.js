import React from "react";
import { Field, Form } from "formik";
import "../container/ListTodo/ListTodo.style";

const FormUpdate = ({ handleSubmit }) => {
  return (
    <div className="form-update">
      <Form onSubmit={handleSubmit}>
        <Field
          type="text"
          name="title"
          className="update-field-title"
          placeholder="Add new task..."
        />
        <div className="update-description">
          <div className="txt-label" style={{ paddingBottom: "6px" }}>
            Description
          </div>
          <Field
            as="textarea"
            type="text"
            name="description"
            className="field-description"
            placeholder="Description..."
          />
        </div>
        <div className="update-more">
          <div className="update-more-date">
            <div className="txt-label">Due Date</div>
            <Field type="date" name="dueDate" className="due-date" />
          </div>
          <div className="update-more-piority">
            <div className="txt-label">Piority</div>
            <Field as="select" name="piority" className="piority">
              <option value="low">low</option>
              <option value="normal">normal</option>
              <option value="heigh">heigh</option>
            </Field>
          </div>
        </div>
        <div className="btn-update">
          <button type="submit">Update</button>
        </div>
      </Form>
    </div>
  );
};

export default FormUpdate;
