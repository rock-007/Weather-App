import React, { useState, useEffect } from "react";
import City from "../Components/City";
import SearchForm from "../Components/SearchForm";
import DisplayFavouite from "../Components/DisplayFavouite";
import {
    getFavourites,
    postFavourite,
    deleteFavourite,
} from "../services/FavouriteService";


const WeatherContainer = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [favourites, setFavourites] = useState(null);
    const [displayFavourites, setDisplayFavourites] = useState(null);

    useEffect(() => {
        if (selectedCity != null) {
            getCities(selectedCity);
        }
    }, [selectedCity]);

    useEffect(() => {
        getFavourite();
    }, []);

    useEffect(() => {
        if (favourites !== null) {
            getFavouriteCities(favourites);
        }
    }, [favourites]);

    const getFavouriteCities = function (favourites) {
        let favouiteFetch = favourites[0].map((eachCity) => {
            return fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${eachCity["name"]}&appid=3031aac4ff517ddfc83b94a403d374b0`
            );
        });

        Promise.all(favouiteFetch)
            .then((res) => {
                return Promise.all(
                    res.map(function (res) {
                        return res.json();
                    })
                );
            })
            .then((result) => setDisplayFavourites(result));
    };

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
                setCities([{ daily: result[0], forecast: result[1] },
                ])
            );
    };

    const onCitySubmit = function (city) {
        setSelectedCity(city);
    };

    const onClick = function (favourite) {
        setFavourites([...favourites, favourite]);
    };

    const getFavourite = () => {
        getFavourites().then((result) => setFavourites([result]));
    };

    const addFavourite = (favouriteCity) => {
        postFavourite(favouriteCity).then(() => getFavourite());
    };

    let currentCity = {};

    return (
        <div>
            <SearchForm
                cities={cities}
                onCitySubmit={onCitySubmit}
                onClick={onClick}
                addFavourite={addFavourite}
            />
            {displayFavourites != null ? (<DisplayFavouite displayFavourites1={displayFavourites} />) : null}
            <City cities={cities} />
        </div>
    );
};

export default WeatherContainer;
