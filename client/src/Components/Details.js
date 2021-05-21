const Details = ({ city, forcast }) => {
    console.log(forcast["list"]);

    // To Do can use a seperate componenet to dispaly forcast using .map method
    return (
        <div>
            <h2>{city.name}</h2>
            <div>
                <h4>Todays weather</h4>
                <li>
                    description: {city.weather[0]["description"]}, Temperature:
                    {(city.main.temp - 273.15).toFixed(2)} ℃
                </li>
            </div>
            <div>
                <h4>Weather Forcast for next seven days</h4>
                <h5> Day 1</h5>
                <li>
                    Temperature:{" "}
                    {(forcast["list"][0]["main"]["temp"] - 273.15).toFixed(2)},
                    rain:
                    {forcast["list"][0]["rain"]["3h"]}
                </li>
                <h5> Day 2</h5>
                <li>
                    Temperature:{" "}
                    {(forcast["list"][1]["main"]["temp"] - 273.15).toFixed(2)},
                    rain:
                    {forcast["list"][1]["rain"]["3h"]}
                </li>
                <h5> Day 3</h5>
                <li>
                    Temperature:{" "}
                    {(forcast["list"][2]["main"]["temp"] - 273.15).toFixed(2)},
                    rain:
                    {forcast["list"][2]["rain"]["3h"]}
                </li>
            </div>
        </div>
    );
};

export default Details;
