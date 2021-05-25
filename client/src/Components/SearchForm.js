import './SearchForm.css';
import './NavBar.css';
import {useState} from "react";
import {postFavourite} from "../services/FavouriteService";
import {addFavourite} from "../Containers/WeatherContainer";
const SearchForm = ({onCitySubmit, addFavourite, onClick}) => {
const [search, setSearch]= useState()
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     postBooking(favourite).then((data) => {
    //         addBooking(data);
    //     })

    // const handleSubmit = function (event) {
    //     event.preventDefault();
    //     const chosenCity = event.target.city.value;
    //     // const chosenCity = "Edinburgh";
    //     onCitySubmit(chosenCity);
    // };

    const handleSubmit = function (event) {
        event.preventDefault();
    if (search === 1){
    // search
    const chosenCity = event.target.city.value;
    // const chosenCity = "Edinburgh";
    onCitySubmit(chosenCity);
      

    } else if (search === 2){
    // save in DB
    const favourite = event.target.city.value;
    addFavourite(favourite);
    };       
    
    }
    return (
        <div id="form-wrapper" className="nav-bar">
        <h1 id="header">Weather</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                />
                <button id="search-button" type="submit" onClick={()=>{setSearch(1)}}>Search</button>
                <input onClick={()=>{setSearch(2)}} type="submit" value="Add to Favourites" id="save" />
            </form>
        </div>
    );
};


export default SearchForm;