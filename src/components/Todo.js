import React from "react";

export default function Todo(props) {
  return (
    <div className={props.todo.completed ? "Todo complete" : "Todo incomplete"}>
      <p>{props.todo.title}</p>
    </div>
  );
}
