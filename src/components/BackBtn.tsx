import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
  back: {
    position: 'fixed',
  }
}); 

const BackBtn: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Fab onClick={() => {history.goBack()}} size="small" className={classes.back} color="primary" aria-label="back">
      <ArrowBackIcon/>
      </Fab> 
    </>
  );
};

export default BackBtn;
