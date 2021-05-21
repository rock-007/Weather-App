import React, { useState, useEffect } from "react";
import City from "../components/City";
import SearchForm from "../components/SearchForm";

const WeatherContainer = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        if (selectedCity != null) {
            getCities(selectedCity);
        }
    }, [selectedCity]);

    const getCities = function (selectedCity) {
        const cityApi = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`;
        const forcastApi = `http://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`;
        Promise.all([fetch(cityApi), fetch(forcastApi)])
            .then((res) => {
                return Promise.all(
                    res.map(function (res) {
                        return res.json();
                    })
                );
            })
            .then((result) =>
                setCities([...cities, { daily: result[0], forcast: result[1] }])
            );
    };

    const onCitySubmit = function (city) {
        setSelectedCity(city);
    };

    return (
        <div>
            <p>Hello world</p>
            <SearchForm cities={cities} onCitySubmit={onCitySubmit} />
            {selectedCity != null ? <City cities={cities} /> : null}
        </div>
    );
};

export default WeatherContainer;
