import "./styles.css";
import axios from "axios";
import { Form, withFormik } from "formik";
import Select from "react-select";
import React, { useEffect, useState } from "react";

function App({ setFieldValue }) {
  let [shoppingList, setShoppingList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/api/foodTypes").then((foodTypes) => {
      console.log("check: " + JSON.stringify(foodTypes.data));
      setShoppingList(foodTypes.data);
    });
  }, []);
  const handleChange = (value) => {
    setFieldValue("shopping", value);
  };
  return (
    <div>
      <Form>
        <Select
          name="shopping"
          onChange={handleChange}
          options={shoppingList.map((option) => ({
            value: option,
            label: option.food_type
          }))}
          isMulti={true}
        />
        <button style={{ marginTop: "10px" }} type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}

const toDoForm = withFormik({
  mapPropsToValues({ shopping }) {
    return {
      shopping: []
    };
  },
  handleSubmit(values) {
    values.shopping.map((value) => alert(JSON.stringify(value.value)));
  }
})(App);

export default toDoForm;
