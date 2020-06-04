import React from "react";
import PropTypes from "prop-types";
import styles from "./todo.module.css";

const Todo = ({ text, complietTodo, index, isCompliet }) => {
  return (
    <div className={styles.todo} onClick={() => complietTodo(index)}>
      <span
        className={styles.todoText}
        style={{ textDecoration: isCompliet ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  complietTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompliet: PropTypes.bool.isRequired
};

export default Todo;
