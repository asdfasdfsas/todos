import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todos.module.css";

export default function Todos({ todo, updated, deleted }) {
  const { text, status, id } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    updated({ ...todo, status });
  };

  const handleDelete = () => deleted(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.chekcbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
