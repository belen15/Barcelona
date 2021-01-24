import React from 'react';
import {Box, Typography, makeStyles} from '@material-ui/core';

import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import HelpIcon from '@material-ui/icons/Help';
import LanguageIcon from '@material-ui/icons/Language';

const estilos = makeStyles(theme => ({
  ayuda:{
    margin: '0px',
    padding: '0px',
  },
  footerButton: {
    marginRight: theme.spacing(2),
    
  },
  footerLarge:{
    padding: '0px',
    listStyle: 'none',
    display: 'table',
    justifyContent: 'space-around',
    width : '100%',
    textAlign: 'center',
  },
  footerLargeItem:{
    borderLeft: '1px solid #f2f2f2',
    display: 'table-cell',
    width: '25%',   
    fontSize:'22px',
    padding: ' 0px 40px', 
    
  },
  footerLargeLink:{
    position: 'relative',
    top: '4px',
    color: '#f2f2f2',
    fontSize: '14px',
    textAlign: 'center',
   },
}))


const Footer = () => {
  const classes= estilos()

  return (
    <Box 
      component='footer'
      color='#f2f2f2'
      bgcolor='rgba(92, 90, 89,0.6)'
      py={0}
      position='fixed'
      width='100%'
      display='flex'
      bottom='0px'
      justifyContent='space-around'
    >
      <ul className={classes.footerLarge}>
        <li className={classes.footerLargeItem}>
          <div>
            <PhoneIcon className={classes.footerButton} />
            <Typography variant='p'>
              Contactenos
            </Typography>
          </div>
          <a href='#' className={classes.footerLargeLink}>Centro de Atencion al cliente</a>
        </li>
        <li className={classes.footerLargeItem}>
          <div >
            <RoomIcon className={classes.footerButton} />
            <Typography variant='p'>
              Sucursales
            </Typography>
          </div>
          <a href='#' className={classes.footerLargeLink}>Encontra tu sucursal mas cercana</a>
        </li>
        <li className={classes.footerLargeItem}>
          <div >
            <HelpIcon className={classes.footerButton} />
            <Typography variant='p'>
              Preguntas frecuentes
            </Typography>
          </div>
          <a href='#' className={classes.footerLargeLink}>operaciones que podes realizar dentro de Online Banking</a>
        </li>
        <li className={classes.footerLargeItem}>
          <div >
            <LanguageIcon className={classes.footerButton} />
            <Typography variant='p'>
              Acerca de
            </Typography>
          </div>
          <a href='#' className={classes.footerLargeLink} >Satisfacemos todas tus necesidades en todo el país </a>
        </li>
      </ul>
     
    </Box>
  )
}

export default Footer