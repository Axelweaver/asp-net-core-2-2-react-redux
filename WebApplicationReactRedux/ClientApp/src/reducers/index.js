import * as Counter from './Counter';
import * as WeatherForecasts from './WeatherForecasts';


const reducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer
};

export default reducers;