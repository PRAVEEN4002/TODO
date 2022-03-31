import React from "react";

function InputTodo({ Add, submitTodo, value }) {
  return (
    <div>
      <input
        onChange={(e) => {
          Add(e.target.value);
        }}
        value={value}
      ></input>
      <button
        onClick={(e) => {
          submitTodo(e.target.value);
        }}
      >
        add
      </button>
    </div>
  );
}

export default InputTodo;
