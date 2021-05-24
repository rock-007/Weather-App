<<<<<<< HEAD:client/src/Components/WeeklyForecast.js
import {
    WiThermometer,
    WiStrongWind,
    WiDaySunny,
    WiRain,
    WiDayShowers,
    WiDayCloudy,
} from "react-icons/wi";
=======
import {WiThermometer, WiStrongWind, WiDaySunny, WiRain, WiDayShowers, WiDayCloudy} from "react-icons/wi";

const WeekForecastDay = ({main, wind, clouds, rain, day}) => {
>>>>>>> 517bab57ee5c1fe60d7dbb76351752f8ac800db0:client/src/Components/WeekForecastDay.js

const WeeklyForecast = ({ main, wind, clouds, rain, day }) => {
    let displayClouds = function (clouds, rain) {
        let rainCount = getRainCount(rain);
        if (clouds.all > 40 && rainCount > 4) {
            return <WiDayShowers class="icon" />;
        } else if (clouds.all < 40) {
            return <WiDaySunny class="icon" />;
        } else {
            return <WiDayCloudy class="icon" />;
        }
    };

    let getRainCount = function (rain) {
        let rainCount = 0;
        for (let rainNumber in rain)
<<<<<<< HEAD:client/src/Components/WeeklyForecast.js
            if (rainNumber == "3h") rainCount = rain["3h"];
            else if (rainNumber == "1h") rainCount = rain["1h"];
        return rainCount;
    };

    return (
        <div id="day-forecast">
            <h4 id="day-number">
                {" "}
                {day == 0 ? "Today" : day == 1 ? "Tomorrow" : `Day ${day + 1}`}
=======
            if (rainNumber === '3h')
                rainCount = rain['3h']
            else if (rainNumber === '1h')
                rainCount = rain['1h']
        return rainCount
    }

    return (
        <div id="day-forecast">
            <h4 id="day-number"> {
                day === 0 ? 'Today'
                    : day === 1 ? 'Tomorrow'
                        : `Day ${day + 1}`}
>>>>>>> 517bab57ee5c1fe60d7dbb76351752f8ac800db0:client/src/Components/WeekForecastDay.js
            </h4>
            <ul id="details-list">
                <li id="sunny-cloudy">{displayClouds(clouds, rain)}</li>
                <li id="temperature">
<<<<<<< HEAD:client/src/Components/WeeklyForecast.js
                    <WiThermometer class="icon" />
                    <li id="min-max-temp">
                        Max: {(main.temp_max - 273.15).toFixed(0)} ℃ <br /> Min:{" "}
                        {(main.temp_min - 273.15).toFixed(0)} ℃
                    </li>
                </li>
                <li id="wind">
                    <WiStrongWind class="icon" />
                    <li>{(wind["speed"] * 2.2369).toFixed(0)} mph</li>
=======
                    <WiThermometer class="icon" /> 
                    <p id="min-max-temp">
                    Max: {(main.temp_max - 273.15).toFixed(0)} ℃ <br /> Min: {(main.temp_min - 273.15).toFixed(0)} ℃
                    </p>
                </li>
                <li id="wind">
                    <WiStrongWind class="icon" /> 
                    <p>
                    {(wind["speed"] * 2.2369).toFixed(0)} mph
                    </p>
>>>>>>> 517bab57ee5c1fe60d7dbb76351752f8ac800db0:client/src/Components/WeekForecastDay.js
                </li>

                <li id="rain">
                    <WiRain class="icon" />
<<<<<<< HEAD:client/src/Components/WeeklyForecast.js
                    <li>{`${getRainCount(rain)} mm`}</li>
=======
                    <p>
                    {`${getRainCount(rain)} mm`}
                    </p>
>>>>>>> 517bab57ee5c1fe60d7dbb76351752f8ac800db0:client/src/Components/WeekForecastDay.js
                </li>
            </ul>
        </div>
    );
};

export default WeekForecastDay;
