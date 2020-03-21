import React from 'react';
import Paper from '@material-ui/core/Paper';
import BookRating from './Rating';
import BookTags from '../BookTags/Component';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({
  list: {
    overflow: 'scroll',
    border: '5px solid black',
    height: '800px',
  },
  image: {},
  card: {
    maxWidth: 330,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
  },
  bottomWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
}));
const BookCard = ({ name, image, rating, tags, votersCount }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
      <img alt={`${name}`} src={image} width={200} />
      <div>
        <h2 className={classes.header}>{name}</h2>
      </div>
      <div className={classes.bottomWrapper}>
        <BookTags tags={tags} />
        <BookRating rating={rating} votersCount={votersCount} />
      </div>
    </Paper>
  );
};

export default BookCard;
