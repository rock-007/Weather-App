const WeeklyForcast = ({main, visibility, wind, clouds, rain, day}) => {
    console.log(main);
    return (
        <div id="day-forecast">
            <h4> Day:{day + 1}</h4>
            <ul id="details-list">
                <li>
                    Temperature: {(main.temp - 273.15).toFixed(2)} ℃
                </li>
                <li>
                    Visibility: {visibility}
                </li>
                <li>
                    Wind Speed: {wind["speed"]}
                </li>
                <li>
                    Clouds: {clouds}
                </li>
                <li>
                    {rain ? `Rain: ${rain["3h"]}` : `Rain: n/a`}
                </li>
            </ul>
        </div>
    );
};

export default WeeklyForcast;
