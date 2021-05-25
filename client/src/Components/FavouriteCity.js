import {
  WiThermometer,
  WiStrongWind,
  WiDaySunny,
  WiRain,
  WiDayShowers,
  WiDayCloudy,
} from "react-icons/wi";

const FavouriteCity = ({ eachCity }) => {
  // let  clouds= eachCity["clouds"]

  // console.log(rain)
  // let getRainCount = function (eachCity[]) {
  //     let rainCount = 0
  //     for (let rainNumber in rain)
  //         if (rainNumber === '3h')
  //             rainCount = rain['3h']
  //         else if (rainNumber === '1h')
  //             rainCount = rain['1h']
  //     return rainCount
  // }

  let displayClouds = function (clouds) {
    console.log(clouds);
    if (clouds > 41) {
      return <WiDayCloudy class="icon" />;
    } else if (clouds <= 41) {
      return <WiDaySunny class="icon" />;
    }
  };
  console.log("ddf", eachCity);

  return (
    <>
      <ul id="details-list2">
        <li>{eachCity["name"]}</li>

        <div id="sunny-cloudy">
          <li>{displayClouds(eachCity["clouds"]["all"])} </li>
          <li>
            {" "}
            <div id="temperature">
              <WiThermometer class="icon" />
              <div id="min-max-temp">
                Max: {(eachCity["main"]["temp_max"] - 273.15).toFixed(0)} ℃{" "}
                <br /> Min: {(eachCity["main"]["temp_max"] - 273.15).toFixed(0)}{" "}
                ℃
              </div>
            </div>
          </li>
        </div>
      </ul>
    </>
  );
};

export default FavouriteCity;
