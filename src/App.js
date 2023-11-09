import { NavBar } from './components/NavBar';
import { SearchForm } from './components/SearchForm';
import SearchResults from './components/SearchResults';
import { Buttons } from './components/Buttons';

import './App.css';

// App.js
import React from 'react';



const App = () => {
    return (
        <div>
            <NavBar />
            <SearchForm />
            <SearchResults />
            <Buttons />
        </div>
    );
};

export default App;
