import React, { useState, useEffect } from "react";
import WeekForecast from "../Components/WeekForecast";
import SearchForm from "../Components/SearchForm";
import SelectedDayForecast from "../Components/SelectedDayForecast";

const WeatherContainer = () => {
    const [weekForecast, setWeekForecast] = useState([]); //week
    const [dayForecast, setDayForecast] = useState([]); //day
    const [selectedCity, setSelectedCity] = useState(null); // selection from form
    const [selectedDay, setSelectedDay] = useState(null);

    useEffect(() => {
        if (selectedCity != null) {
            getForecasts(selectedCity);
        }
    }, [selectedCity]);

    const getForecasts = function (selectedCity) {
        console.log(selectedCity);
        const dayForecastApi = `http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${selectedCity}&appid=3031aac4ff517ddfc83b94a403d374b0`;
        const weekForecastApi = `http://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`;

        Promise.all([fetch(dayForecastApi), fetch(weekForecastApi)])
            .then((res) => {
                return Promise.all(
                    res.map(function (res) {
                        return res.json();
                    })
                );
            })
            .then((result) => {
                console.log(result);
                setDayForecast([...dayForecast, result[0]]);
                setWeekForecast([...weekForecast, result[1].list]);
            });
    };

    const onCitySubmit = function (city) {
        console.log(city);
        setSelectedCity(city);
        //setSelectedDay([]);
    };

    const onSelectedDaySubmit = function (day) {
        setSelectedDay(day);
    };

    const displayDayAndWeekly = () => {

        

        for (let i=0;i<dayForecast.length;i++ ){


        }
        return 1;
    };

    return (
        <div>
            <SearchForm onCitySubmit={onCitySubmit} />
            {displayDayAndWeekly}
            {selectedDay != null ? (
                <SelectedDayForecast dayForecast={dayForecast} />
            ) : null}
            {selectedCity != null ? (
                <WeekForecast
                    weekForecast={weekForecast}
                    onSelectedDaySubmit={onSelectedDaySubmit}
                />
            ) : null}
        </div>
    );
};

export default WeatherContainer;
