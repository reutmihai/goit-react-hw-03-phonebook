import React from 'react'

export const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <input
        type="text"
        name="filter"
        placeholder="Type a name"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
}
