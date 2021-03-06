import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import BackBtn from "./BackBtn";
import Spinner from "./spinner/Spiner";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

type ParamsType = {
  name: string;
};

type MoveType = {
  name: string;
  flavor_text_entries: any[];
};

const Move: React.FC = () => {
  const { name } = useParams<ParamsType>();
  const [move, setMove] = useState<MoveType | null>();
  const classes = useStyles();

  useEffect(() => {
    (async function () {
      const result = await (
        await fetch(`https://pokeapi.co/api/v2/move/${name}`)
      ).json();
      setMove(result);
    })();
  }, [name]);

  return (
    <>
      <BackBtn />
      <Box className={classes.root}>
        {move ? (
          <>
            <Typography variant="h3" gutterBottom>
              {move.name.toUpperCase()}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {move.flavor_text_entries[0].flavor_text}
            </Typography>
          </>
        ) : (
          <Spinner />
        )}
      </Box>
    </>
  );
};

export default Move;
