
import React from 'react';
import { makeStyles} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const errorUno = "No es posible realizar esta operacion. Por favor intente nuevamente mas tarde.";
const errorDos = "No es posible realizar esta operacion. Dirijase a nuestra sucursal mas cercana";

const estilos = makeStyles(theme => ({

  toolbar: theme.mixins.toolbar,
  botones:{
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-end',
   
   
  },
  boton:{
    margin: '5px 0px',
    maxWidth: '200px',
    background:"rgba(7, 33, 70 , 0.6)",
    color: "#fff",
    padding:'20px',
    cursor: 'pointer',
  },
   
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
      
      <button className={classes.boton} onClick={notify}>Simula tu plazo fijo</button>
      <button className={classes.boton} onClick={notifyDos}>Abri tu cuenta fondos</button>
      <button className={classes.boton} onClick={notifyTres}>Simula tu plazo fijo</button>
      <ToastContainer />
      
    </div>
  );
}


export default PlazoFijo;

