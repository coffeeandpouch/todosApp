import React from "react";

export default function TodoForm() {
  return (
    <div className="TodoForm">
      <form>
        <input type="text" name="title" aria-label="Todo Title" />
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
