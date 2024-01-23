import React, { useEffect, useState} from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import HeaderContent from '../../../../components/HeaderContent';
import ButtonPage from '../../../../components/Button';

import classes from './style.module.scss';

export default function Summary() {
  const [totalPrice, setTotalPrice] = useState(0);

  const userDataState = useSelector((state) => state.homeReducer.userData);

  useEffect(() => { 
    let priceCount = 0;
    userDataState.addOns.map((addOn) => {
      priceCount += addOn.price;
    })

    priceCount += userDataState.plan.price

    setTotalPrice(priceCount);
  }, [])

  return (
    <div>
      <HeaderContent title={"Finishing up"} desc={"Double-check everything looks OK before confirming."} />
      <Box className={classes.sumContainer}>
        <Box className={classes.sumTop}>
          <Box>
            <p>{userDataState.plan.name}</p>
            <a>Change</a>
          </Box>
          <b>${userDataState.plan.price}/{userDataState.plan.time === "Yearly" ? 'yr' : 'mo'}</b>
        </Box>
        {userDataState.addOns.map((addOn, index) => (
          <Box key={index} className={classes.sumBot}>
            <p>{addOn.name}</p>
            <p>+{addOn.price}/{userDataState.plan.time === "Yearly" ? 'yr' : 'mo'}</p>
          </Box>
        ))}    
      </Box>
      <Box className={classes.sumBot}>
        <p>Total (per {userDataState.plan.time === "Yearly" ? 'year' : 'montg'})</p>
        <p>+${totalPrice}/{userDataState.plan.time === "Yearly" ? 'yr' : 'mo'}</p>
      </Box>
      <ButtonPage />
    </div>
  )
}
