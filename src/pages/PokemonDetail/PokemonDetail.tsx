import React from "react";
import { useParams } from "react-router";
import { useGetSinglePokemonQuery } from "../../api/pokemonApi";

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetSinglePokemonQuery({ id });
  return <p>{JSON.stringify(data)}</p>;
};

export default PokemonDetail;
