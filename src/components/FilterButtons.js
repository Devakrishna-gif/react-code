import React from 'react';

const FilterButtons = (props) => {
  const{filters, onRatingClick} = props;
  const updatedFilter = filters.map(filter => filter);

  return (
    <div className="res-filters-container">
      <button className="res-filter res-filter-rating" onClick={onRatingClick}>
        {updatedFilter[3]?.facetInfo[1]?.label}
      </button>
      <button className="res-filter res-filter-fastDelivery">{updatedFilter[0]?.facetInfo[0]?.label}</button>
      <button className="res-filter res-filter-newOnSwiggy">{updatedFilter[2]?.facetInfo[0]?.label}</button>
      <button className="res-filter res-filter-pureVeg">{updatedFilter[4]?.facetInfo[0]?.label}</button>
      <button className="res-filter res-filter-offers">{updatedFilter[5]?.facetInfo[0]?.label}</button>
      <button className="res-filter res-filter-amountRange">{updatedFilter[6]?.facetInfo[0]?.label}</button>
      <button className="res-filter res-filter-lessAmount">{updatedFilter[6]?.facetInfo[2]?.label}</button>
    </div>
  );
};

export default FilterButtons;
