import {WiThermometer, WiStrongWind, WiCloudy, WiDaySunny, WiRain, WiRaindrop, WiDayRain, WiDayShowers, WiDayCloudy} from "react-icons/wi";

const WeeklyForecast = ({main, wind, clouds, eachday, rain, day}) => {
    // console.log(eachday["clouds"])

    // clouds={eachDay.clouds["all"]}

    let displayClouds = function (clouds, rain) {
        console.log(clouds, rain)

        if (clouds > 40 && rain > 2) {
            return <WiDayShowers class="icon" />
        } else if (rain < 4) {
            return <WiDaySunny class="icon" />
        } else {
            return <WiDayCloudy class="icon" />
        }

    }

    return (
        <div id="day-forecast">
            <h4 id="day-number"> {
                day == 0 ? 'Today'
                    : day == 1 ? 'Tomorrow'
                        : `Day ${day + 1}`}
            </h4>
            <ul id="details-list">
                <li>
                    {displayClouds(clouds, rain)}
                </li>
                <li>
                    <WiThermometer class="icon" /> Max: {(main.temp_max - 273.15).toFixed(0)} ℃ <br /> Min: {(main.temp_min - 273.15).toFixed(0)} ℃
                </li>
                <li>
                    <WiStrongWind class="icon" /> {(wind["speed"] * 2.2369).toFixed(0)} mph
                </li>

                <li>
                    {/* {rain = (rain > 2) ? <WiRain /> : <WiRaindrop />} */}
                    <WiRain class="icon" />
                    {rain ? ` ${rain["3h"]}mm` : ` n/a`}
                </li>
            </ul>
        </div>
    );
};

export default WeeklyForecast;
