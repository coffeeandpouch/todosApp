import React from "react";

export default function TodoForm(props) {
  return (
    <div className="TodoForm">
      <form onSubmit={(e) => props.createTodo(e)}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          aria-label="Todo Title"
        />
        <input
          type="submit"
          name="submit"
          value="submit"
          aria-label="Submit New Todo"
        />
      </form>
    </div>
  );
}
