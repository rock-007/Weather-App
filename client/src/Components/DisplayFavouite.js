import FavouriteCity from "./FavouriteCity";

const DisplayFavouite = ({ displayFavourites1, deleteFavourite2 }) => {
  console.log(displayFavourites1);

  const deleteFavourite1 = (city) => {
    console.log("7", city);
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
      <div className="fav-forecast">{display}</div>
    </>
  );
};

export default DisplayFavouite;
