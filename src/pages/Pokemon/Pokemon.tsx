import React from "react";
import { useHistory } from "react-router";
import { useGetPokemonQuery } from "../../api/pokemonApi";
import List from "../../components/List/List";

const Pokemon = () => {
  const history = useHistory();
  const { data } = useGetPokemonQuery({ limit: 5, page: 1 });

  const onPokemonSelect = (id: string) => {
    history.push(`/pokemon/${id}`);
  };

  return <List items={data?.results || []} onItemClick={onPokemonSelect} />;
};

export default Pokemon;
