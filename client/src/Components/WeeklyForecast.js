import {WiThermometer, WiStrongWind, WiCloudy, WiDaySunny, WiRain, WiRaindrop, WiDayRain, WiDayShowers, WiDayCloudy} from "react-icons/wi";

const WeeklyForecast = ({main, wind, clouds, eachday, rain, day}) => {
    // console.log(eachday["clouds"])

    // clouds={eachDay.clouds["all"]}

    let displayClouds = function (clouds, rain) {
        console.log(clouds, rain)
        console.log(`clouds ${clouds.all}`)
        let rainCount = getRainCount(rain)
        if (clouds.all > 40 && rainCount > 4) {
            return <WiDayShowers class="icon" />
        } else if (clouds.all < 40) {
            return <WiDaySunny class="icon" />
        } else {
            return <WiDayCloudy class="icon" />
        }
    }

    let getRainCount = function (rain) {
        let rainCount = 0
        for (let rainNumber in rain)
            if (rainNumber == '3h')
                rainCount = rain['3h']
            else if (rainNumber == '1h')
                rainCount = rain['1h']
        return rainCount
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
                    {`${getRainCount(rain)} mm`}
                </li>
            </ul>
        </div>
    );
};

export default WeeklyForecast;
