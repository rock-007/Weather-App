import React, {useState, useEffect} from 'react';
import City from '../components/City';
import SearchForm from '../components/SearchForm';

const WeatherContainer = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('London');

    useEffect(() => {
        getCities();
    }, [selectedCity])

    const getCities = function () {
        const api = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`
        console.log(api)
        fetch(api)
            .then(res => res.json())
            .then(result => setCities([...cities, result]))


    }

    const onCitySubmit = function (city) {
        setSelectedCity(city);

    }



    return (
        <div>
            <p>Hello world</p>
            <SearchForm cities={cities} onCitySubmit={onCitySubmit} />
            <City cities={cities} />
        </div>
    )
}

export default WeatherContainer;