const baseURL = "http://localhost:5000/api/favourites/";

export const getFavourites = () => {
    return fetch(baseURL)
        .then((res) => res.json())
        .then((result) => result);
};

export const postFavourite = (favouriteCity) => {
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify({ name: favouriteCity }),
        headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
    }).then((res) => res);
};

//   export const deleteFavourite = (id) => {
//     return fetch(baseURL + id, {
//       method: 'DELETE'
//     });
//   }
// };


