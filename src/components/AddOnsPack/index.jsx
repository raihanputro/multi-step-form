import React from 'react'
import { Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import classes from './style.module.scss';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AddOnsPack({ title, desc, price}) {
  return (
    <Box  className={classes.buttonContainer}>
        <Checkbox {...label} />
        <div className={classes.buttonDesc}>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <p>{price}</p>
    </Box>
  )
}
