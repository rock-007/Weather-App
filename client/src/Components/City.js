import Details from './Details';
//const city = {daily:null, forcast:null}
const City = ({cities}) => {
   
    const eachCity = cities.map((city, index) => {
        console.log(city)
        return <Details city={city.daily} forcast = {city.forcast}key={index} />
    })

    return(
        <div>
            <ul>
              {eachCity}
            </ul>
        </div>
    )
}

export default City;