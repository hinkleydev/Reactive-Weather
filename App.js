import React, {useState} from 'react';
// Import data and WeatherCard here
import Weathercard from './components/WeatherCard.js';
import Location from './components/Location.js';
import cities from './data.js';

function App() {
    const [location, setLocation] = useState("Madrid");
    //{cities.map(each => <Weathercard city={each} />)}
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                <Location data={cities} location={location} />
            </div>
            
        </>
    )
}

export default App;