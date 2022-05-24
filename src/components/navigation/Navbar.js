import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import {
  AppBar,
  Toolbar,
  ButtonGroup,
  makeStyles,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  },
  appbar:{
    backgroundColor:'#1f3d7a'
  },
  navlink:{
    color:'white',

  },
  
}));
const active= {
  fontWeight:'bolder',
  textDecoration: 'underline' 
}

export const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appbar}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, justifyContent:'center', display: { xs: 'none', md: 'flex' } }}>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button variant='text' component={NavLink} exact to="/" activeStyle={active} className={classes.navlink}>
                Home
              </Button>
              <Button component={NavLink} exact to="/about" activeStyle={active} className={classes.navlink}>
                About
              </Button>
              <Button component={NavLink} exact to="/leagueplayers" activeStyle={active} className={classes.navlink}>
                Teams and Players
              </Button>
              <Button component={NavLink} exact to="/choosemyteam" activeStyle={active} className={classes.navlink}>
                Choose My Team
              </Button>
              <Button component={NavLink} exact to="/blog" activeStyle={active} className={classes.navlink}>
                Blog
              </Button>
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>
  )
}
