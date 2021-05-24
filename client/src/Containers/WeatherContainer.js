import React, {useState, useEffect} from "react";
import WeekForecast from "../Components/WeekForecast";
import SearchForm from "../Components/SearchForm";
import SelectedDayForecast from "../Components/SelectedDayForecast";

const WeatherContainer = () => {
    const [weekForecast, setWeekForecast] = useState([]);
    const [dayForecast, setDayForecast] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);

    useEffect(() => {
        if (selectedCity != null) {
            getForecasts(selectedCity);
        }
    }, [selectedCity]);

<<<<<<< HEAD
    const getCities = function (selectedCity) {
        const cityApi = `http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${selectedCity}&appid=3031aac4ff517ddfc83b94a403d374b0`;
        const forecastApi = `http://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`;
        Promise.all([fetch(cityApi), fetch(forecastApi)])
=======


    const getForecasts = function (selectedCity) {
        const dayForecastApi = `http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${selectedCity}&appid=3031aac4ff517ddfc83b94a403d374b0`;
        const weekForecastApi = `http://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`;
        
        Promise.all([fetch(dayForecastApi), fetch(weekForecastApi)])
>>>>>>> 517bab57ee5c1fe60d7dbb76351752f8ac800db0
            .then((res) => {
                return Promise.all(res.map(function (res) {return res.json()}))
            })
            .then((result) => {
                setDayForecast(result[0]);
                setWeekForecast(result[1].list)   
            }); 
    
    };

    const onCitySubmit = function (city) {
        setSelectedCity(city);
        setSelectedDay([]);
    };

    const onSelectedDaySubmit = function (day) {
        setSelectedDay(day)
    };

    return (
        <div>
            <SearchForm onCitySubmit={onCitySubmit} />
            {selectedDay != null ? <SelectedDayForecast dayForecast = {dayForecast}/> : null}
            {selectedCity != null ? <WeekForecast weekForecast={weekForecast} onSelectedDaySubmit={onSelectedDaySubmit}/> : null}
        </div>
    );
};

export default WeatherContainer;
