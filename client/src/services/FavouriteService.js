const baseURL = 'http://localhost:5000/api/favourites/'


     export const getFavourites=()=> {
        return fetch(baseURL)
            .then(res => res.json())
            .then(result => result);
     }

//   export const addFavourite = (favourite) => {
//     return fetch(baseURL, {
//       method: 'POST',
//       body: JSON.stringify(favourite),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => res.json());
//   }



//   export const deleteFavourite = (id) => {
//     return fetch(baseURL + id, {
//       method: 'DELETE'
//     });
//   }
// };

// // export default FavouriteService;