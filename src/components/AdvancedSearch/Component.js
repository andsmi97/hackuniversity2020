import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import TuneIcon from '@material-ui/icons/Tune';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 607,
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  search: {
    width: '100%',
    marginBottom: 16,
  },
  panel: {
    minWidth: 607,
  },
  detailWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
  },
}));

const SimpleExpansionPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <ExpansionPanel className={classes.panel}>
          <ExpansionPanelSummary
            expandIcon={<TuneIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Расширенный поиск
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.detailWrapper}>
              <TextField
                label="Умный поиск"
                placeholder="Например: Хочу стать блоггером, что почитать?"
                multiline
                rows="4"
                className={classes.search}
                variant="filled"
              />

              <TextField
                label="Название"
                placeholder="Карьера программиста"
                className={classes.search}
                variant="filled"
              />
              <TextField
                label="Жанры"
                placeholder="Детектив"
                className={classes.search}
                variant="filled"
              />
              <Button variant="contained" color="primary">
                Найти
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
};

export default SimpleExpansionPanel;
