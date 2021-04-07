import React from "react";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";

import "./App.css";

export default class App extends React.Component {
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

  createTodo = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { title: e.target.title.value, completed: false },
      ],
    });
  };

  toggleComplete = (index) => {
    let todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  };

  deleteTodo = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    let todos = this.state.todos.filter((todo, i) => parseInt(index, 10) !== i);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <h2>{this.state.todos.length}</h2>
        <TodoForm createTodo={this.createTodo} />
        <section className="todos">
          {this.state.todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              toggleComplete={this.toggleComplete}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </section>
      </div>
    );
  }
}
