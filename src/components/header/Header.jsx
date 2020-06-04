/** @jsx jsx */
import { jsx } from "@emotion/core";
// import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";
// import styles from "./header.module.css";
import * as styles from "./header.style";
import Button from "../button/Button";
import { useTheme } from "emotion-theming";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section css={styles.header}>
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 css={styles.headerTitle(theme)}>ToDo List</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
