import React, { useState } from "react";
// import "./styles.css";
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning ReactJS" },
    { text: "Learning hook in React" },
    { text: "Learning ReactJS with Wegodev" }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  // console.log("showAdd", showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} />
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
