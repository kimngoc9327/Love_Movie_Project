import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware());

const persistor = persistStore(store);

export { store, persistor };
