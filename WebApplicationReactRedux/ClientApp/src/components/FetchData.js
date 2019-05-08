import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../reducers/WeatherForecasts';

class FetchData extends Component {
    componentDidMount() {

        // This method is called when the component is first added to the document
        this.setSearchParams();
        this.ensureDataFetched();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        this.setSearchParams();
        this.ensureDataFetched();
        
    }

    setSearchParams() {
        var searchParams = new URLSearchParams(this.props.location.search);
        var page = searchParams.get("page");
        var category = searchParams.get("category");
        this.props.setSearchParamsWeatherForecasts(page, category);
    }

    ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    }

    render() {
        var searchParams = new URLSearchParams(this.props.location.search);

        return (
            <div>
                <p>Match: {JSON.stringify(this.props.match)}</p>
                <p>Location {JSON.stringify(this.props.location)}</p>
                <p>startDateIndex: {this.props.match.params.startDateIndex}</p>
                <p>Page: {this.props.page}</p>
                <p>Category: {this.props.category}</p>
                <p>Sorted: {searchParams.get("sorted")}</p>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {renderForecastsTable(this.props)}
                {renderPagination(this.props)}
            </div>
        );
    }
}

function renderForecastsTable(props) {
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {props.forecasts.map(forecast =>
                    <tr key={forecast.dateFormatted}>
                        <td>{forecast.dateFormatted}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

function renderPagination(props) {
    const prevStartDateIndex = (props.startDateIndex || 0) - 5;
    const nextStartDateIndex = (props.startDateIndex || 0) + 5;

    return <p className='clearfix text-center'>
        <Link className='btn btn-default pull-left' to={`/fetch-data/${prevStartDateIndex}`}>Previous</Link>
        <Link className='btn btn-default pull-right' to={`/fetch-data/${nextStartDateIndex}`}>Next</Link>
        <Link className='btn btn-warning pull-right' to="/fetch-data/?category=1&page=1">Test1</Link>
        <Link className='btn btn-warning pull-right' to="/fetch-data/?category=2&page=2">Test2</Link>
        {props.isLoading ? <span>Loading...</span> : []}
    </p>;
}

export default connect(
    state => state.weatherForecasts,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);
