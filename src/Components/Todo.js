import React from "react";
import { useState } from "react";
import InputTodo from "./InputTodo";
function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todoObject, setTodObject] = useState("Browser");
  const addTodoList = (fn) => {
    setTodObject(fn);
  };
  const submiTodo = () => {
    setTodoList([...todoList, todoObject]);
    console.log(todoList);
  };
  const removeTodoList = (e) => {
    const name = e.target.value;

    const values = [...todoList];
    const index = values.indexOf(name);
    values.splice(index, 1);
    setTodoList(values);
  };
  const updateTodoList = (e) => {
    setTodObject(e.target.value);
  };

  return (
    <div>
      <InputTodo
        Add={addTodoList}
        submitTodo={submiTodo}
        value={todoObject}
      ></InputTodo>
      <h1>list of Todo's</h1>
      {todoList.map((item) => {
        return (
          <div>
            <h4>{item}</h4>
            <button
              onClick={(e) => {
                removeTodoList(e);
              }}
            >
              remove
            </button>
            <button
              value={item}
              onClick={(e) => {
                updateTodoList(e);
              }}
            >
              updated
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
