/** @jsx jsx */
import { jsx } from "@emotion/core";
// import React from "react";
import PropTypes from "prop-types";
// import styles from "./paper.module.css";
import * as styles from "./paper.style";
import { useTheme } from "emotion-theming";

const Paper = ({ children }) => {
  const theme = useTheme();
  return (
    <div css={styles.paper({ theme })}>
      <div css={styles.frame({ theme })}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
