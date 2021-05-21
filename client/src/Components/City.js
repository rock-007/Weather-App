import Details from './Details';
//const city = {daily:null, forcast:null}
const City = ({cities}) => {
   
    const eachCity = cities.map((city, index) => {
        console.log(city)
        return <Details name={city.daily.name} key={index} />
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