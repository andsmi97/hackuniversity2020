import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 16,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Искать книги"
          inputProps={{ 'aria-label': 'search books' }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="tune"
        >
          <TuneIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
