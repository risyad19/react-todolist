/** @jsx jsx */
import { jsx } from "@emotion/core";
// import React from "react";
import PropTypes from "prop-types";
// import styles from "./todo.module.css";
import { useTheme } from "emotion-theming";
import * as styles from "./todo.style";

const Todo = ({ text, complietTodo, index, isCompliet }) => {
  const theme = useTheme();

  return (
    <div css={styles.todo({ theme })} onClick={() => complietTodo(index)}>
      <span css={styles.todoText({ theme, isCompliet })}>{text}</span>
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
