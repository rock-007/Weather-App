import {WiThermometer, WiStrongWind, WiDaySunny, WiRain, WiDayShowers, WiDayCloudy} from "react-icons/wi";
import './css/WeekForecast.css';
import './css/DayZero.css';

const WeeklyForecast = ({main, wind, clouds, rain, day}) => {

    let displayClouds = function (clouds, rain) {

        let rainCount = getRainCount(rain)
        if (clouds.all > 40 && rainCount > 4) {
            return <WiDayShowers className="icon" color="#ffffff"/>
        } else if (clouds.all < 40) {
            return <WiDaySunny className="icon" color="#ffffff"/>
        } else {
            return <WiDayCloudy className="icon" color="#ffffff"/>
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
        <div id="day-name-sun-img" >
            <h1 id ="day-number"> 
                {day === 0 ? 'Today'
                    : day === 1 ? 'Tomorrow'
                        : `Day ${day + 1}`}
            </h1>
            <div id= "sunny-cloudy">
                {displayClouds(clouds, rain)}
            </div>
        </div>
            <div id="details-list">
                <div id="temperature">
                    <WiThermometer className="icon" color="	#ffffff"/> 
                    <div id="min-max-temp">
                    Max: {(main.temp_max - 273.15).toFixed(0)} ℃ <br /> Min: {(main.temp_min - 273.15).toFixed(0)} ℃
                    </div>
                </div>
                <div id="wind">
                    <WiStrongWind className="icon" color="	#ffffff"/> 
                    <div id="wind-number">
                    {(wind["speed"] * 2.2369).toFixed(0)} mph
                    </div>
                </div>

                <div id="rain">
                    <WiRain className="icon" color="#ffffff" />
                    <div id="rain-number">
                    {`${getRainCount(rain)} mm`}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeeklyForecast;
