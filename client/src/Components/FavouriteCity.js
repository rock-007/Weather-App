import "./css/FavouriteCity.css";
import { WiThermometer, WiDaySunny, WiDayCloudy } from "react-icons/wi";

const FavouriteCity = ({ eachCity, deleteFavourite, favourite7DayForcast }) => {
    let displayClouds = function (clouds) {
        if (clouds > 41) {
            return <WiDayCloudy class="icon" />;
        } else if (clouds <= 41) {
            return <WiDaySunny class="icon" />;
        }
    };

    const handleDelete = (cityName) => {
        deleteFavourite(cityName);
    };

    const handleFavDisplay = (favCity) => {
        console.log(favCity);
        favourite7DayForcast(favCity);
    };

    return (
        <>
            <div
                className="details-list2"
                onClick={() => {
                    handleFavDisplay(eachCity["name"]);
                }}
            >
                <li id="fav-city-name">{eachCity["name"]}</li>
                <div id="sun-temperature">
                    <li id="fav-sunny-cloudy">
                        {displayClouds(eachCity["clouds"]["all"])}{" "}
                    </li>
                    <li>{" "}</li>
                    <div id="fav-temperature">
                        <WiThermometer class="icon" />
                        <div id="min-max-temp">
                            Max:{" "}
                            {(eachCity["main"]["temp_max"] - 273.15).toFixed(0)}{" "}
                            ℃ <br /> Min:{" "}
                            {(eachCity["main"]["temp_max"] - 273.15).toFixed(0)}{" "}
                            ℃
                        </div>
                    </div>
                    <div id="delete-button">
                        <input
                            id="delete-button"
                            type="submit"
                            value="Delete"
                            onClick={() => {
                                handleDelete(eachCity["name"]);
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FavouriteCity;
