import React from "react";
import { useParams } from "react-router";
import { useGetSinglePokemonQuery } from "../../api/pokemonApi";
import Loading from "../../components/Loading/Loading";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetSinglePokemonQuery({ id });
  return (
    <div className="flex flex-row w-full p-5 overflow-y-scroll bg-gray-50">
      {!data || isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-24 h-24">
            {data?.sprites.front_default && (
              <img src={data.sprites.front_default} alt={data.name} />
            )}
          </div>
          <div>
            <h1>{capitalizeFirstLetter(data.name)}</h1>
            <h2 className="text-sm">{data.weight} lbs</h2>
            <h2 className="text-sm">{data.height} ft</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
