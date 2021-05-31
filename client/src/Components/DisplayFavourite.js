import FavouriteCity from "./FavouriteCity";

const DisplayFavourite = ({
    displayFavourites1,
    deleteFavourite2,
    favourite7DayForcast,
}) => {
    const deleteFavourite1 = (city) => {
        deleteFavourite2(city);
    };
    const favouriteforcast1 = (favCity) => {
        favouriteforcast2(favCity);
    };
    const display = displayFavourites1.map((eachFavourite, index) => {
        return (
            <FavouriteCity
                eachCity={eachFavourite}
                key={index}
                deleteFavourite={deleteFavourite1}
                favourite7DayForcast={favourite7DayForcast}
            />
        );
    });
    return (
        <>
            <div id="flex-grid">
                {" "}
                <div className="fav-forecast">{display}</div>
            </div>
        </>
    );
};

export default DisplayFavourite;
