import UK from "../Components/UK.png";

const DisplayFavourite = ({ displayFavourites1 }) => {

    const display = displayFavourites1.map((eachFavourite) => {
        return <p>{eachFavourite["name"]}</p>;
    });
    return (
        <div>
            {display}
            <img id ="image-1"src={UK} alt="No image found" width="200"/>
        </div>;
    );
};

export default DisplayFavourite;
