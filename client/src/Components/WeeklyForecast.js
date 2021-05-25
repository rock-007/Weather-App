import {WiThermometer, WiStrongWind, WiDaySunny, WiRain, WiDayShowers, WiDayCloudy} from "react-icons/wi";
import './WeekForecast.css';

const WeeklyForecast = ({main, wind, clouds, rain, day}) => {

    let displayClouds = function (clouds, rain) {

        let rainCount = getRainCount(rain)
        if (clouds.all > 40 && rainCount > 4) {
            return <WiDayShowers className="icon" />
        } else if (clouds.all < 40) {
            return <WiDaySunny className="icon" />
        } else {
            return <WiDayCloudy className="icon" />
        }
    }

    let getRainCount = function (rain) {
        let rainCount = 0
        for (let rainNumber in rain)
            if (rainNumber === '3h')
                rainCount = rain['3h']
            else if (rainNumber === '1h')
                rainCount = rain['1h']
        return rainCount
    }

    return (
        <div id={`day-${day}`}>
            <h4 id ="day-number"> 
                {day === 0 ? 'Today'
                    : day === 1 ? 'Tomorrow'
                        : `Day ${day + 1}`}
            </h4>
            <ul id="details-list">
                <div id= "sunny-cloudy">
                    {displayClouds(clouds, rain)}
                </div>
                <div id="temperature">
                    <WiThermometer className="icon" /> 
                    <div id="min-max-temp">
                    Max: {(main.temp_max - 273.15).toFixed(0)} ℃ <br /> Min: {(main.temp_min - 273.15).toFixed(0)} ℃
                    </div>
                </div>
                <div id="wind">
                    <WiStrongWind className="icon" /> 
                    <div>
                    {(wind["speed"] * 2.2369).toFixed(0)} mph
                    </div>
                </div>

                <div id="rain">
                    <WiRain className="icon" />
                    <div>
                    {`${getRainCount(rain)} mm`}
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default WeeklyForecast;
