import React from "react";
import { useHistory } from "react-router";
import { useGetPokemonQuery } from "../../api/pokemonApi";
import List from "../../components/List/List";

const Pokemon = () => {
  const history = useHistory();
  const { data } = useGetPokemonQuery({ limit: 20, page: 1 });

  const onPokemonSelect = (id: string) => {
    history.push(`/pokemon/${id}`);
  };

  return (
    <div className="w-full h-full overflow-y-scroll">
      <List items={data?.results || []} onItemClick={onPokemonSelect} />
    </div>
  );
};

export default Pokemon;
