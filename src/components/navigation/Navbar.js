import React from "react";
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
  Typography,
  makeStyles,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  customHeight: {
    minHeight: 40
  },
  offset: theme.mixins.toolbar
}));
const active= {
  fontWeight:'bolder',
  color:'red'
}
export const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.customHeight}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button component={NavLink} exact to="/" activeStyle={active}>
              Home
            </Button>
            <Button component={NavLink} exact to="/about" activeStyle={active}>
              About
            </Button>
            <Button component={NavLink} exact to="/leagueplayers" activeStyle={active}>
              Teams and Players
            </Button>
            <Button component={NavLink} exact to="/choosemyteam" activeStyle={active}>
              Choose My Team
            </Button>
            <Button component={NavLink} exact to="/blog" activeStyle={active}>
              Blog
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
  )
}
