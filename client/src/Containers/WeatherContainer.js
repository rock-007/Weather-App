import React, {useState, useEffect} from 'react';
import City from '../components/City';
import SearchForm from '../components/SearchForm';

const WeatherContainer = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    const getCities = function(){
        // fetch('insert API here')
        // .then(res => res.json())
    }

    const onCitySubmit = function(city){
        setSelectedCity(city);
    }

    return (
        <div>
            <SearchForm/>
            <City/>
        </div>
    )
}

export default WeatherContainer;