const WeeklyForcast = ({ main, visibility, wind, clouds, rain, day }) => {
    console.log(main);
    return (
        <div>
            <h4> Day:{day + 1}</h4>
            <li>
                Temperature: {(main.temp - 273.15).toFixed(2)} ℃, visibility:
                {visibility}, Wind Speed: {wind["speed"]}, clouds :{clouds},
                {rain ? `rain:${rain["3h"]}` : `rain: n/a`}
            </li>
        </div>
    );
};

export default WeeklyForcast;
