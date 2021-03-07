
import React from 'react';
import { makeStyles} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const errorUno = "No es posible realizar esta operacion. Por favor intente nuevamente mas tarde.";
const errorDos = "No es posible realizar esta operacion. Dirijase a nuestra sucursal mas cercana";

const estilos = makeStyles(theme => ({

  toolbar: theme.mixins.toolbar,
  botones:{
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-end',
   position: 'fixed',
   right:'0px',
   color:"#fff",
   
   
  },
  boton:{
    margin: '5px 0px',
    maxWidth: '200px',
    background:"rgba(7, 33, 70 , 0.6)",
    color: "white",
    padding:'20px',
    cursor: 'pointer',
    
    
  },
  link:{
    color: 'white',
    textDecoration: 'none',
    listStyle: 'none',
  }
   
}));

const PlazoFijo= () => {
  const classes = estilos()

  const notify = () => toast.info(errorUno, {
    position: toast.POSITION.TOP_CENTER
  });
  const notifyDos = () => toast.info(errorDos, {
    position: toast.POSITION.TOP_CENTER
  });
  const notifyTres = () => toast.info(errorDos, {
    position: toast.POSITION.TOP_CENTER
  });

  

  return (

    <div className={classes.botones}>
      <div className={classes.toolbar}></div>
      <button className={classes.boton}>
        <Link to="/simulador" className={classes.link}>Simula tu plazo fijo</Link>
      </button>
     
      <button className={classes.boton} onClick={notify}>Abri tu cuenta fondos</button>
      <button className={classes.boton} onClick={notifyDos}>Simula tu plazo fijo</button>
      <ToastContainer />
      
    </div>
  );
}


export default PlazoFijo;

