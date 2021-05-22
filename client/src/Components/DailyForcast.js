const DailyForcast = ({ city, forcast }) => {
    //console.log(forcast["list"]);

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
        </div>
    );
};

export default DailyForcast;
//Note: I dont think we need the daily forcast as all the info is avaiable in the weekly forcast so not using this component
