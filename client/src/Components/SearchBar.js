const SearchBar = ({ onCitySubmitted }) => {
    const handleSubmit = function (event) {
        event.preventDefault();
        const chosenCity = event.target.city.value;
        onCitySubmitted(chosenCity);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Search for City"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
