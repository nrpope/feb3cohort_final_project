import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

//updated and removed hambuger
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    //Notes can't use background color hexcode for some reason, so rgb is easier to do then figuring what it do.
    // create Objects to apply colors to components
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: '114px',

    backgroundColor: 'rgb(255, 138, 80)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'inline-flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  icon: {
    width: '20%',
    minWidth: '29%',
  },
  searchName: {
    fontSize: '0.675rem',
    width: '100%',
    padding: '8px 8px 8px 0px',
    transition: 'width 300ms cubic- bezier(0.4, 0, 0.2, 1) 0ms',
    paddingLeft: 'calc(1em + 32px)',
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const [ searchTerm, setSearchTerm ] = useState('');

  const { onClick } = props;

  function clickHandler(e) {
    onClick(e);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menuBar}>
        <img src="https://puu.sh/FxjBE/40abb00f04.png" className={classes.icon} alt="icon" />
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              action="/request"
              method="GET"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <Button className={classes.searchName} onClick={(e) => clickHandler(searchTerm)}>
              Search
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
