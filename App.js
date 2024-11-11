import React from 'react';
// Import data and WeatherCard here
import Weathercard from './components/WeatherCard.js';
import cities from './data.js';

function App() {
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {cities.map(each => <Weathercard city={each} />)}
            </div>
            
        </>
    )
}

export default App;