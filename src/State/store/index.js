import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig= {
    key: "main-root",
    storage,
}

const persistedReducer=persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware());

const Persistor=persistStore(store);

store.subscribe(() => console.log(store.getState()));

export{Persistor};
export default store;