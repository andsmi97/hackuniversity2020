import React from 'react';

import BookCard from '../BookCard/Component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({
  grid: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
const BooksList = ({ books }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="stretch"
      spacing={3}
      style={{
        margin: 0,
        width: '100%',
      }}
    >
      {books.map(({ id, ...rest }) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2}
            className={classes.test}
            key={id}
          >
            <BookCard id={id} {...rest} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BooksList;
