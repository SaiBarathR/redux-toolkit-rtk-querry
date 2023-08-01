import { configureStore } from "@reduxjs/toolkit";
import sampleSlice from "../slices/sampleSlice";
import { pokemonApi } from "../service/pokemon";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
    reducer: {
        sampleSlice,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware)
})

setupListeners(store.dispatch)