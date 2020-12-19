import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import LazyLoad from "react-lazyload";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(208, 235, 250)",
  },
  media: {
    height: "20vw",
    width: "20vw",
    margin: "0.3rem auto",
  },
  load: {
    height: "20vw",
    width: "20vw",
    margin: "0.3rem auto",
    filter: "blur(25px)",
  },
});

type Props = {
  url: string;
  name: string;
};

const PokemonImg: React.FC<Props> = ({ url, name }) => {
  const id = url.slice(0, url.length - 1);
  const classes = useStyles();
  const [load, setLoad] = useState(false);

  return (
    <Link to={`/pokemons/${name}`}>
      <Card className={classes.root}>
        <LazyLoad>
          <CardMedia
            component="img"
            className={load ? classes.media : classes.load}
            image={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            title={name}
            onLoad={() => setLoad(true)}
          />
        </LazyLoad>
      </Card>
    </Link>
  );
};

export default PokemonImg;
