import React from "react";

import styles from "./index.module.css";

function Button({ buttonClass, children, onClick }) {
  return (
    <button
      className={`${buttonClass ? buttonClass : ""} ${styles.button}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
