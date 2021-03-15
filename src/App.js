import React from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

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
          title: "DO something else",
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

  deleteTodo = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    let todos = this.state.todos.filter((todo, i) => parseInt(index, 10) !== i);
    this.setState({ todos });
  };

  render() {
    return (
      <main className="App">
        <h1>ToDo Application</h1>
        <h2>{this.state.todos.length}</h2>
        <TodoForm />
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
      </main>
    );
  }
}
export default App;
