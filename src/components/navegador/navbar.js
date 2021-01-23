import React from 'react';
import {makeStyles, AppBar, Toolbar, Typography, IconButton, Button }from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const estilos = makeStyles(theme => ({
  navegador: {
    background: '#072146',
    padding: '4px 0px',
  },
  menuButton: {
    marginRight: theme.spacing(1),
    
  },
  
  title: {
    flexGrow: 1
  }
}))


const Navbar = (props) => {
  const classes = estilos()

  return (
    
    <AppBar className={classes.navegador}>
      <Toolbar>
        <IconButton 
          onClick={() => props.accionAbrir()}  
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu">
          <MenuIcon/>
        </IconButton>
        
        <Typography variant='h6' className={classes.title}>
          Menu
        </Typography>
        <Button variant='text' color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  
  )
}

export default Navbar;