import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import likeReducer from "./LikeSlice";
import userReducer from "./UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["like", "user"],
};

const rootReducer = combineReducers({
  like: likeReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default { store, persistor };
