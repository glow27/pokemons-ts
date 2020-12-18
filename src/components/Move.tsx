import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { downloadMove } from '../redux/actionCreators';
import { Box, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import BackBtn from './BackBtn';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Move: React.FC = () => {
  const { name } = useParams<any>();
  const dispatch = useDispatch();
  const move: any = useSelector<any>((state) => state.move);
  const classes = useStyles();

  useEffect(() => {
    dispatch(downloadMove(name));
  }, [name, dispatch]);

  return (
    <>
    <BackBtn/>
      {move.name && (
        <Box className={classes.root}>
          <Typography variant="h3" gutterBottom>
            {move.name.toUpperCase()}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {move.flavor_text_entries[0].flavor_text}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Move;
