// import DailyForecast from "./DailyForecast";
import WeekForecast from "./WeekForecast";
import "./City.css";
import DailyChart from "../Containers/DailyChart";
//const city = {daily:null, forcast:null}

const City = ({ cities }) => {
    // const eachCity = cities.map((city, index) => {
    //     console.log(city);
    //     return <DailyForcast city={city.daily} key={index} />;
    // });
    const cityforecast = cities.map((city) => {
        console.log(city.forecast);

        return (
            <div class="city-card">
                <h3 id="city-name">{city.daily.city.name}</h3>
                    <DailyChart daily={city.daily.list} />
                <WeekForecast weekForecast={city.forecast.list} />
                {/* {city.forecast.list
                    .map((eachDay, index) => (
                        <WeeklyForecast
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
                    .splice(0, 7)} */}
            </div>
        );
    });
    return <ul>{cityforecast}</ul>;
};

export default City;
