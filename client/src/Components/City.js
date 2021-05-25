import WeeklyForecast from "./WeeklyForecast";
import "./WeekForecast.css";
import DailyChart from "../Containers/DailyChart";

<<<<<<< HEAD
const City = ({ cities }) => {
  // const eachCity = cities.map((city, index) => {
  //     console.log(city);
  //     return <DailyForcast city={city.daily} key={index} />;
  // });
  const cityforecast = cities.map((city) => {
    console.log(city.forecast);

    return (
      <div className="city-card">
        <h3 id="city-name">{city.daily.city.name}</h3>
        <DailyChart daily={city.daily.list} />
        {city.forecast.list
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
          .splice(0, 7)}{" "}
      </div>
    );
  });
  return <ul>{cityforecast}</ul>;
=======

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
>>>>>>> f3f46f8942e1f455529e83c9fa83ee04862ec39c
};

export default City;
