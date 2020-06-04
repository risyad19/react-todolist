import React, { useState } from "react";
// import "./styles.css";
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning ReactJS", isCompliet: false },
    { text: "Learning hook in React", isCompliet: false },
    { text: "Learning ReactJS with Wegodev", isCompliet: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value, isCompliet: false }];

    setTodos(addedTodo);
  };

  const complietTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompliet = !addedTodo[index].isCompliet;

    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} complietTodo={complietTodo} />
    </Paper>
  );
};

export default TodoList;
