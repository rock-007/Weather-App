import "./FavouriteCity.css";
import {
    WiThermometer,
    WiDaySunny,
    WiDayCloudy,
} from "react-icons/wi";

const FavouriteCity = ({eachCity, deleteFavourite}) => {
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

    return (
        <>
            <ul class="details-list2">
                <li>
                    {" "}
                    {/* <div style={{ position: "absolute", alignItems: "center" }}>
            <p>X</p>
          </div> */}
                </li>

                <li>{eachCity["name"]}</li>

                <div id="sunny-cloudy">
                    <li>{displayClouds(eachCity["clouds"]["all"])} </li>
                    <li>
                        {" "}
                        <div id="temperature">
                            <WiThermometer class="icon" />
                            <div id="min-max-temp">
                                Max:{" "}
                                {(
                                    eachCity["main"]["temp_max"] - 273.15
                                ).toFixed(0)}{" "}
                                ℃ <br /> Min:{" "}
                                {(
                                    eachCity["main"]["temp_max"] - 273.15
                                ).toFixed(0)}{" "}
                                ℃
                            </div>
                        </div>
                    </li>
                    <input
                        type="submit"
                        value="Delete"
                        onClick={() => {
                            handleDelete(eachCity["name"]);
                        }}
                    />
                </div>
            </ul>
        </>
    );
};

export default FavouriteCity;
