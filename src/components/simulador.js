import React, {useState}  from 'react';
import {makeStyles, Button} from '@material-ui/core';
import NumberFormat from 'react-number-format';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: 0,
    padding: 0,

  },
  toolbar: theme.mixins.toolbar,
  plazoFijo: {
    width: '200px',
    height:'200px',
    background:'red',
  },
  cuadro:{
    background: 'rgba(208, 214, 223,0.7)',
    margin:'20px auto',
    padding:'50px',
    width: '40%',
    border: '1px solid rgba(92, 90, 89,0.9) ',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',

  },
  elementos:{
    color: 'black',
    padding : '0px 50px',
    fontFamily: 'Arial',
    fontSize:'20px',
    display:'flex',
    justifyContent: 'space-between',
    
    
  },
  boton:{
    padding:'15px',
    margin:'auto',
    color: 'white',
    background: 'rgba(39, 76, 129,0.9)',
    '&:hover': {
      background: 'rgba(48, 101, 176,0.9)',
    },
  },

  inputEnd: {
    textAlign: 'center',
    height : '40px',
    marginTop : '9px',
    
  }
 

}))



const Simulador = () => {
  const classes = useStyles()

  const [count, setCount] = useState()
  const [porcentaje, setPorcentaje] = useState(30);
  const [resultado, setResultado] = useState(0);

  const [plazo, setPlazo] = useState();

  const interes = () =>{
    setResultado(count * (porcentaje / 365) / 100 * plazo)
  }
  

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}></div>
      <div className={classes.cuadro}>
        <div className={classes.elementos}>
          <p>Ingrese monto</p>
          <NumberFormat
            className={classes.inputEnd}
            type="text"
            value={count}
            placeholder="ingrese monto"
            onValueChange={(capital) => setCount(capital.value)}
            onBlur={interes}
            thousandSeparator={true}
             prefix={'$'}
            
          />          
        </div>
        <div className={classes.elementos}>
          <p>Ingrese plazo</p>
          <NumberFormat
            className={classes.inputEnd}
            type="text"
            value={plazo}
            placeholder="ingrese plazo"
            onChange={(event) => setPlazo(event.target.value)}
            onBlur={interes}
            thousandSeparator={false}

          />
          
        </div>
        <div className={classes.elementos}>
          <p>Interes</p>
          
          <p> {porcentaje} %</p>
        </div>
        <div className={classes.elementos}>
          <p><b>Total </b> </p>
         
          
         
          <p><b> <NumberFormat value={resultado} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/></b></p>
        </div>
        <Button variant="contained" className={classes.boton} onClick={interes}>Calcular interes</Button>
      </div>
    </div>
  )


}

export default Simulador;
