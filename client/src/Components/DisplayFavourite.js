import FavouriteCity from "./FavouriteCity";
import UK from "./UK.png";

const DisplayFavourite = ({ displayFavourites1, deleteFavourite2 }) => {

  const deleteFavourite1 = (city) => {
    deleteFavourite2(city);
  };

  const display = displayFavourites1.map((eachFavourite, index) => {
    return (
      <FavouriteCity
        eachCity={eachFavourite}
        key={index}
        deleteFavourite={deleteFavourite1}
      />
    );
  });
  return (
    <>
      {" "}
      <div id="flex-grid">
      <div className="fav-forecast">{display}</div>
      <div className="britain">
        <img id ="image-britain"src={UK} alt="No image found" width="200"/>
      </div>
      </div>
    </>
  );
};

export default DisplayFavourite;
