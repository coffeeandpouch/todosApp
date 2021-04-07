import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          title: "Do something",
          completed: false,
        },
        {
          title: "Do something else",
          completed: true,
        },
      ],
    };
  }

  toggleComplete = (index) => {
    let todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo Application</h1>
        <h2>{this.state.todos.length}</h2>
        <section className="todos">
          {this.state.todos.map((todo) => (
            <Todo todo={todo} toggleComplete={this.toggleComplete} />
          ))}
        </section>
      </div>
    );
  }
}
