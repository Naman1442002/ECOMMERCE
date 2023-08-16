import React from "react";

const Filter = ({ categories, onSelectCategory }) => {
  return (
    <>
      <h2>Filter by Category</h2>
      <select className="form-select" onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category} >
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default Filter;
