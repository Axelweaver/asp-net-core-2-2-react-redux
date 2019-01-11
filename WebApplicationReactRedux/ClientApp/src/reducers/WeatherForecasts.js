import actionTypes from '../actions/actionTypes';

const initialState = { forecasts: [], isLoading: false };

export const actionCreators = {
  requestWeatherForecasts: startDateIndex => async (dispatch, getState) => {
    if (startDateIndex === getState().weatherForecasts.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: actionTypes.REQUEST_WEATHER_FORECASTS, startDateIndex });

    const url = `api/SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`;
    const response = await fetch(url);
    const forecasts = await response.json();

    dispatch({ type: actionTypes.RECEIVE_WEATHER_FORECASTS, startDateIndex, forecasts });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === actionTypes.REQUEST_WEATHER_FORECASTS) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      isLoading: true
    };
  }

  if (action.type === actionTypes.RECEIVE_WEATHER_FORECASTS) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      forecasts: action.forecasts,
      isLoading: false
    };
  }

  return state;
};
