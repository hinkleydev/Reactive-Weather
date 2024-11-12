import React from 'react';
import WeatherCard from './WeatherCard.js';

function Location({data, location}) {
    const found = data.find((item) => item.city == location);
    return <WeatherCard city={found}/>;
}

module.exports = Location;