import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { downloadPokemons } from "./redux/actionCreators";
import MainPage from "./components/MainPage";
import Pokemon from "./components/Pokemon";
import Move from "./components/Move";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(179, 223, 248)",
    paddingTop: "1rem",
    paddingBottom: "2rem",
    height: "100%",
  },
});

const App: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(downloadPokemons());
  }, [dispatch]);

  return (
    <>
      <Container className={classes.root}>
        <BrowserRouter>
          <Switch>
            <Route path="/moves/:name">
              <Move />
            </Route>
            <Route path="/pokemons/:name">
              <Pokemon />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
