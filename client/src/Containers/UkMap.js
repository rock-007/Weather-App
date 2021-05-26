import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import React, { useState } from "react";

const UkMap = ({ cities }) => {
    const libraries = ["places"];

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.React_APP_Google_MAPS_API_KEY,
        libraries,
    });

    const options = {};

    const mapFunction = (lat1 = 53.472225, lng1 = -2.293502, zoom1 = 8) => {
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

    return (
        <>
            <div id="map">{cities !== [] ? result : mapFunction}</div>
        </>
    );
};

export default UkMap;
