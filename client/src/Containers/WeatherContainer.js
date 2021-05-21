import React, {useState, useEffect} from 'react';
import City from '../components/City';
import SearchForm from '../components/SearchForm';

const WeatherContainer = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState([]);

    useEffect(() => {
        getCities();
    }, [selectedCity])

    const getCities = async (selectedCity) => {
        const cityApi = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=1a9a20046a26886e891582ce46507106`
        const forcastApi = `http://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=a8f139819d7f5bf326630492c5f3a89a6`
        const city = {daily: null, forcast: null}


        const cityInfo = await fetch(cityApi)
            .then(res => res.json())
            .then(result => city.daily=result)

        const cityForcast = await 
                fetch(forcastApi)
                    .then(res => res.json())
                    .then(result1 => city.forcast=result1 ) 
                        
        setCities([...cities, city])}
                        
    

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