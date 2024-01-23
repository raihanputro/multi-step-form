import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

import HeaderContent from '../../../../components/HeaderContent';
import ButtonPage from '../../../../components/Button';
import { setPersonalInfo } from '../../action';

import classes from './style.module.scss';

export default function PersonalInfo() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  


  const onSubmit = () => {
    dispatch(setPersonalInfo({
     info: {name, email, phone}
    }));
  }

  return (
    <div>
      <HeaderContent title={"Personal Info"} desc={"Please provide your name, email address, and phone number."} />
      <FormControl >
        <div className={classes.inputContainer}>
          <FormLabel className={classes.label}>Name</FormLabel>
          <TextField className={classes.input} variant="outlined" type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Stephen King" required={true}/>
        </div>
        <div className={classes.inputContainer}>
          <FormLabel className={classes.label}>Email Address</FormLabel>
          <TextField className={classes.input} variant="outlined" type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g. stephenking@lorem.com" required={true}/>
        </div>
        <div className={classes.inputContainer}>
          <FormLabel className={classes.label}>Phone Number</FormLabel>
          <TextField className={classes.input} variant="outlined" type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. +1 234 567 890" required={true}/>
        </div>
      </FormControl>
      <ButtonPage func={onSubmit} />
    </div>
  )
}
