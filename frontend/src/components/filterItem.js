import React from 'react';

const FilterItem = ({ value, label, setActiveFilter, activeValue, className = '' }) => {
  return (
    <span
      className={`${className} filterItem${value === activeValue ? ' active' : ''}`}
      onClick={() => {
        setActiveFilter(value);
      }}
    >
      {label}
    </span>
  );
};

export default FilterItem;
