import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ children, title }) => (
  <>
    <h2 className={styles.theme}>{title}</h2>
    <div className={styles.div}>{children}</div>
  </>
);

Section.protoTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
