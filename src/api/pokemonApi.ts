import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon } from "../types/Pokemon";

interface ApiListResponse {
  count: number;
  next: string;
  previous: string;
  results: { name: string; url: string }[];
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getPokemon: builder.query<ApiListResponse, { limit: number; page: number }>(
      {
        query: ({ limit, page }) =>
          `/pokemon?limit=${limit}&offset=${page * limit}`,
      }
    ),
    getSinglePokemon: builder.query<Pokemon, { id: string }>({
      query: ({ id }) => `/pokemon/${id}`,
    }),
    getMoves: builder.query<ApiListResponse, { limit: number; page: number }>({
      query: ({ limit, page }) => `/move?limit=${limit}&offset=${page * limit}`,
    }),
  }),
});

export const {
  useGetPokemonQuery,
  useGetMovesQuery,
  useGetSinglePokemonQuery,
} = pokemonApi;
