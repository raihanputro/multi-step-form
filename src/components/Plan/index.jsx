import React from 'react';
import { Box } from '@mui/material';

import classes from './style.module.scss';

export default function Plan({ icon, title, price, switchOff, selected}) {
  return (
    <Box className={ selected ? classes.planSelected : classes.plan}>
        <img src={icon} alt={title} />
        <Box className={classes.planDesc}>
            <h2>{title}</h2>
            <p>{price}</p>
            { switchOff && <p className={classes.free}>2 months free</p> }
        </Box>
    </Box>
  )
}
