import React from 'react';
import StockData from './components/stockData';
import logo from './logo.svg';

export const App = ({title}) => (
    <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
            <div className="layout-row align-items-center">
                <img alt="" src={logo} className="logo"/>
                <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
            </div>
        </nav>
        <StockData />
    </div>
);
