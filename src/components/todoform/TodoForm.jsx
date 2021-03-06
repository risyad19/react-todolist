/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";

// import styles from "./todoform.module.css";
import * as styles from "./todoform.style";
import { useTheme } from "emotion-theming";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");

  const theme = useTheme();

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("No Blank Todo");
      return;
    }

    if (value.length > 40) {
      alert("Please sorter a todo text");
      setValue("");
      return;
    }

    addTodo(value);
    // alert(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            css={styles.addInput({ theme })}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button css={styles.addBtn({ theme })}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
