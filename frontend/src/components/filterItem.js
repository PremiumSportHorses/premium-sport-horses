import React from 'react';

const FilterItem = ({ value, label, setActivePriceFilter, activeValue, className = '' }) => {
  return (
    <span
      className={`${className} filterItem${value === activeValue ? ' active' : ''}`}
      onClick={() => {
        setActivePriceFilter(value);
      }}
    >
      {label}
    </span>
  );
};

export default FilterItem;
