import React from 'react';
import {
  Hidden,
  makeStyles
} from '@material-ui/core';
import Cajon from './cajon/cajon.js';
import Navbar from './navegador/navbar.js';
import Footer from './footer';
import PlazoFijo from './plazofijo.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Simulador from './simulador.js';


const useStyles = makeStyles(theme => ({
  root : {
    display: 'flex',
    margin: 0,
    padding: 0,

  },
  toolbar : theme.mixins.toolbar,
  content : {
    flexGrow: 1,
    backgroundColor: theme.palette.background.transparent,
    padding: theme.spacing(0),
    
  },
 

}))


const Contenedor = () => {
  const classes = useStyles()
  const [abrir, setAbrir] = React.useState(false)
  const accionAbrir =  () => {
    setAbrir(!abrir)
  }

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Navbar accionAbrir={accionAbrir} />
      
        <Hidden xlUp>
          <Cajon
            variant="temporary"
            open={abrir}
            onClose= {accionAbrir}
          />

        </Hidden> 
        
        <div className={classes.content}>
          <div className={classes.toolbar}></div>
          <Switch>
            <Route path="/simulador">
              <PlazoFijo />
              <Simulador />
            </Route>
            <Route path="/">
              <PlazoFijo />
            </Route>
          </Switch>
          <Footer  />
        </div>
      </BrowserRouter>
    </div>


  )
}

export default Contenedor 
