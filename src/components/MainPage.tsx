import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonImg from "./PokemonImg";
import Grid from "@material-ui/core/Grid";
import Pagination from '@material-ui/lab/Pagination';
import {setPage} from '../redux/actionCreators';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pages: {
   margin: '1rem auto',
   
  },
});


const MainPage: React.FC = () => {
  const results: any = useSelector<any>((state) => state.list.results);
  const ind: any = useSelector<any>((state) => state.page);
  const classes = useStyles();
  const [display, setDisplay] = useState([]);
  const dispatch = useDispatch();
  
 useEffect(() => {
   results ? setDisplay(results.slice(ind*20, ind*20+20)) : setDisplay([]) 
 }, [ind, results])

  return (
    <>
      <Grid container spacing={2}>
        {results &&
          display.map((el: any, i: number) => (
            <Grid key={i} item xs={3}>
              <PokemonImg name={el.name} url={el.url.slice(34)} />
            </Grid>
          ))}
{results && <Pagination className={classes.pages} page={ind+1} count={Math.ceil(results.length/20)} color="primary" onChange={(event: object, page: number) => {
      dispatch(setPage(page-1))}} />}
      </Grid>
      
    </>
  );
};

export default MainPage;
