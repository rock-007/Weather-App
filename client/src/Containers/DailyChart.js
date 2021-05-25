import React, { useState } from "react";
import {
    WiThermometer,
    WiStrongWind,
    WiDaySunny,
    WiRain,
    WiDayShowers,
    WiDayCloudy,
} from "react-icons/wi";
import { BsGraphUp } from "react-icons/bs";
// import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Line } from "react-chartjs-2";







const DailyChart = function ({ daily }) {
    const [chartData, setChartData] = useState({
        labels: [
            `${daily[0]["dt_txt"].match(/\s([0-9]{2})/g)}:00 `,
            `${daily[4]["dt_txt"].match(/\s([0-9]{2})/g)}:00 `,
            `${daily[8]["dt_txt"].match(/\s([0-9]{2})/g)}:00 `,
            `${daily[12]["dt_txt"].match(/\s([0-9]{2})/g)}:00 `,
            `${daily[16]["dt_txt"].match(/\s([0-9]{2})/g)}:00 `,
            `${daily[20]["dt_txt"].match(/\s([0-9]{2})/g)}:00 `,
        ],
        datasets: [
            {
                label: "Temperature graph ℃",
                data: [
                    (daily[0]["main"]["temp"] - 273.15).toFixed(0),
                    (daily[4]["main"]["temp"] - 273.15).toFixed(0),
                    (daily[8]["main"]["temp"] - 273.15).toFixed(0),
                    (daily[12]["main"]["temp"] - 273.15).toFixed(0),
                    (daily[16]["main"]["temp"] - 273.15).toFixed(0),
                    (daily[20]["main"]["temp"] - 273.15).toFixed(0),
                ],
                backgroundColor: ["rgba(75,192,192,0.6)"],
                borderWidth: 4,
                // yAxisID: "y-axis-1",
            },
        ],
    });

    const options = {
        responsive: true,
        scales: {
            yAxes: [
                {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const averageTemperature = (daily) => {
        const average = daily.reduce((aver, eachHour) => {
            return eachHour["main"]["temp"] + aver;
        }, 0);

    };

    const averageWinds = (daily) => {};

    const weatherIcon = (daily) => {
        const result = averageTemperature(daily);
    };

    const windIcon = (daily) => {
        const result = averageWinds(daily);
    };
    return (
        <>
            {" "}
            <div>
                {weatherIcon(daily)}
                {windIcon(daily)}
                <Line data={chartData} options={options} />
            </div>
        </>
    );
};

export default DailyChart;
