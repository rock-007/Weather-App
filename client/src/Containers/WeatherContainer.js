import React, {useState, useEffect} from "react";
import WeekForecast from "../Components/WeekForecast";
import SearchForm from "../Components/SearchForm";
import SelectedDayForecast from "../Components/SelectedDayForecast";

const WeatherContainer = () => {
    const [forecasts, setForecasts] = useState([]);
    const [weekForecast, setWeekForecast] = useState([]);
    const [dayForecast, setDayForecast] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);

    useEffect(() => {
        if (selectedCity != null) {
            getForecasts(selectedCity);
        }
    }, [selectedCity]);



    const getForecasts = function (selectedCity) {
        const dayForecastApi = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`;
        const weekForecastApi = `http://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`;
        Promise.all([fetch(dayForecastApi), fetch(weekForecastApi)])
            .then((res) => {
                return Promise.all(
                    res.map(function (res) {
                        return res.json();
                    })
                );
            })
            .then((result) =>
                setForecasts([...forecasts, {day: result[0], week: result[1]}])
               
            ); 
            console.log("Promise", forecasts)
    };

    const onCitySubmit = function (city) {
        setSelectedCity(city);
    };

    const onSelectedDaySubmit = function (day) {
        setSelectedDay(day)
    };

    return (
        <div>
            {console.log(forecasts)}
            <SearchForm onCitySubmit={onCitySubmit} />
            {/* {selectedDay != null ? <SelectedDayForecast day = {selectedDay} forecasts = {forecasts}/> : null} */}
            {selectedCity != null ? <WeekForecast forecasts={forecasts} onSelectedDaySubmit={onSelectedDaySubmit}/> : null}
        </div>
    );
};

export default WeatherContainer;
