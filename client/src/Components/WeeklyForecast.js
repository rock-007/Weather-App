import {WiThermometer} from "react-icons/wi";
import {WiStrongWind} from "react-icons/wi";
import {WiCloudy} from "react-icons/wi";
import {WiDaySunny} from "react-icons/wi";
import {WiRain} from "react-icons/wi";
import {WiRaindrop} from "react-icons/wi";

const WeeklyForecast = ({main, visibility, wind, clouds, rain, day}) => {

    let cloudy = clouds > 50;
    let sunny = clouds < 50;

    return (
        <div id="day-forecast">
            <h4 id="day-number"> Day: {day + 1}</h4>
            <ul id="details-list">
                <li>
                    <WiThermometer /> {(main.temp - 273.15).toFixed(0)} ℃
                </li>
                <li>
                    <WiStrongWind /> {wind["speed"]}
                </li>
                <li>
                    {clouds = (clouds > 50) ? <WiCloudy /> : <WiDaySunny />}
                </li>
                <li>
                    {/* {rain = (rain > 2) ? <WiRain /> : <WiRaindrop />} */}
                    <WiRain />
                    {rain ? `Rain: ${rain["3h"]}mm` : `Rain: n/a`}
                </li>
            </ul>
        </div>
    );
};

export default WeeklyForecast;
