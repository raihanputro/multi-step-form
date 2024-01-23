import React from 'react';
import { useSelector } from 'react-redux';

import Menu from '../Menu';

import classes from './style.module.scss';

export default function SideMenu() {
  const page = useSelector((state) => state.homeReducer.step);

  return (
    <div className={classes.sideMenu}>
      <Menu step={1} title={"YOUR INFO"}  active={page === 1} />
      <Menu step={2} title={"SELECT PLAN"} active={page === 2} />
      <Menu step={3} title={"ADD-ONS"} active={page === 3}/>
      <Menu step={4} title={"SUMMARY"} active={page === 4}/>
    </div>
  )
}
