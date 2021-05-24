import React, {useState, useEffect} from "react";
import City from "../components/City";
import SearchForm from "../components/SearchForm";
import {getFavourites, addFavourite, deleteFavourite} from "../services/FavouriteService";


const WeatherContainer = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [favourites, setFavourites] = useState({})

    useEffect(() => {
        if (selectedCity != null) {
            getCities(selectedCity);
        }
    }, [selectedCity], [setFavourites]);

    const getCities = function (selectedCity) {
        const cityApi = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`;
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
                setCities([...cities, {daily: result[0], forecast: result[1]}])
            );
    };

    const onCitySubmit = function (city) {
        setSelectedCity(city);
    };

    const onClick = function (favourite) {
        setFavourites(favourite)
    }

    const addFavourite = (favourite) => {
        // const temp = favourites.map(favourite => favourite);
        // temp.push(favourite);
        // setSelectedCity(temp);
         const temp = getFavourites()
         console.log(temp)
    };

    return (
        <div>
            <SearchForm cities={cities} onCitySubmit={onCitySubmit} addFavourite={addFavourite}/>
            {selectedCity != null ? <City cities={cities} /> : null}
        </div>
    );
};

export default WeatherContainer;
