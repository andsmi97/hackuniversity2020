import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    padding: theme.spacing(0.5),
    width: '100%',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
const BookTags = ({ tags }) => {
  const classes = useStyles();
  const top3Tags = tags.filter((tag, index) => index < 3);
  return (
    <div className={classes.root}>
      {top3Tags.map((tag, index) => {
        return (
          <Chip
            key={index}
            label={tag}
            color="primary"
            size="small"
            className={classes.chip}
          />
        );
      })}
    </div>
  );
};

export default BookTags;
