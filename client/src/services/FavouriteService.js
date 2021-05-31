const baseURL = "/api/favourites";
export const getFavourites = () => {
    return fetch("/api/favourites", {
        method: "GET",
        headers: {
            // "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log(result);
            return result;
        });
};

export const postFavourite = (favouriteCity) => {
    console.log(favouriteCity);
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify({ name: favouriteCity }),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
    }).then((res) => res);
};

export const deleteFavourite = (city) => {
    const fullURL = baseURL + city.toLowerCase();

    return fetch(fullURL, {
        method: "DELETE",
    });
};
