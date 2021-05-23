import './SearchForm.css';

const SearchForm = ({ onCitySubmit }) => {
    const handleSubmit = function (event) {
        event.preventDefault();
        // const chosenCity = event.target.city.value;
        const chosenCity = "London";
        onCitySubmit(chosenCity);
    };

    return (
        <div id="form-wrapper">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Search for City"
                />
                <button id="search-button" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchForm;
