import React from 'react'
import { makeStyles, Drawer, Divider} from '@material-ui/core';
import Listas from '../navegador/lista';

const drawerWidth = 240;

const estilos = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0,

  },
  drawerPaper: {
    width: 240,
    padding: '7px 0px'
  },
  toolbar: theme.mixins.toolbar,
  
}))


const Cajon = (props) => {
  const classes = estilos()

  return (
    <Drawer 
      className={classes.drawer}
      variant= {props.variant}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar}>
        
      </div>  
      <Divider/>
      <Listas />
      <Divider />
    </Drawer>



  )
}

export default Cajon