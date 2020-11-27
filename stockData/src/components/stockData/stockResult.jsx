import React from 'react';

export const StockResult = ({results}) => {
    const {open, close, high, low} = results;
    return (
        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
            <li className="py-10">Open: {open}</li>
            <li className="py-10">Close: {close}</li>
            <li className="py-10">High: {high}</li>
            <li className="py-10">Low: {low}</li>
        </ul>
    );
};
