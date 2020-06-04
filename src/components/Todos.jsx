import React from "react";
// import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React JS"
    },
    {
      text: "Belajar React JS di Wegodev"
    },
    {
      text: "Lagi belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React JS"
    },
    {
      text: "Belajar React JS di Wegodev"
    },
    {
      text: "Lagi belajar React"
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
