import FavouriteCity from "./FavouriteCity";

const DisplayFavourite = ({
    displayFavourites1,
    deleteFavourite2,
    favouriteforcast2,
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
                favouriteforcast={favouriteforcast1}
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