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
    if (todos.length < 8) {
      const addedTodo = [...todos, { text: value, isCompliet: false }];

      setTodos(addedTodo);
    } else {
      alert("Only 10 Todo is Allowed");
    }
  };

  const complietTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompliet = !addedTodo[index].isCompliet;

    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]);

  const showAddToggle = () => setShowAdd(!showAdd);

  // console.log("todos", todos);

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} complietTodo={complietTodo} />
    </Paper>
  );
};

export default TodoList;
