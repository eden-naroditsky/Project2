// Buttons.js
import React from 'react';

const Buttons = ({ handlePrevClick, handleNextClick, totalPages, currPage }) => {
    return (
        <div className="buttons">
            <button type="button" className="button" id="prev" onClick={handlePrevClick}>
                Previous
            </button>
            <button type="button" className="button" id="next" onClick={handleNextClick}>
                Next
            </button>
        </div>
    );
};

export default Buttons;

