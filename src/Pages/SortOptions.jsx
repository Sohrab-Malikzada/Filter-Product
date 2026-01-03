import React from 'react';

function SortOptions({ onSortChange }) {
    return (
        <div className="sort-options">
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
                <option value="">None</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="rating-asc">Rating (Low to High)</option>
                <option value="rating-desc">Rating (High to Low)</option>
            </select>
        </div>
    );
}

export default SortOptions;