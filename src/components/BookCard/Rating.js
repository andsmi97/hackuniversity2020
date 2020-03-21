import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

const BookRating = ({ rating, votersCount }) => {
  const classes = useStyles();
  console.log(rating);
  return (
    <div className={classes.root}>
      <Rating name="half-rating-read" value={rating} precision={0.1} readOnly />
      <Box ml={2}>
        {rating} ({votersCount})
      </Box>
    </div>
  );
};

export default BookRating;
