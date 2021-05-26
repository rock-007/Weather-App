import React, { useState, useEffect } from "react";
import City from "../Components/City";
import SearchForm from "../Components/SearchForm";
import DisplayFavourite from "../Components/DisplayFavourite";
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
        getFavourite(); // this will help to render the fav on the start of the app
    }, []);

    useEffect(() => {
        if (favourites !== null) {
            getFavouriteCities(favourites);
        }
    }, [favourites]);

    const getFavouriteCities = function (favourites) {
        console.log(favourites[0]);
        let favouiteFetch = favourites[0].map((eachCity) => {
            return fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${eachCity["name"]}&appid=3031aac4ff517ddfc83b94a403d374b0`
            );
        });
        console.log(favouiteFetch);

        Promise.all(favouiteFetch)
            .then((res) => {
                console.log(res);
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
                setCities([{ daily: result[0], forecast: result[1] }])
            );
    };

    const onCitySubmit = function (city) {
        console.log(city);
        setSelectedCity(city);
    };

    const onClick = function (favourite) {
        setFavourites([...favourites, favourite]);
        console.log(favourites);
    };

    const getFavourite = () => {
        getFavourites().then((result) => setFavourites([result]));

        //setFavourites([...favourites, result]);
    };

    const addFavourite = (favouriteCity) => {
        // const temp = favourites.map(favourite => favourite);
        // temp.push(favourite);
        // setSelectedCity(temp);
        console.log(favouriteCity);
        postFavourite(favouriteCity).then(() => getFavourite());
    };
    const deleteFav = (city) => {
        console.log(favourites[0]);
        // delete and rerender

        const result = favourites[0].filter(
            (eachCity) => eachCity["name"].toLowerCase() !== city.toLowerCase()
        );
        console.log(result);

        deleteFavourite(city).then(() => {
            setFavourites([result]);
        });
    };

    const favForcast = (favCity) => {
        setSelectedCity(favCity);
    };

    return (
        <div>
            <SearchForm
                cities={cities}
                onCitySubmit={onCitySubmit}
                onClick={onClick}
                addFavourite={addFavourite}
            />
            {displayFavourites != null ? (
                <DisplayFavourite
                    displayFavourites1={displayFavourites}
                    deleteFavourite2={deleteFav}
                    favouriteforcast2={favForcast}
                />
            ) : null}
            {selectedCity != null ? <City cities={cities} /> : null}
        </div>
    );
    console.log(result);

    deleteFavourite(city).then(() => {
      setFavourites([result]);
    });
  };

  return (
    <div>
      <SearchForm
        cities={cities}
        onCitySubmit={onCitySubmit}
        onClick={onClick}
        addFavourite={addFavourite}
      />
      {displayFavourites != null ? (
        <DisplayFavourite
          displayFavourites1={displayFavourites}
          deleteFavourite2={deleteFav}
        />
      ) : null}
      {selectedCity != null ? <City cities={cities} /> : null}
    </div>
  );
};

export default WeatherContainer;
