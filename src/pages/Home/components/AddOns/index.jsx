import React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HeaderContent from '../../../../components/HeaderContent';
import AddOnsPack from '../../../../components/AddOnsPack';
import ButtonPage from '../../../../components/Button';
import { setPersonalInfo } from '../../action';

import classes from './style.module.scss';

export default function AddOns() {

  const dispatch = useDispatch();

  const userDataState = useSelector((state) => state.homeReducer.userData);

  const [addOns, setAddOns] = useState([]);

  const onSubmit = () => {
    dispatch(setPersonalInfo({
      ...userDataState, addOns
    }));
  }
  
  return (
    <div>
      <HeaderContent title={"Pick add-ons"} desc={"Add-ons help enhance your gaming experience."} />
        <Box className={classes.buttonContainer}>
          <div onClick={() => setAddOns(addOns => [...addOns, {name: 'Online service', desc: 'Access to multiplayer games', price: userDataState.plan.time === "Monthly" ? 1 : 10}])}>
            <AddOnsPack title={"Online service"} desc={"Access to multiplayer games"} price={ userDataState.plan.time === "Monthly" ? "+1/mo" : "+10/yr" } />
          </div>
          <div onClick={() => setAddOns(addOns => [ ...addOns,  {name: 'larger storage', desc: 'Extra 1TB of cloud save', price: userDataState.plan.time === "Monthly" ? 2 : 20} ])}>
            <AddOnsPack title={"larger storage"} desc={"Extra 1TB of cloud save"} price={ userDataState.plan.time === "Monthly" ? "+2/mo" : "+20/yr" } />
          </div>
          <div onClick={() => setAddOns(addOns => [ ...addOns, { name: 'Customizable profile', desc: 'Custom theme on your profile', price: userDataState.plan.time === "Monthly" ? 2 : 20}])}>
            <AddOnsPack title={"Customizable profile"} desc={"Custom theme on your profile"} price={ userDataState.plan.time === "Monthly" ? "+2/mo" : "+20/yr" } />
          </div>
        </Box>
      <ButtonPage func={onSubmit} />
    </div>
  )
}
