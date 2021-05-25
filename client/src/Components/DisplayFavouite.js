const DisplayFavouite = ({ displayFavourites1 }) => {




    console.log(displayFavourites1);
    const display = displayFavourites1.map((eachFavourite) => {
        return <p>{eachFavourite["name"]}</p>;
    });
    return <>{display}</>;
};

export default DisplayFavouite;
