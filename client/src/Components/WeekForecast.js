import WeekForecastDay from "./WeekForecastDay";
import './WeekForecast.css';

const WeekForecast = ({weekForecast}) => {
    if (weekForecast.length === 0){return <p>Loading</p>}
    console.log(weekForecast)
    const longForecast = weekForecast.splice(0, 7)
    const week = longForecast.map((eachDay, index) => (
                <div class="city-card">                
                    <h3 id="city-name">{eachDay.name}</h3>
                    <WeekForecastDay
                        main={eachDay.main}
                        eachday={eachDay}
                        visibility={eachDay.visibility}
                        wind={eachDay.wind}
                        day={index}
                        clouds={eachDay.clouds}
                        rain={eachDay.rain}
                        key={index}
                    />
                </div>))
            
    return (
            <ul>{week}</ul>
    );
};

export default WeekForecast;
