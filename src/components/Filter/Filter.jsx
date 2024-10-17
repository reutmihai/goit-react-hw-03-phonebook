import React from 'react';

const Filter = ({ filter, onChange }) => (
  <div>
    <input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={onChange}
    />
  </div>
);

export default Filter;
