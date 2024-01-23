import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { setStep } from '../../pages/Home/action';

import classes from './style.module.scss';


export default function ButtonPage({ func }) {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.homeReducer.step);

  const nextPageHandler = () => {
    if (page === 5) {
      dispatch(setStep(1))
    } else {
      dispatch(setStep(page + 1));
      func();
    }
  }

  const backPageHandler = () => {
    dispatch(setStep(page - 1))
  }

  return (
    <div className={classes.buttonContainer}>
      {page !== 1 && <Button className={classes.backButton} onClick={backPageHandler}>Go Back</Button>}
      <Button className={classes.nextButton} onClick={nextPageHandler}>{page === 4 ? 'Confirm' : 'Next Step'}</Button>
    </div> 
  )
}
