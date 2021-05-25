import "./FavouriteCity.css";
import {
    WiThermometer,
    WiStrongWind,
    WiDaySunny,
    WiRain,
    WiDayShowers,
    WiDayCloudy,
} from "react-icons/wi";

const FavouriteCity = ({eachCity, deleteFavourite}) => {
    let displayClouds = function (clouds) {
        console.log(clouds);
        if (clouds > 41) {
            return <WiDayCloudy class="icon" />;
        } else if (clouds <= 41) {
            return <WiDaySunny class="icon" />;
        }
    };
    console.log("ddf", eachCity);

    const handleDelete = (cityName) => {
        console.log("55", cityName);
        deleteFavourite(cityName);
    };

    return (
        <>
            <div className="details-list2">
                {/* <li>{" "}</li> */}
                <li id="fav-city-name">{eachCity["name"]}</li>
                <div id="sun-temperature">
                    <li id="fav-sunny-cloudy">
                        {displayClouds(eachCity["clouds"]["all"])}{" "}
                    </li>
                    {/* <li>{" "}</li> */}
                    <div id="fav-temperature">
                        <WiThermometer class="icon" />
                        <div id="min-max-temp">
                            Max: {(eachCity["main"]["temp_max"] - 273.15).toFixed(0)} ℃ <br />{" "}
                            Min: {(eachCity["main"]["temp_max"] - 273.15).toFixed(0)} ℃
                        </div>
                    </div>
                    <div id="delete-button">
                    <input
                        id="delete-button"
                        type="submit"
                        value="Delete" a
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
