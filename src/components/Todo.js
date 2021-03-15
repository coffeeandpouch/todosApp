import React from "react";

export default function ToDo(props) {
  return (
    <div
      className={props.todo.completed ? "Todo complete" : "Todo incomplete"}
      onClick={(e) => props.toggleComplete(props.index)}
    >
      <p>{props.todo.title}</p>
    </div>
  );
}
