import { configureStore, combineReducers } from "@reduxjs/toolkit"; // import reducers combiner
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist"; // import persisted reducer and persisted store
import storage from "redux-persist/lib/storage"; // import storage for localstorage

/* 
  Save the state in persistent storage so that even after a refresh, the data will remain intact.
  https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/

  Combine reducers
  https://redux.js.org/api/combinereducers

*/

// create a root reducer for all the reducers to combine them
const rootReducer = combineReducers({
  user: userReducer,
});

// persist reducer configuration
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

// create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // user: userReducer,
  // use the persisted reducer
  // prevent errors [ https://redux-toolkit.js.org/api/getDefaultMiddleware ]
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// export the persistedstore
export const persistor = persistStore(store);
