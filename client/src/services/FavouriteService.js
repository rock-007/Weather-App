const baseURL = "/api/favourites/";
// http://lit-taiga-41856.herokuapp.com/
export const getFavourites = () => {
    return fetch(baseURL)
        .then((res) => res.json())
        .then((result) => result);
};

export const postFavourite = (favouriteCity) => {
    console.log(favouriteCity);
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify({ name: favouriteCity }),
        headers: {
            "Content-Type": "application/json",
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
