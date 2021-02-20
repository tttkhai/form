import "./styles.css";
import React, { Component } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleSubmit = (values) => {
    const items = this.state.items;
    let id =
      items.length === 0 ? 1 : Math.max(...items.map(({ id }) => id)) + 1;
    items.push({ id: id, value: values.item });
    this.setState({ ...items, items: items });
  };

  remove = (_id) => {
    const items = this.state.items.filter(({ id }) => id !== _id);
    this.setState({ items: items });
  };

  render() {
    return (
      <div className="App">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit(this.props.values);
          }}
        >
          <h1>Hello CodeSandbox</h1>
          <Field type="text" name="item" />
          <button type="submit">Submit</button>
          <div style={{ color: "red" }}>{this.props.errors.item}</div>
        </Form>
        {this.state.items.map(({ id, value }) => {
          return (
            <li key={id}>
              Id {id}: {value}{" "}
              <button onClick={() => this.remove(id)}>remove</button>
            </li>
          );
        })}
      </div>
    );
  }
}
const myForm = withFormik({
  mapPropsToValues({ item }) {
    return {
      item: ""
    };
  },
  validationSchema: Yup.object().shape({
    item: Yup.string().required("Required")
  })
})(App);

export default myForm;
