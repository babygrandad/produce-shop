import React, { useState } from 'react'
import styles from './SearchBar.module.css'

function SearchBar({all = 0, fruit = 0, veg = 0, onFilterChange, onSearch}) {
  const [searchInput, setSearchInput] = useState(null)

  const handleClear = (e) => {
    e.preventDefault();
    setSearchInput('');
    onSearch('');
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    onSearch(event.target.value);
  };

  const handleFilter = (category) => {
    onFilterChange(category);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission on Enter key
    }
  };

  return (
	<div className={styles['searchbar-container']}>
    
  </div>
  )
}

export default SearchBar