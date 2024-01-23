import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import SideMenu from '../SideMenu';
import ButtonPage from '../Button';

import classes from './style.module.scss';
import { useSelector } from 'react-redux';


export default function Layout() {

  const page = useSelector((state) => state.homeReducer.step);

  return (
    <div className={classes.container}>
        <Card className={classes.cardContainer}>
          <SideMenu />
          <Box className={classes.content}>
            <Outlet />
          </Box>
        </Card>
      </div>  
  )
}
