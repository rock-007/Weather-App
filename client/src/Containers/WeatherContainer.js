import React, { useState, useEffect } from "react";
import City from "../Components/City";
import SearchForm from "../Components/SearchForm";

const WeatherContainer = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        if (selectedCity != null) {
            getCities(selectedCity);
        }
    }, [selectedCity]);

    const getCities = function (selectedCity) {
        const cityApi = `http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${selectedCity}&appid=3031aac4ff517ddfc83b94a403d374b0`;
        const forecastApi = `http://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`;
        Promise.all([fetch(cityApi), fetch(forecastApi)])
            .then((res) => {
                return Promise.all(
                    res.map(function (res) {
                        return res.json();
                    })
                );
            })
            .then((result) =>
                setCities([
                    ...cities,
                    { daily: result[0], forecast: result[1] },
                ])
            );
    };

    const onCitySubmit = function (city) {
        console.log(city);
        setSelectedCity(city);
    };

    return (
        <div>
            <SearchForm cities={cities} onCitySubmit={onCitySubmit} />
            {selectedCity != null ? <City cities={cities} /> : null}
        </div>
    );
};

export default WeatherContainer;
