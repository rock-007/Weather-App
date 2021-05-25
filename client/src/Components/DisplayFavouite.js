import FavouriteCity from "./FavouriteCity";

const DisplayFavouite = ({ displayFavourites1 }) => {
  console.log(displayFavourites1);

  const display = displayFavourites1.map((eachFavourite, index) => {
    return <FavouriteCity eachCity={eachFavourite} key={index} />;
  });
  return (
    <>
      {" "}
      <div className="fav-forecast">{display}</div>
    </>
  );
};

export default DisplayFavouite;
