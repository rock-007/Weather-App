import Details from './Details';

const City = ({cities}) => {
    const eachCity = cities.map((city, index) => {
        return <Details name={city.name} key={index} />
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