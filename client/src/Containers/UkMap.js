import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import MapStyles from '../Components/MapStyles';

const UkMap = ({ cities }) => {
    const libraries = ["places"];

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.React_APP_Google_MAPS_API_KEY,
        libraries,
    });
    // console.log(cities[0] === Object);
    console.log("xxx", cities);
    useEffect(() => {
        mapFunction();
    }, []);
    const options = {};
    const mapFunction = (lat1 = 53.472225, lng1 = -2.293502, zoom1 = 6) => {
        console.log("33");
        let center = {
            lat: lat1,
            lng: lng1,
        };

        const containerStyle = {
            position: "static",
            margin: "34px",
            width: "60vw",
            height: "60vh",
            
        };

        return (
            <GoogleMap
                mapContainerStyle={containerStyle}
                styles={MapStyles.styles}
                zoom={zoom1}
                center={center}
                options={options}
                // onClick={handleMap}
            />
        );
    };
    let result = cities.map((eachCity) => {
        console.log("city", eachCity["forecast"]["city"]["coord"]["lon"]);
        const lat1 = eachCity["forecast"]["city"]["coord"]["lat"];
        const lng1 = eachCity["forecast"]["city"]["coord"]["lon"];
        const zoom1 = 14;

        return mapFunction(lat1, lng1, zoom1);
    });

    const defaultMap = mapFunction();

    return (
        <>
            <div id="map">
                {isLoaded == true
                    ? typeof cities[0] === "undefined"
                        ? mapFunction()
                        : result
                    : null}
            </div>
        </>
    );
};

export default UkMap;
