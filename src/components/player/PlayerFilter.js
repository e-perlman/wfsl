import React from 'react'

export const PlayerFilter = ({search,onSearchChange}) => {
  return (
    <div className="Filter">
      <input type="text" name="search" value={search} onChange={onSearchChange} placeholder="Search..." />
      {/* <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select> */}
    </div>
  )
}
