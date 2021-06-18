import "./css/SearchForm.css";
import "./NavBar.css";
import { useState } from "react";
import CCBC from "../Components/CCBC.png";
const SearchForm = ({ onCitySubmit, addFavourite, onClick }) => {
    const [search, setSearch] = useState();

    const handleSubmit = function (event) {
        event.preventDefault();
        if (search === 1) {
            // search
            const chosenCity = event.target.city.value.toLowerCase();
            onCitySubmit(chosenCity);
        } else if (search === 2) {
            // save in DB
            const favourite = event.target.city.value.toLowerCase();
            addFavourite(favourite);
        }
        event.target.reset();
    };
    return (
        <div id="form-wrapper" className="nav-bar">
            <div id="header-left">
                <img id="image-2" src={CCBC} alt="No image found" width="200" />
                <h1 id="header">Weather</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="city" id="city" placeholder="City" />
                <button
                    id="search-button"
                    type="submit"
                    onClick={() => {
                        setSearch(1);
                    }}
                >
                    Search
                </button>
                     
                <input
                    onClick={() => {
                        setSearch(2);
                    }}
                    type="submit"
                    value="Add"
                    id="save"
                />
            </form>
        </div>
    );
};

export default SearchForm;
