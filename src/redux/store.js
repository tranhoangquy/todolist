import { combineReducers, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["navigation"],
};

export const todoApp = combineReducers({
  items: rootReducer,
});

const pReducer = persistReducer(
  persistConfig,
  persistReducer(persistConfig, todoApp)
);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
