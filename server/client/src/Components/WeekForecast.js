// import WeekForecastDay from "./WeekForecastDay";
// import "./WeekForecast.css";

// const WeekForecast = ({ weekForecast }) => {
//   if (weekForecast.length === 0) {
//     return <p>Loading</p>;
//   }
//   const longForecast = weekForecast.splice(0, 7);

//   const week = longForecast.map((eachDay, index) => (
//     <div class="city-card" class="flex-grid2">
//       <p id="city-name">{eachDay.name}</p>
//       <WeekForecastDay
//         key={index}
//         main={eachDay.main}
//         eachday={eachDay}
//         visibility={eachDay.visibility}
//         wind={eachDay.wind}
//         day={index}
//         clouds={eachDay.clouds}
//         rain={eachDay.rain}
//       />
//     </div>
//   ));

//   return <ul>{week}</ul>;
// };

// export default WeekForecast;
