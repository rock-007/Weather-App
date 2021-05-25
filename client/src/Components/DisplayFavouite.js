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

// import UK from "../Components/UK.png";

// const DisplayFavourite = ({ displayFavourites1 }) => {

//     const display = displayFavourites1.map((eachFavourite) => {
//         return <p>{eachFavourite["name"]}</p>;
//     });
//     return (
//         <div>
//             {display}
//             <img id ="image-1"src={UK} alt="No image found" width="200"/>
//         </div>
//     );
// };

// export default DisplayFavourite;
