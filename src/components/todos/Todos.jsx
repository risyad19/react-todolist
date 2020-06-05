/** @jsx jsx */
import { jsx } from "@emotion/core";
// import React from "react";
import PropTypes from "prop-types";
import Todo from "../todo/Todo";
import { useTheme } from "emotion-theming";
// import styles from "./todos.module.css";
import * as styles from "./todos.style";

const Todos = ({ todos, complietTodo }) => {
  const theme = useTheme();
  return (
    <section css={styles.todos}>
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
        <div css={styles.todoPlaceholderText}>
          <span css={styles.addButtonPlaceholderText}>Add button</span> on the
          top for add todo
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
