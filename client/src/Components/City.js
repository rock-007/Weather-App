import DailyForcast from "./DailyForcast";
import WeeklyForcast from "./WeeklyForcast";
//const city = {daily:null, forcast:null}
const City = ({ cities }) => {
    // const eachCity = cities.map((city, index) => {
    //     console.log(city);
    //     return <DailyForcast city={city.daily} key={index} />;
    // });
    const cityforcast = cities.map((city, index) => {
        console.log(city);

        return (
            <div>
                <h3>{city.daily.name}</h3>
                {city.forcast.list
                    .map((eachDay, index) => (
                        <WeeklyForcast
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
            <ul>{cityforcast}</ul>
        </div>
    );
};

export default City;
