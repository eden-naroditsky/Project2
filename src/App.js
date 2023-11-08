
import './App.css';

// App.js
import React from 'react';
import SearchComponent from './SearchComponent';

function App() {
  return (
      <div className="search-container">
        <form id="search-form">
          <h1>Search</h1>
          <label htmlFor="search-input"></label>
          <input type="text" id="search-input" placeholder="Search..." />
          <button type="submit" id="search-button">Search</button>
        </form>

        <div className="search-result" id="search-results">
          {/* Your search results here */}
        </div>

        <div className="buttons">
          <button type="button" className="button" id="prev">
            Previous
          </button>
          <button type="button" className="button" id="next">
            Next
          </button>
        </div>
      </div>
  );
}

export default App;
