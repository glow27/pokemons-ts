import React from "react";
import PokemonImg from "./PokemonImg";
import Grid from "@material-ui/core/Grid";

type PokemonType = {
  name: string;
  url: string;
};

type Props = {
  pokemons: PokemonType[];
};

const SinglePage: React.FC<Props> = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((el: PokemonType, i: number) => (
        <Grid key={i} item xs={3}>
          <PokemonImg name={el.name} url={el.url.slice(34)} />
        </Grid>
      ))}
    </>
  );
};

export default SinglePage;
