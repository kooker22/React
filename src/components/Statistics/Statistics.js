import React from "react";
import propTypes from "prop-types";
import styles from "./Statistics.module.css";
import randomColor from "randomcolor";
const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>

    <ul className={styles.stat_list}>
      {stats.map((item) => (
        <li
          style={{ backgroundColor: randomColor() }}
          key={item.id}
          className={styles.item}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.defaultProps = {
  title: "Upload stats",
};

Statistics.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
export default Statistics;
