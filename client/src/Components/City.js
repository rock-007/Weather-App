import WeeklyForecast from "./WeeklyForecast";
import "./City.css";
import DailyChart from "../Containers/DailyChart";

const City = ({ cities }) => {
    if (cities.length === 0) {
        return <p>Loading</p>;
    }
    console.log(cities);
    const cityForecast = cities.map((city) => {
        
        
        return (
            <div className="city-card">
                <h3 id="city-name">{city.daily.city.name}</h3>
                <DailyChart className="daily-chart" daily={city.daily.list} />
                {city.forecast.list
                    .map((eachDay, index) => (
                        <WeeklyForecast
                            key={index}
                            main={eachDay.main}
                            eachday={eachDay}
                            visibility={eachDay.visibility}
                            wind={eachDay.wind}
                            day={index}
                            clouds={eachDay["clouds"]}
                            rain={eachDay.rain}
                        />
                    ))
                    .splice(0, 7)}{" "}
            </div>
        );
        
    });
    return <ul>{cityForecast}</ul>;
};

export default City;
