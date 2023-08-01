import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (page) => `pokemon?offset=${page}&limit=20`,
        }),
        
        newPokemonByName: builder.mutation({
            query: (page) => ({
                url: `pokemon?offset=${page}&limit=20`,
                method: "GET"
            }),
        }),
    }),
})

export const { useGetPokemonByNameQuery, useNewPokemonByNameMutation } = pokemonApi