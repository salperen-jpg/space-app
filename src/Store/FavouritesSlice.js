import { createSlice } from '@reduxjs/toolkit';

const FavouritesSlice = createSlice({
  name: 'Favourites',
  initialState: {
    favourites: [],
  },
  reducers: {
    addFavourite: (state, actions) => {
      const ship = actions.payload.ship;

      const favsCopy = [...state.favourites];

      const index = favsCopy.findIndex((fav) => fav.id === ship.id);
      if (index !== -1) {
        return;
      } else {
        favsCopy.push(ship);
      }

      state.favourites = favsCopy;
    },
    removeFavourite: (state, action) => {},
  },
});

// export const fetchFavourites = () => {
//     return (dispatch) => {
//         // do some async code

//         // get some result of the id we want to remove....

//         dispatch(FavouritesSlice.removeFavourite(result));
//     }
// }

export const FavouritesActions = FavouritesSlice.actions;
export default FavouritesSlice;
