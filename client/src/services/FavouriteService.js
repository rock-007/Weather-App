const baseURL = "http://localhost:5000/api/favourites/";

export const getFavourites = () => {
  return fetch(baseURL)
    .then((res) => res.json())
    .then((result) => result);
};

export const postFavourite = (favouriteCity) => {
<<<<<<< HEAD
  console.log(favouriteCity);
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify({ name: favouriteCity }),
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  }).then((res) => res);
=======
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify({ name: favouriteCity }),
        headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
    }).then((res) => res);
>>>>>>> f3f46f8942e1f455529e83c9fa83ee04862ec39c
};

export const deleteFavourite = (city) => {
  return fetch(baseURL + city, {
    method: "DELETE",
  });
};
// };


