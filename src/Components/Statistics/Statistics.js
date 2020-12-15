import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.list}>
    <li className={styles.item}>Good: {good}</li>
    <li className={styles.item}>Neutural: {neutral}</li>
    <li className={styles.item}>Bad: {bad}</li>
    <li className={styles.item}>Total: {total}</li>
    <li className={styles.item}>Positive feedback: {positivePercentage}%</li>
  </ul>
);
Statistics.protoTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
