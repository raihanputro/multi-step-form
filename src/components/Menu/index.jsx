import React from 'react';

import classes from './style.module.scss';

export default function Menu({ step, title, active}) {
  return (
    <div className={classes.steps}>
      <span className={ active ? classes.stepActive : classes.step}>{step}</span>
      <div className={classes.stepDesc}>
        <h1>STEP {step}</h1>
        <p>{title}</p>
      </div>
    </div>
  )
}
