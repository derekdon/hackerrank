# StocksData

_Had to use JavaScript and react@16.3.0 as package.json is read only. Using TypeScript and hooks like useState, useMemo and useEffect (with AbortController) would have improved
 this._

## Example

![Stock Data Walkthrough](https://raw.githubusercontent.com/derekdon/hackerrank/main/stockData/stockDataPreview.gif)

## API to hit

*JSON API URL :*
`https://jsonmock.hackerrank.com/api/stocks?date=<date>`

## Expected Outputs when result found

- `Open: {open}`
- `Close: {close}`
- `High: {high}`
- `Low: {low}`

## Expected Output when NO results found

In case of no results render below div
`<div data-testid="no-result">No Results Found</div>`
