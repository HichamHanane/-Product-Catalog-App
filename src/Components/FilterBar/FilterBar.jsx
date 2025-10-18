import { useState } from 'react';
import './FilterBar.css'


const CATEGORIES = ['Electronics', 'jewelery', "women's clothing", "men's clothing"];
const SORT_OPTIONS = [
    { value: '', label: 'Sort by Price' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' }
];
const FilterBar = ({ setCategoryQuery, categoryQuery, sortOrder, setSortOrder }) => {

    return (
        <div className="filterBar">
            <div className="filterContainer">
                <div className="filterLeft">
                    <div className="filterGroup">
                        <select
                            id="category-select"
                            className="filterSelect"
                            value={categoryQuery}
                            onChange={(e) => setCategoryQuery(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            {CATEGORIES.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <svg className="selectArrow" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="filterGroup">
                        <select
                            id="sort-select"
                            className="filterSelect"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            {SORT_OPTIONS.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <svg className="selectArrow" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>


                </div>


            </div>

        </div>
    );
};

export default FilterBar;