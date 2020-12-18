import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(208, 235, 250)",
  },
  media: {
    height: "20vw",
    width: "20vw",
    margin: "0.3rem auto",
  },
});

type Props = {
  url: string;
  name: string;
};

const PokemonImg: React.FC<Props> = ({ url, name }) => {
  const id = url.slice(0, url.length - 1);
  const classes = useStyles();

  return (
    <Link to={`/pokemons/${name}`}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          title={name}
        />
      </Card>
    </Link>
  );
};

export default PokemonImg;
