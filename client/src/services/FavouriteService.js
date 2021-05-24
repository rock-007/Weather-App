const baseURL = 'http://localhost:5000/api/favourites/'


export const getFavourites=()=> {
     return fetch(baseURL)
          .then(res => res.json())
          .then(result => result);
}

  export const postFavourite = (favourite) => {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(favourite),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => console.log(res));
  }



//   export const deleteFavourite = (id) => {
//     return fetch(baseURL + id, {
//       method: 'DELETE'
//     });
//   }
// };

// // export default FavouriteService;