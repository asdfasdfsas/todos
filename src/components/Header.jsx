import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filter, filters, onFilterChange }) {
  const { darkmode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header} onClick={toggleDarkMode}>
      <button className={styles.toggle}>
        {darkmode ? <HiMoon /> : <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.seleted
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
