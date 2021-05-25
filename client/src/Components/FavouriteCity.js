import DailyForecast from "../components/DailyForecast";

const FavouriteList = ({favourites, deleteFavourite}) => {
    const favouriteCities = favourites.map((favourite, index) => {
        return <Favourite
        key={favourit._id}
        favourite={favourite}
        deleteFavourite={deleteFavourite}
        />
    });

    return(
        <section id="favourites">
        <h2>Favourite Cities</h2>
        <div>
            {favouriteCities}
        </div>
        </section>
    )

    
    const cityforecast = cities.map((city, index) => {


        return (
            <div className="fav-city-card" key={index}>
                <h3 id="city-name">{city.daily.name}</h3>
                
                {city.daily.list
                    .map((eachDay, index) => (<DailyForecast
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
                    .splice(0, 7)}
            </div>
        );
    });
    return (
            <ul>{cityforecast}</ul>
    );

};

export default FavouriteList;

