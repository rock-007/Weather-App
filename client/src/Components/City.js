import DailyForecast from "./DailyForecast";
import WeeklyForecast from "./WeeklyForecast";
import './City.css';
//const city = {daily:null, forcast:null}

const City = ({cities}) => {
    // const eachCity = cities.map((city, index) => {
    //     console.log(city);
    //     return <DailyForcast city={city.daily} key={index} />;
    // });
    const cityforecast = cities.map((city) => {
        // console.log(city);

        return (
            <div class="city-card">
                <h3 id="city-name">{city.daily.name}</h3>
                {city.forecast.list
                    .map((eachDay, index) => (
                        <WeeklyForecast
                            main={eachDay.main}
                            visibility={eachDay.visibility}
                            wind={eachDay.wind}
                            day={index}
                            clouds={eachDay.clouds["all"]}
                            rain={eachDay.rain}
                            key={index}
                        />
                    ))
                    .splice(0, 7)}
            </div>
        );
    });
    return (
        <div>
            <ul>{cityforecast}</ul>
        </div>
    );
};

export default City;
