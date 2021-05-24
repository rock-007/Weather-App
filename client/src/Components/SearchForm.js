import './SearchForm.css';
import './NavBar.css';
import {useState} from "react";
import {postFavourite} from "../services/FavouriteService";

const SearchForm = ({onCitySubmit, addFavourite}) => {


    // const onChange = (e) => {
    //     favourite[e.target.id] = e.target.value;
    //     setFormData(favourite);
    //     addFavourite("London");
    // }

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
        addFavourite("London");
    };

    return (
        <div id="form-wrapper" class="nav-bar">
        <h1 id="header">Weather</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                />
                <button id="search-button" type="submit">Search</button>
                <input type="submit" value="Save" id="save" />
            </form>
        </div>
    );
};


export default SearchForm;