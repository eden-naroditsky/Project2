
import React from 'react';

const SearchForm = ({ searchFlickr, displayPhotos, ButtonsControl }) => {
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const searchTerm = e.target.elements.searchInput.value.trim();
        if (searchTerm) {
            const data = await searchFlickr(searchTerm);
            displayPhotos(data);
        }
    };

    return (
        <div className="search-container">
            <form id="search-form" onSubmit={handleFormSubmit}>
                <h1>Search</h1>
                <label htmlFor="search-input"></label>
                <input type="text" id="search-input" name="searchInput" placeholder="Search..." />
                <button type="submit" id="search-button">Search</button>
            </form>
        </div>
    );
};


export default SearchForm;
