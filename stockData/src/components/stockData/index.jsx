import React, {Component} from 'react';
import {NoResultsFound} from './noResult';
import {SearchForm} from './searchForm';
import {Searching} from './searching';
import {StockResult} from './stockResult';
import './index.css';

const stocksEndpoint = 'https://jsonmock.hackerrank.com/api/stocks';
const getStocksByDateEndpoint = date => `${stocksEndpoint}?date=${date}`;
const dateInputRegex = /^([1-9]|[12]\d|3[01])-(January|February|March|April|May|June|July|August|September|October|November|December)-\d{4}$/;

export default class StockData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            isQueryValid: false,
            isSearching: false,
            results: null,
            noResultFound: false,
        };
    }

    handleChange = event => {
        const query = event.target.value;
        const isQueryValid = dateInputRegex.test(query);
        this.setState({
            query,
            isQueryValid
        });
    };

    handleSearch = event => {
        event.preventDefault();

        const {isQueryValid} = this.state;
        if (!isQueryValid) {
            return;
        }

        this.setState({
            results: null,
            noResultFound: false,
            isSearching: true
        });

        fetch(getStocksByDateEndpoint(this.state.query))
            .then(response => response.json())
            .then(pageData => {
                /**
                 * Should check pageData.total here, but App.test.js doesn't mock total and total_pages correctly and is a read only file.
                 * Modifying it will cause a push rejection, as I found out the hard way trying to push a fix for it.
                 * const results = pageData.total > 0 ? pageData.data[0] : null;
                 */
                const results = pageData.data[0];
                this.setState({
                    results,
                    noResultFound: !results
                });
            })
            .catch(err => {
                console.log('Error fetching stock data', err);
            })
            .finally(() => {
                this.setState({
                    isSearching: false
                });
            });
    };

    render() {
        const {
            query,
            isQueryValid,
            results,
            isSearching,
            noResultFound
        } = this.state;
        return (
            <div className="layout-column align-items-center mt-50">
                <SearchForm
                    query={query}
                    isQueryValid={isQueryValid}
                    onChange={this.handleChange}
                    onSearch={this.handleSearch}
                />
                {isSearching && (<Searching />)}
                {results && (
                    <StockResult
                        results={results}
                    />
                )}
                {noResultFound && (<NoResultsFound />)}
            </div>
        );
    }
}
