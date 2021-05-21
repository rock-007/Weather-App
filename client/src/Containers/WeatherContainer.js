import React, {useState, useEffect} from 'react';
import City from '../components/City';
import SearchForm from '../components/SearchForm';

const WeatherContainer = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    const getCities = function(){
         fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=1a9a20046a26886e891582ce46507106')
         .then(res => res.json())
         .then (result=> console.log(result.name, result.weather))
        
    }
    getCities();

    const onCitySubmit = function(city){
        setSelectedCity(city);
    }

    return (
        <div>
            <p>Hello world</p>
            {/* <SearchForm/>
            <City/> */}
        </div>
    )
}

export default WeatherContainer;