import './SearchForm.css';
import './NavBar.css';
import {useState} from "react";
import {postFavourite} from "../services/FavouriteService";

const SearchForm = ({onCitySubmit, addFavourite, onClick}) => {

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     postBooking(favourite).then((data) => {
    //         addBooking(data);
    //     })

    const handleSubmit = function (event) {
        event.preventDefault();
        const chosenCity = event.target.city.value;
        // const chosenCity = "Edinburgh";
        onCitySubmit(chosenCity);
    };
    
    const onSubmit = function (event) {
        event.preventDefault();
        const favourite = event.target.city.value;
        onClick(favourite);
        // addFavourite("London");
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
                <button id="search-button" type="submit" >Search</button>
                <input onSubmit={onSubmit} type="submit" value="Add to Favourites" id="save" />
            </form>
        </div>
    );
};


export default SearchForm;