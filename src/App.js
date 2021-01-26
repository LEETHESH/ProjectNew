import TableNumber from "./Resturents/Form";
import Card from "./Resturents/Card";
import React from 'react';
import Tables from "./Resturents/Table";
import SearchBar from "./Resturents/Search"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SearchBar /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><Card /> </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><Tables /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
{/* <Card /> */}