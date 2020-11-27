import React from 'react';
import cn from 'classnames';

const exampleDateInput = '5-January-2000';

export const SearchForm = props => {
    const {query, isQueryValid, onChange, onSearch} = props;
    const disableSearchButton = !isQueryValid;
    const provideInvalidFeedback = query && !isQueryValid;
    const inputClassNames = cn('large', 'searchInput', {
        'searchInputInvalid': provideInvalidFeedback
    });
    const inputTitle = provideInvalidFeedback ? 'Requires pattern like d-mmmm-yyyy' : '';
    return (
        <form
            onSubmit={onSearch}
            noValidate={true}
            className="layout-row align-items-center justify-content-center searchForm"
        >
            <input
                id="app-input"
                data-testid="app-input"
                type="text"
                placeholder={exampleDateInput}
                className={inputClassNames}
                value={query}
                onChange={onChange}
                title={inputTitle}
            />
            <button
                id="submit-button"
                data-testid="submit-button"
                type="submit"
                className="searchButton"
                onClick={onSearch}
                disabled={disableSearchButton}
            >
                Search
            </button>
        </form>
    );
};
