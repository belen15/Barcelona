import React from 'react';
import {List , ListItem, ListItemIcon, ListItemText , makeStyles
} from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LockOpenIcon from '@material-ui/icons/LockOpen';



const Listas = () => {
  
  return(
    <div>
      <List component='nav' >
        <ListItem button>
          <ListItemIcon>
            <EuroIcon/>
          </ListItemIcon>
          <ListItemText>
            Productos
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText>
            Proyectos
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText>
            Ahorro e Inversion
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText>
            Seguros
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText>
            Promociones
          </ListItemText>
        </ListItem>
      </List>
    </div>
  )
}

export default Listas;