import React from "react";
import styles from "./FilterBar.module.css";

function FilterBar({ all = 0, fruit = 0, veg = 0, onFilterChange }) {
  const handleFilter = (category) => {
    onFilterChange(category);
  };

  return (
    <div className={styles["filter-bar-container"]}>
      <button className={styles["filter-button"]} onClick={() => handleFilter("All")}>
        All <span className={styles["filter-count"]}>{all}</span>
      </button>
      <button className={styles["filter-button"]} onClick={() => handleFilter("Fruit")}>
        Fruits <span className={styles["filter-count"]}>{fruit}</span>
      </button>
      <button className={styles["filter-button"]} onClick={() => handleFilter("Vegetable")}>
        Vegetables <span className={styles["filter-count"]}>{veg}</span>
      </button>
    </div>
  );
}

export default FilterBar;
