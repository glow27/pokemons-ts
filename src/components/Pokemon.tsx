import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { downloadOnePokemon } from "../redux/actionCreators";
import { Link } from "react-router-dom";
import { Container, CardMedia, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import BackBtn from './BackBtn';


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  media: {
    height: "30vw",
    width: "30vw",
  },
  description: {
    width: "80vw",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    margin: 0,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
});

const Pokemon: React.FC = () => {
  const { name } = useParams<any>();
  const dispatch = useDispatch();
  const pokemon: any = useSelector<any>((state) => state.current);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    dispatch(downloadOnePokemon(name));
  }, [name, dispatch]);

  return (
    <>
    <BackBtn/>
      <Container className={classes.root}>
      
        {pokemon.name && (
          <>
            <h1 className={classes.text}>{pokemon.name.toUpperCase()}</h1>
            <p>
              <b>Type:</b> {pokemon.types[0].type.name}
            </p>
            <div className={classes.description}>
              <CardMedia
                className={classes.media}
                image={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                title={pokemon.name}
              />
              <ul>
                <b>Stats</b>
                {pokemon.stats.map((el: any, i: number) => (
                  <li key={i}>
                    {el.stat.name}: {el.base_stat}
                  </li>
                ))}
              </ul>
            </div>
            <h3>Abilities:</h3>
            <Grid container spacing={2}>
              {pokemon.moves.map((el: any, i: number) => (
                <Grid key={i} item xs={3}>
                  {bull}
                  <Link to={`/moves/${el.move.name}`} key={i}>
                    {el.move.name}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default Pokemon;
