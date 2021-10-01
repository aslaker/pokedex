import React from "react";
import { useHistory } from "react-router";
import { useGetPokemonQuery } from "../../api/pokemonApi";
import List from "../../components/List/List";
import Loading from "../../components/Loading/Loading";

const Pokemon = () => {
  const history = useHistory();
  const { data, isLoading } = useGetPokemonQuery(
    { limit: 20, page: 1 },
    { pollingInterval: 10000 }
  );

  const onPokemonSelect = (id: string) => {
    history.push(`/pokemon/${id}`);
  };

  return (
    <div className="w-full h-full overflow-y-scroll">
      {isLoading ? (
        <Loading />
      ) : (
        <List items={data?.results || []} onItemClick={onPokemonSelect} />
      )}
    </div>
  );
};

export default Pokemon;
