import React, {useState, useEffect} from 'react';
import City from '../components/City';
import SearchBar from '../components/SearchBar';

const WeatherContainer = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        getCities();
    }, [])

    const getCities = function(){
         fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=1a9a20046a26886e891582ce46507106')
         .then(res => res.json())
         .then (result=> setCities([...cities, result]))
        
        
    }

    const onCitySubmit = function(city){
        setSelectedCity(city);
    }



    return (
        <div>
            <p>Hello world</p>
            <SearchBar cities={cities} onCitySubmit={onCitySubmit} />
            <City cities={cities}/>
        </div>
    )
}

export default WeatherContainer;