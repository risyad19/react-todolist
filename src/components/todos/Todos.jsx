import React from "react";
import PropTypes from "prop-types";
import Todo from "../todo/Todo";
import styles from "./todos.module.css";

const Todos = ({ todos, complietTodo }) => {
  return (
    <section className={styles.todos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompliet={todo.isCompliet}
              complietTodo={complietTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div className={styles.todoPlaceholderText}>
          <span className={styles.addButtonPlaceholderText}>Add button</span> on
          the top for add todo
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  complietTodo: PropTypes.func.isRequired
};

export default Todos;
