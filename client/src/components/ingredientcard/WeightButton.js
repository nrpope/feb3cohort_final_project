import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const lowCheck = (e) => e.weight.toLowerCase();
const useStyles = makeStyles({
  root: {
    fontSize: '9px',
    background: (props) =>
      lowCheck(props) === 'heavy'
        ? 'rgb(255, 152, 0)'
        : lowCheck(props) === 'medium'
          ? 'rgb(255, 217, 91)'
          : lowCheck(props) === 'light'
            ? 'rgb(255, 233, 125)'
            : lowCheck(props) === 'moderate' ? 'rgb(255, 183, 77)' : 'rgb(255, 233, 125)',
    minWidth: '9vw',
    minHeight: '3.2vh',
    marginLeft: '20px',
    color: 'rgba(0, 0, 0, 0)',
    '&:hover': {
      color: 'rgba(0, 0, 0, 0.9)',
    },
  },
});

export default function WeightButton(props) {
  const { weight } = props;
  const classes = useStyles(props);
  return (
    <div>
      <Button disableRipple="true" className={classes.root}>
        {weight}
      </Button>
    </div>
  );
}
