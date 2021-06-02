import React, { useState, useEffect } from "react";
import City from "../Components/City";
import SearchForm from "../Components/SearchForm";
import DisplayFavourite from "../Components/DisplayFavourite";
import UkMap from "./UkMap";
import MapStyles from "../Components/MapStyles";

import {
    getFavourites,
    postFavourite,
    deleteFavourite,
} from "../services/FavouriteService";
import { GoogleMap } from "@react-google-maps/api";

const WeatherContainer = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [favourites, setFavourites] = useState(null);
    const [displayFavourites, setDisplayFavourites] = useState(null);

    useEffect(() => {
        getFavourite();
    }, []);

    useEffect(() => {
        if (selectedCity != null) {
            getCities(selectedCity);
        }
    }, [selectedCity]);

    useEffect(() => {
        if (favourites !== null) {
            getFavouriteCities(favourites);
        }
    }, [favourites]);

    //API call to get the wetherinfo for favourite cities
    const getFavouriteCities = function (favourites) {
        let favouiteFetch = favourites[0].map((eachCity) => {
            return fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${eachCity["name"]}&appid=3031aac4ff517ddfc83b94a403d374b0`
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

    //API call to get the wetherinfo (forcastApi) for selected city and for temperature graph(cityAPi)
    const getCities = function (selectedCity) {
        const cityApi = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${selectedCity}&appid=3031aac4ff517ddfc83b94a403d374b0`;
        const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`;
        Promise.all([fetch(cityApi), fetch(forecastApi)])
            .then((res) => {
                return Promise.all(
                    res.map(function (res) {
                        return res.json();
                    })
                );
            })
            .then((result) =>
                setCities([{ daily: result[0], forecast: result[1] }])
            );
    };

    // Set user selected City - using click on favourite
    const favForcast = (favCity) => {
        setSelectedCity(favCity);
    };
    //Set user selected City- using form input
    const onCitySubmit = function (city) {
        setSelectedCity(city);
    };

    //API call to get favourites from DB
    const getFavourite = () => {
        getFavourites().then((result) => {
            console.log(result);
            return setFavourites([result]);
        });
    };

    //API call to save favourites to DB
    const addFavourite = (favouriteCity) => {
        console.log(favouriteCity);
        postFavourite(favouriteCity).then(() => getFavourite());
    };

    //API call to dalete favourites in DB
    const deleteFav = (city) => {
        console.log(favourites[0]);

        const result = favourites[0].filter(
            (eachCity) => eachCity["name"].toLowerCase() !== city.toLowerCase()
        );

        deleteFavourite(city).then(() => {
            setFavourites([result]);
        });
    };

    return (
        <div>
            <SearchForm
                cities={cities}
                onCitySubmit={onCitySubmit}
                addFavourite={addFavourite}
            />
            <div id="flex-grid">
                {displayFavourites != null ? (
                    <DisplayFavourite
                        displayFavourites1={displayFavourites}
                        deleteFavourite2={deleteFav}
                        favourite7DayForcast={favForcast}
                    />
                ) : null}

                <UkMap cities={cities} styles={MapStyles.styles} />
            </div>

            {selectedCity != null ? <City cities={cities} /> : null}
        </div>
    );
};

export default WeatherContainer;
