import { configureStore } from '@reduxjs/toolkit';

import FavouritesSlice from './FavouritesSlice';

const Store = configureStore({
  reducer: {
    favs: FavouritesSlice.reducer,
  },
});

export default Store;
