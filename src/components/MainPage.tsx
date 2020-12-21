import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import { setPage } from "../redux/actionCreators";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../components/spinner/Spiner";
import SinglePage from "./SinglePage";

const useStyles = makeStyles({
  pages: {
    margin: "1rem auto",
  },
});

export type PokemonType = {
  name: string;
  url: string;
};

type StateType = {
  list: PokemonType[];
  page: number;
};

type DisplayType = PokemonType[] | null;

const list = (state: StateType) => state.list;
const page = (state: StateType) => state.page;

const MainPage: React.FC = () => {
  const results = useSelector(list);
  const ind = useSelector(page);
  const classes = useStyles();
  const [display, setDisplay] = useState<DisplayType>();
  const dispatch = useDispatch();

  useEffect(() => {
    results
      ? setDisplay(results.slice(ind * 20, ind * 20 + 20))
      : setDisplay([]);
  }, [ind, results]);

  return (
    <>
      <Grid container spacing={2}>
        {display && <SinglePage pokemons={display} />}
        {results.length ? (
          <Pagination
            className={classes.pages}
            page={ind + 1}
            count={Math.ceil(results.length / 20)}
            color="primary"
            onChange={(event: object, page: number) => {
              dispatch(setPage(page - 1));
            }}
          />
        ) : (
          <Spinner />
        )}
      </Grid>
    </>
  );
};

export default MainPage;
