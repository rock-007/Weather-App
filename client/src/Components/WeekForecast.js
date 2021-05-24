import WeekForecastDay from "./WeekForecastDay";
import './WeekForecast.css';

const WeekForecast = ({forecasts}) => {
    const weekForecast = forecasts.map((forecast) => {

        return (
            <div class="city-card">
                <h3 id="city-name">{forecast.day.name}</h3>
                {forecast.forecast.list
                    .map((eachDay, index) => (<WeekForecastDay
                        main={eachDay.main}
                        eachday={eachDay}
                        visibility={eachDay.visibility}
                        wind={eachDay.wind}
                        day={index}
                        clouds={eachDay["clouds"]}
                        rain={eachDay.rain}
                        key={index}
                    />
                    ))
                    .splice(0, 7)}
            </div>
        );
    });
    return (
            <ul>{weekForecast}</ul>
    );
};

export default WeekForecast;
