import "./styles.css";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      task: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let todoList = this.state.todoList;
    let id =
      todoList.length === 0
        ? 1
        : Math.max(...todoList.map((item) => item.id)) + 1;
    let value = this.state.task;
    let a = { id: id, value: value };

    todoList.push(a);
    this.setState({ ...this.state.todoList, todoList: todoList });
    event.target.reset();
  };
  remove(id) {
    let todoList = this.state.todoList;
    todoList = todoList.filter((item) => item.id !== id);
    this.setState({ todoList: todoList });
  }

  render() {
    const { todoList } = this.state;
    console.log("todo list: " + JSON.stringify(todoList));
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h2>Start adding your list: </h2>
          <input name="task" onChange={this.handleChange} />
          <button type="submit" style={{ marginLeft: "10px" }}>
            Add
          </button>
        </form>

        <div>
          {todoList.map((data, index) => {
            return (
              <li
                style={{ listStyleType: "none", margin: "10px" }}
                key={data.id}
              >
                Task {index + 1}: {data.value}
                <button onClick={() => this.remove(data.id)}>remove</button>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
