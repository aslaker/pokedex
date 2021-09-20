import React from "react";
import { useGetMovesQuery } from "../../api/pokemonApi";
import List from "../../components/List/List";

const Moves = () => {
  const { data } = useGetMovesQuery({ limit: 5, page: 1 });
  return <List items={data?.results || []} />;
};

export default Moves;
