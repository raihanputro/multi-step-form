import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import ArcadeIcon from '../../../../assets/icon-arcade.svg';
import AdvancedIcon from '../../../../assets/icon-advanced.svg';
import ProIcon from '../../../../assets/icon-pro.svg';
import Plan from '../../../../components/Plan';

import HeaderContent from '../../../../components/HeaderContent';
import ButtonPage from '../../../../components/Button';
import { setPersonalInfo } from '../../action';

import classes from './style.module.scss';

export default function SelectPlans() {
  const [switchOff, setSwitch] = useState(false);

  const userDataState = useSelector((state) => state.homeReducer.userData);
  const dispatch = useDispatch();

  const [click, setClick] = useState({  
    arcade: false,
    advanced: false,
    pro: false
  });

  const [plan, setPlan] = useState({
    name: '',
    price: '',
    time: 0
  });

  const onSubmit = () => {
    dispatch(setPersonalInfo({
      ...userDataState, plan
    }));
  }

  return (
    <div>
      <HeaderContent title={'Select your plan'} desc={'You have the option of monthly or yearly billing.'} />
      <Box className={classes.plans}>
        <div onClick={() => {setClick({ arcade: true}), setPlan(switchOff === false ? { name: 'Arcade', price: 9, time: 'Monthly'} : { name: 'Arcade', price: 90, time: 'Yearly'})}}>
          <Plan icon={ArcadeIcon} title={'Arcade'} price={ switchOff === false ? '$9/mo' : '$90/yr' } selected={click.arcade} switchOff={switchOff}/>
        </div>
        <div onClick={() => {setClick({ advanced: true}), setPlan(switchOff === false ? { name: 'Advanced', price: 12, time: 'Monthly'} : { name: 'Advanced', price: 120, time: 'Yearly'})}}>
          <Plan icon={AdvancedIcon} title={'Advanced'} price={ switchOff === false ? '$12/mo' : '$120/yr' } selected={click.advanced} switchOff={switchOff}/>
        </div>
        <div onClick={() => {setClick({ pro: true}), setPlan(switchOff === false ?  { name: 'Pro', price: 15, time: 'Monthly'} : { name: 'Pro', price: 150, time: 'Yearly'})}}>
          <Plan icon={ProIcon} title={'Pro'} price={ switchOff === false ? '$15/mo' : '$150/yr' } selected={click.pro} switchOff={switchOff}/>
        </div>
      </Box>
      <Box className={classes.switch}>
        <span className={!switchOff?"switOn":""}>Monthly</span>
        <div className={classes.toggleContainer}>
            <button className={switchOff === false ? classes.dot1 : classes.dotNonActive} onClick={() => setSwitch(!switchOff)}></button>
            <button className={switchOff === true ? classes.dot2 : classes.dotNonActive} onClick={() => setSwitch(!switchOff)}></button>
            <span className={classes.oval}></span>
        </div>
        <span className={switchOff?"switOn":""}>Yearly</span>
      </Box>
      <ButtonPage func={onSubmit} />
    </div>
  )
}
