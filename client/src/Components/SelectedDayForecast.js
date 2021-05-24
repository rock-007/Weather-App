import {
    WiThermometer,
    WiStrongWind,
    WiDaySunny,
    WiRain,
    WiDayShowers,
    WiDayCloudy,
} from "react-icons/wi";

const SelectedDayForecast = ({ dayForecast }) => {
    console.log(dayForecast);
    const clouds = dayForecast.clouds;
    const rain = dayForecast.rain;
    const main = dayForecast.main;
    const wind = dayForecast.wind;

    const getRainCount = function (rain) {
        const rainCount = 0;
        for (const rainNumber in rain)
            if (rainNumber === "3h") rainCount = rain["3h"];
            else if (rainNumber === "1h") rainCount = rain["1h"];
        return rainCount;
    };

    const displayClouds = function (clouds, rain) {
        const rainCount = getRainCount(rain);
        if (clouds > 40 && rainCount > 4) {
            return <WiDayShowers class="icon" />;
        } else if (clouds < 40) {
            return <WiDaySunny class="icon" />;
        } else {
            return <WiDayCloudy class="icon" />;
        }
    };

    return (
        <div>
            <ul id="details-list">
                <li id="sunny-cloudy">{displayClouds(clouds, rain)}</li>
                <li id="temperature">
                    <WiThermometer class="icon" />
                    <p id="min-max-temp">
                        Max: {(main.temp_max - 273.15).toFixed(0)} ℃ <br /> Min:{" "}
                        {(main.temp_min - 273.15).toFixed(0)} ℃
                    </p>
                </li>
                <li id="wind">
                    <WiStrongWind class="icon" />
                    <p>{(wind.speed * 2.2369).toFixed(0)} mph</p>
                </li>
                <li id="rain">
                    <WiRain class="icon" />
                    <p>{`${getRainCount(rain)} mm`}</p>
                </li>
            </ul>
        </div>
    );
};

export default SelectedDayForecast;
